import { constants } from '../constants'
import { Address } from './type'
export const addresses: { [chainId: number]: Address } = {
  1: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0xd286595d2e3D879596FAB51f83A702D10a6db27b',
    [constants.bridges.PolygonBridge]:
      '0xa7649aa944b7dce781859c18913c2dc8a97f03e4',
    [constants.bridges.ArbitrumBridge]:
      '0x852C5DE08b9beB014caD171C16B12a8D7456ea3f',
    [constants.bridges.AnySwapRouterV4]:
      '0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB',
    [constants.bridges.Hyphen]: '0x1Aba89fC7ff67D27ccaa51893c46FD1e5fEE924B',
    [constants.bridges.Across]: '0x6D1e0220914f4fb73aF954694564e77024de3693',
    [constants.middleware.OneInch]:
      '0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0',
    [constants.bridges.OptimismBridge]:
      '0xA7f7e4fE8E4cdDCD9969Bd3fbcFF67000CD7DE47',
    [constants.bridges.Celer]: '0x6086c6451217241D8e42e134733A542095E13c47',

    routeIds: {
      [constants.bridges.Hop]: {
        routeId: 1,
        isMiddleware: false,
      },
      [constants.bridges.PolygonBridge]: {
        routeId: 2,
        isMiddleware: false,
      },
      [constants.bridges.ArbitrumBridge]: {
        routeId: 3,
        isMiddleware: false,
      },
      [constants.bridges.AnySwapRouterV4]: {
        routeId: 4,
        isMiddleware: false,
      },
      [constants.bridges.Hyphen]: {
        routeId: 12,
        isMiddleware: false,
      },
      [constants.middleware.OneInch]: {
        routeId: 7,
        isMiddleware: true,
      },
      [constants.bridges.OptimismBridge]: {
        routeId: 8,
        isMiddleware: false,
      },
      [constants.bridges.Celer]: {
        routeId: 9,
        isMiddleware: false,
      },
      [constants.bridges.Across]: {
        routeId: 11,
        isMiddleware: false,
      }
    },
    chainInfo: {
      chainId: 1,
      name: 'mainnet',
      isL1: true,
    },
    extraData: {
      ERC20PredicateProxy: '0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf',
      ERC721PredicateProxy: '0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD',
      RootChainManagerProxy: '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77',
    },
  },

  56: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.AnySwapRouterV4]:
      '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [constants.middleware.OneInch]:
      '0xd286595d2e3D879596FAB51f83A702D10a6db27b',
    [constants.bridges.Celer]: '0x06714dD1783C7Eb28c918156727bfD3aef8A4B8D',
    [constants.bridges.Hyphen]: '0x663dc7E91157c58079f55C1BF5ee1BdB6401Ca7a',
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [constants.middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [constants.bridges.Celer]: {
        routeId: 4,
        isMiddleware: false,
      },
      [constants.bridges.Hyphen]: {
        routeId: 6,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 56,
      name: 'bsc',
      isL1: false,
    },
  },
  250: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.AnySwapRouterV4]:
      '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [constants.middleware.ZeroX]: '0xA7649aa944b7Dce781859C18913c2Dc8A97f03e4',
    [constants.bridges.Celer]: '0xF51e426240E1C0b63dC7F7ec8b172376487329E3',
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [constants.middleware.ZeroX]: {
        routeId: 3,
        isMiddleware: true,
      },
      [constants.bridges.Celer]: {
        routeId: 4,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 250,
      name: 'fantom',
      isL1: false,
    },
  },
  43114: {
    registry: '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [constants.bridges.AnySwapRouterV4]:
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
    [constants.bridges.Hyphen]: '0xBD9f6198a220046E944D704b7ff2A68b778F4A44',
    [constants.middleware.OneInch]:
      '0xbDf50eAe568ECef74796ed6022a0d453e8432410',
    [constants.bridges.Celer]: '0xb584D4bE1A5470CA1a8778E9B86c81e165204599',
    routeIds: {
      [constants.bridges.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [constants.bridges.Hyphen]: {
        routeId: 6,
        isMiddleware: false,
      },
      [constants.middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [constants.bridges.Celer]: {
        routeId: 4,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 43114,
      name: 'Avalanche',
      isL1: false,
    },
  },
  10: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0xaa3d9fA3aB930aE635b001d00C612aa5b14d750e',
    [constants.middleware.OneInch]:
      '0xbDf50eAe568ECef74796ed6022a0d453e8432410',
    [constants.bridges.Across]: '0xA7f7e4fE8E4cdDCD9969Bd3fbcFF67000CD7DE47',
    [constants.bridges.Celer]: '0xb584D4bE1A5470CA1a8778E9B86c81e165204599',
    routeIds: {
      [constants.bridges.Hop]: {
        routeId: 4,
        isMiddleware: false,
      },
      [constants.middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [constants.bridges.Across]: {
        routeId: 7,
        isMiddleware: false,
      },
      [constants.bridges.Celer]: {
        routeId: 6,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 10,
      name: 'Optimism',
      isL1: false,
    },
  },
  42161: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB',
    [constants.bridges.AnySwapRouterV4]:
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
    [constants.middleware.OneInch]:
      '0xaa3d9fA3aB930aE635b001d00C612aa5b14d750e',
    [constants.bridges.Across]: '0x0C0858290b6b268a93fB557af06390A3460c5dB6',
    [constants.bridges.Celer]: '0x3f367Bf9F7dcC55d97cF311b71Fb9F41e415531A',
    routeIds: {
      [constants.bridges.Hop]:  {
      routeId: 5,
      isMiddleware: false,
    },
      [constants.bridges.AnySwapRouterV4]:  {
      routeId: 2,
      isMiddleware: false,
    },
      [constants.middleware.OneInch]:  {
      routeId: 4,
      isMiddleware: true,
    },
      [constants.bridges.Across]:  {
      routeId: 8,
      isMiddleware: false,
    },
      [constants.bridges.Celer]:  {
      routeId: 7,
      isMiddleware: false,
    },
    },
    chainInfo: {
      chainId: 42161,
      name: 'Arbitrum',
      isL1: false,
    },
  },

  100: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0x852C5DE08b9beB014caD171C16B12a8D7456ea3f',
    [constants.middleware.OneInch]:
      '0x565810cbfa3Cf1390963E5aFa2fB953795686339',
    routeIds: {
      [constants.bridges.Hop]:  {
      routeId: 4,
      isMiddleware: false,
    },
      [constants.middleware.OneInch]:  {
      routeId: 2,
      isMiddleware: true,
    },
    },
    chainInfo: {
      chainId: 100,
      name: 'gnosis',
      isL1: false,
    },
  },

  137: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Hop]: '0x03027410f25c527d5aeb3e6e56a6389611dcb2a9',
    [constants.bridges.AnySwapRouterV4]:
      '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
    [constants.bridges.Hyphen]: '0x0fd9F11B9C54a9F100234EeEf9ee7873d73C2204',
    [constants.bridges.Across]: '0xeb03440702bB6de23C63ad1c5A24598433F59F86',
    [constants.middleware.OneInch]:
      '0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0',
    [constants.bridges.Celer]: '0xe48AE3B68f0560d4aaA312E12fD687630C948561',
    [constants.bridges.refuel]: '0xcc3ef7f9df10a5f177c30becd4aaa33f42d5bd57',
    [constants.middleware.refuelOneInch]: '0x7340798b75185849440c11fe09c5e6b494344f5c',
    [constants.middleware.refuel]: '0x09217a4a727418a7a9fc60ae07e31c2dfd13bf2f',
    routeIds: {
      [constants.bridges.Hop]:  {
      routeId: 7,
      isMiddleware: false,
    },
      [constants.bridges.AnySwapRouterV4]:  {
      routeId: 2,
      isMiddleware: false,
    },
      [constants.bridges.Hyphen]:  {
      routeId: 14,
      isMiddleware: false,
    },
      [constants.middleware.OneInch]:  {
      routeId: 5,
      isMiddleware: true,
    },
      [constants.bridges.Celer]:  {
      routeId: 8,
      isMiddleware: false,
    },
    [constants.bridges.refuel]:  {
      routeId: 10,
      isMiddleware: false,
    },
    [constants.middleware.refuelOneInch]:  {
      routeId: 11,
      isMiddleware: true,
    },
    [constants.middleware.refuel]:  {
      routeId: 12,
      isMiddleware: true,
    },
    [constants.bridges.Across]: {
      routeId: 13,
      isMiddleware: false,
    }
    },
    chainInfo: {
      chainId: 137,
      name: 'polygon',
      isL1: false,
    },
  },

  1313161554: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Celer]: '0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB',
    routeIds: {
      [constants.bridges.Celer]:  {
        routeId: 1,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 1313161554,
      name: 'Aurora',
      isL1: false,
    },
  },
}
