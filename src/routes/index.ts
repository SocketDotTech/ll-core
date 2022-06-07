import { addresses } from '../addresses'
export const routes = Object.keys(addresses).reduce((routesObj: any, chainId: any) => {
  const routeIds = addresses[chainId].routeIds
  const bridges = Object.keys(routeIds)
    .map((bridgeName) => {
      return { bridgeName, ...routeIds[bridgeName] }
    })
    .filter((x: any) => x.isMiddleware === false)

  const middlewares = Object.keys(routeIds)
  .map((middlewareName) => {
    return { middlewareName, ...routeIds[middlewareName] }
  })
  .filter((x: any) => x.isMiddleware === true)

  routesObj[chainId] = {
    bridgeNames: bridges.reduce((bridgeIds, bridge ) => {
      bridgeIds[bridge.routeId] = bridge.bridgeName
      return bridgeIds
    }, {}),
    bridgeIds: bridges.reduce((bridgeNames, bridge ) => {
      bridgeNames[bridge.bridgeName] = bridge.routeId
      return bridgeNames
    }, {}),
    middlewareNames: middlewares.reduce((middlewareIds, middleware ) => {
      middlewareIds[middleware.routeId] = middleware.middlewareName
      return middlewareIds
    }, {}),
    middlewareIds: middlewares.reduce((middlewareNames, middleware ) => {
      middlewareNames[middleware.middlewareName] = middleware.routeId
      return middlewareNames
    }, {})
  }
  return routesObj
}, {})
