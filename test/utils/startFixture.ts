import path from 'path'
import { AddressInfo } from 'net'
import webpack, { Configuration } from 'webpack'
import mergeWebpackConfigs from 'webpack-merge'
import { createFsFromVolume, Volume, IFs } from 'memfs'
import mimeTypes from 'mime-types'
import express from 'express'
import HtmlWebpackPlugin from 'html-webpack-plugin'
//@ts-ignore
import TreatPlugin from 'treat/webpack-plugin'

const inMemoryFs = createFsFromVolume(new Volume())

const defaultConfig: Configuration = {
  mode: 'production',
  output: { path: '/' },
  resolve: {
    extensions: ['.js', '.json', '.tsx', '.ts'],
    alias: {
      'fp-ts/es6': 'fp-ts/lib',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        include: [path.resolve(__dirname, 'node_modules/fp-ts')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: ['babel-plugin-treat'],
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new TreatPlugin()],
}

const buildFiles = (config: Configuration): Promise<IFs> =>
  new Promise((resolve, reject) => {
    const bundler = webpack(mergeWebpackConfigs(defaultConfig, config))
    //@ts-ignore
    bundler.outputFileSystem = inMemoryFs

    bundler.run((error, stats) => {
      if (error) reject(error)
      if (stats.hasErrors())
        reject(new Error(stats.toString({ errorDetails: true })))

      resolve(inMemoryFs)
    })
  })

export interface FixtureServer {
  url: string
  close: () => void
}

const startServer = (fs: IFs): Promise<FixtureServer> =>
  new Promise((resolve) => {
    const app = express()

    app.get('*', (req, res) => {
      let filePath = req.path

      if (filePath === '/') filePath = '/index.html'

      try {
        const file = fs.readFileSync(filePath).toString()

        res.set('Content-Type', mimeTypes.lookup(filePath) as string)
        res.send(file)
      } catch (err) {
        console.error(err)

        res.status(404)
      }
    })

    const server = app.listen(() => {
      resolve({
        url: `http://localhost:${(server.address() as AddressInfo).port}`,
        close: () => {
          server.close()
        },
      })
    })
  })

export const startFixture = async (config: Configuration) => {
  const fs = await buildFiles(config)

  return await startServer(fs)
}
