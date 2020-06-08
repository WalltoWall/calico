import { Page } from 'puppeteer'

export const getStyles = async (
  page: Page,
  selector: string,
  pseudoState?: string,
) => {
  const client = await page.target().createCDPSession()

  await client.send('DOM.enable')
  await client.send('CSS.enable')

  const doc = (await client.send('DOM.getDocument')) as any
  const { nodeId } = (await client.send('DOM.querySelector', {
    nodeId: doc.root.nodeId,
    selector,
  })) as any

  if (pseudoState) {
    await client.send('CSS.forcePseudoState', {
      nodeId,
      forcedPseudoClasses: [pseudoState],
    })
  }

  const styleForSingleNode = (await client.send('CSS.getMatchedStylesForNode', {
    nodeId,
  })) as any

  return styleForSingleNode.matchedCSSRules.reduce((prev: any, curr: any) => {
    const styles = Object.assign(
      //@ts-ignore
      ...curr.rule.style.cssProperties.map((rule: any) => ({
        [rule.name]: rule.value,
      })),
    )

    return { ...prev, ...styles }
  }, {})
}
