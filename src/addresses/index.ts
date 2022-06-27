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
    [constants.bridges.Celer]: '0xB6fb3062405985F700fa23758A3053162ddBeFb9',
    [constants.bridges.refuel]: '0xe48AE3B68f0560d4aaA312E12fD687630C948561',
    [constants.middleware.refuelOneInch]:
      '0x87225Ec2C6d8ee8293E8F5667077d699eC2FB6Db',
    [constants.middleware.refuel]: '0xa1Cc84A788A8405369E49781Ca151bDeDbB5b47C',

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
        routeId: 17,
        isMiddleware: false,
      },
      [constants.bridges.Across]: {
        routeId: 11,
        isMiddleware: false,
      },
      [constants.bridges.refuel]: {
        routeId: 14,
        isMiddleware: false,
      },
      [constants.middleware.refuelOneInch]: {
        routeId: 15,
        isMiddleware: true,
      },
      [constants.middleware.refuel]: {
        routeId: 16,
        isMiddleware: true,
      },
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
    [constants.bridges.Celer]: '0x031c67Ee65e508E96c184Fc8D8559B50CedeBaa9',
    [constants.bridges.Hyphen]: '0x663dc7E91157c58079f55C1BF5ee1BdB6401Ca7a',
    [constants.bridges.refuel]: '0x807B2e8724cDf346c87EEFF4E309bbFCb8681eC1',
    [constants.middleware.refuelOneInch]:
      '0x0C0858290b6b268a93fB557af06390A3460c5dB6',
    [constants.middleware.refuel]: '0x0Aa26a14C2559319F9dEf7304E93db5aE6b32fb9',
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
        routeId: 11,
        isMiddleware: false,
      },
      [constants.bridges.Hyphen]: {
        routeId: 6,
        isMiddleware: false,
      },
      [constants.bridges.refuel]: {
        routeId: 8,
        isMiddleware: false,
      },
      [constants.middleware.refuelOneInch]: {
        routeId: 9,
        isMiddleware: true,
      },
      [constants.middleware.refuel]: {
        routeId: 10,
        isMiddleware: true,
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
    [constants.bridges.Celer]: '0x6086c6451217241D8e42e134733A542095E13c47',
    [constants.bridges.refuel]: '0x1D6811553Aff8231aDd04A84F300b89E15D99EA4',
    [constants.middleware.refuelZeroX]:
      '0xBD9f6198a220046E944D704b7ff2A68b778F4A44',
    [constants.middleware.refuel]: '0xA7f7e4fE8E4cdDCD9969Bd3fbcFF67000CD7DE47',
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
        routeId: 9,
        isMiddleware: false,
      },
      [constants.bridges.refuel]: {
        routeId: 6,
        isMiddleware: false,
      },
      [constants.middleware.refuelZeroX]: {
        routeId: 7,
        isMiddleware: true,
      },
      [constants.middleware.refuel]: {
        routeId: 8,
        isMiddleware: true,
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
    [constants.bridges.Celer]: '0x9ca48cAF8AD2B081a0b633d6FCD803076F719fEa',
    [constants.bridges.refuel]: '0xDC23842d47b80D88A549777eB1F33C2F47f253D0',
    [constants.middleware.refuelOneInch]:
      '0x6086c6451217241D8e42e134733A542095E13c47',
    [constants.middleware.refuel]: '0x957301825Dc21d4A92919C9E72dC9E6C6a29e7f8',
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
        routeId: 11,
        isMiddleware: false,
      },
      [constants.bridges.refuel]: {
        routeId: 8,
        isMiddleware: false,
      },
      [constants.middleware.refuelOneInch]: {
        routeId: 9,
        isMiddleware: true,
      },
      [constants.middleware.refuel]: {
        routeId: 10,
        isMiddleware: true,
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
    [constants.bridges.Celer]: '0x0C0858290b6b268a93fB557af06390A3460c5dB6',
    [constants.bridges.refuel]: '0x47E136cf4A96e1afa72e19022f9699Bbaa1BE60e',
    [constants.middleware.refuelOneInch]:
      '0x1d43076909Ca139BFaC4EbB7194518bE3638fc76',
    [constants.middleware.refuel]: '0x0f933F6a58D885586d356d6677DC87995bdC1B51',
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
        routeId: 13,
        isMiddleware: false,
      },

      [constants.bridges.refuel]: {
        routeId: 9,
        isMiddleware: false,
      },
      [constants.middleware.refuelOneInch]: {
        routeId: 10,
        isMiddleware: true,
      },
      [constants.middleware.refuel]: {
        routeId: 11,
        isMiddleware: true,
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
    [constants.bridges.Celer]: '0x9216253925d1A22CB375EcEf4f33cf93a1D1ff4D',
    [constants.bridges.refuel]: '0x7340798B75185849440c11FE09C5E6b494344F5C',
    [constants.middleware.refuelOneInch]:
      '0xdcABb6d7E88396498FFF4CD987F60e354BF2a44b',
    [constants.middleware.refuel]: '0x23ddd3beC944cdB16Cacf3039e389324Df598B89',
    routeIds: {
      [constants.bridges.Hop]: {
        routeId: 5,
        isMiddleware: false,
      },
      [constants.bridges.AnySwapRouterV4]: {
        routeId: 2,
        isMiddleware: false,
      },
      [constants.middleware.OneInch]: {
        routeId: 4,
        isMiddleware: true,
      },
      [constants.bridges.Across]: {
        routeId: 8,
        isMiddleware: false,
      },
      [constants.bridges.Celer]: {
        routeId: 14,
        isMiddleware: false,
      },
      [constants.bridges.refuel]: {
        routeId: 10,
        isMiddleware: false,
      },
      [constants.middleware.refuelOneInch]: {
        routeId: 11,
        isMiddleware: true,
      },
      [constants.middleware.refuel]: {
        routeId: 12,
        isMiddleware: true,
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
    [constants.bridges.refuel]: '0x7050b6f947BA48508219Ac02EC152E9f198ADc5e',
    [constants.middleware.refuelOneInch]:
      '0x2a1094b6585b32FE33929cDdF7Ee3F5a1c1E163A',
    [constants.middleware.refuel]: '0xD9e492C3899aC768F67aD9AdC0Ce88aAB5463f60',
    routeIds: {
      [constants.bridges.Hop]: {
        routeId: 4,
        isMiddleware: false,
      },
      [constants.middleware.OneInch]: {
        routeId: 2,
        isMiddleware: true,
      },

      [constants.bridges.refuel]: {
        routeId: 5,
        isMiddleware: false,
      },
      [constants.middleware.refuelOneInch]: {
        routeId: 6,
        isMiddleware: true,
      },
      [constants.middleware.refuel]: {
        routeId: 7,
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
    [constants.bridges.Celer]: '0xb48b743b85Bf955c4c039599A3eCdD6175B6787f',
    [constants.bridges.refuel]: '0xcc3ef7f9df10a5f177c30becd4aaa33f42d5bd57',
    [constants.middleware.refuelOneInch]:
      '0x4C9faD010D8be90Aba505c85eacc483dFf9b8Fa9',
    [constants.middleware.refuel]: '0x602029526b76c5116957aa360472b1141314ab7f',
    routeIds: {
      [constants.bridges.Hop]: {
        routeId: 7,
        isMiddleware: false,
      },
      [constants.bridges.AnySwapRouterV4]: {
        routeId: 2,
        isMiddleware: false,
      },
      [constants.bridges.Hyphen]: {
        routeId: 14,
        isMiddleware: false,
      },
      [constants.middleware.OneInch]: {
        routeId: 5,
        isMiddleware: true,
      },
      [constants.bridges.Celer]: {
        routeId: 20,
        isMiddleware: false,
      },
      [constants.bridges.refuel]: {
        routeId: 10,
        isMiddleware: false,
      },
      [constants.middleware.refuelOneInch]: {
        routeId: 15,
        isMiddleware: true,
      },
      [constants.middleware.refuel]: {
        routeId: 18,
        isMiddleware: true,
      },
      [constants.bridges.Across]: {
        routeId: 13,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 137,
      name: 'polygon',
      isL1: false,
    },
  },

  1313161554: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [constants.bridges.Celer]: '0xBD9f6198a220046E944D704b7ff2A68b778F4A44',
    [constants.bridges.refuel]: '0xF51e426240E1C0b63dC7F7ec8b172376487329E3',
    [constants.middleware.refuel]: '0x7050b6f947BA48508219Ac02EC152E9f198ADc5e',
    routeIds: {
      [constants.bridges.Celer]: {
        routeId: 5,
        isMiddleware: false,
      },
      [constants.bridges.refuel]: {
        routeId: 3,
        isMiddleware: false,
      },
      [constants.middleware.refuel]: {
        routeId: 4,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 1313161554,
      name: 'Aurora',
      isL1: false,
    },
  },
}
