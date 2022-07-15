import { ChainId, Bridge, Middleware } from '../constants/types';
import { Address } from './type';
export const addresses: {
  [chainId: number]: Address;
} = {
  [ChainId.MAINNET_CHAIN_ID]: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [Bridge.Hop]: '0x4C9faD010D8be90Aba505c85eacc483dFf9b8Fa9',
    [Bridge.PolygonBridge]: '0xa7649aa944b7dce781859c18913c2dc8a97f03e4',
    [Bridge.ArbitrumBridge]: '0x852C5DE08b9beB014caD171C16B12a8D7456ea3f',
    [Bridge.AnySwapRouterV4]: '0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB',
    [Bridge.Hyphen]: '0x1Aba89fC7ff67D27ccaa51893c46FD1e5fEE924B',
    [Bridge.Across]: '0x6D1e0220914f4fb73aF954694564e77024de3693',
    [Middleware.OneInch]: '0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0',
    [Bridge.OptimismBridge]: '0x19609EeE157BC38E1A40E19c38218fC3900d97ac',
    [Bridge.Celer]: '0xB6fb3062405985F700fa23758A3053162ddBeFb9',
    [Bridge.refuel]: '0xe48AE3B68f0560d4aaA312E12fD687630C948561',
    [Middleware.refuelOneInch]: '0x87225Ec2C6d8ee8293E8F5667077d699eC2FB6Db',
    [Middleware.refuel]: '0xa1Cc84A788A8405369E49781Ca151bDeDbB5b47C',

    routeIds: {
      [Bridge.Hop]: {
        routeId: 18,
        isMiddleware: false,
      },
      [Bridge.PolygonBridge]: {
        routeId: 2,
        isMiddleware: false,
      },
      [Bridge.ArbitrumBridge]: {
        routeId: 3,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV4]: {
        routeId: 4,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 12,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 7,
        isMiddleware: true,
      },
      [Bridge.OptimismBridge]: {
        routeId: 19,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 17,
        isMiddleware: false,
      },
      [Bridge.Across]: {
        routeId: 11,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 15,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
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

  [ChainId.BSC_CHAIN_ID]: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [Bridge.AnySwapRouterV4]: '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [Middleware.OneInch]: '0xd286595d2e3D879596FAB51f83A702D10a6db27b',
    [Bridge.Celer]: '0x031c67Ee65e508E96c184Fc8D8559B50CedeBaa9',
    [Bridge.Hyphen]: '0x663dc7E91157c58079f55C1BF5ee1BdB6401Ca7a',
    [Bridge.refuel]: '0x807B2e8724cDf346c87EEFF4E309bbFCb8681eC1',
    [Middleware.refuelOneInch]: '0x0C0858290b6b268a93fB557af06390A3460c5dB6',
    [Middleware.refuel]: '0x0Aa26a14C2559319F9dEf7304E93db5aE6b32fb9',
    routeIds: {
      [Bridge.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [Bridge.Celer]: {
        routeId: 11,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 6,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 8,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 9,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
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
  [ChainId.FANTOM_CHAIN_ID]: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [Bridge.AnySwapRouterV4]: '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [Middleware.ZeroX]: '0xA7649aa944b7Dce781859C18913c2Dc8A97f03e4',
    [Bridge.Celer]: '0x6086c6451217241D8e42e134733A542095E13c47',
    [Bridge.refuel]: '0x1D6811553Aff8231aDd04A84F300b89E15D99EA4',
    [Middleware.refuelZeroX]: '0xBD9f6198a220046E944D704b7ff2A68b778F4A44',
    [Middleware.refuel]: '0xA7f7e4fE8E4cdDCD9969Bd3fbcFF67000CD7DE47',
    routeIds: {
      [Bridge.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Middleware.ZeroX]: {
        routeId: 3,
        isMiddleware: true,
      },
      [Bridge.Celer]: {
        routeId: 9,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 6,
        isMiddleware: false,
      },
      [Middleware.refuelZeroX]: {
        routeId: 7,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
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
  [ChainId.AVAX_CHAIN_ID]: {
    registry: '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    [Bridge.AnySwapRouterV4]: '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
    [Bridge.Hyphen]: '0xBD9f6198a220046E944D704b7ff2A68b778F4A44',
    [Middleware.OneInch]: '0xbDf50eAe568ECef74796ed6022a0d453e8432410',
    [Bridge.Celer]: '0x9ca48cAF8AD2B081a0b633d6FCD803076F719fEa',
    [Bridge.refuel]: '0xDC23842d47b80D88A549777eB1F33C2F47f253D0',
    [Middleware.refuelOneInch]: '0x6086c6451217241D8e42e134733A542095E13c47',
    [Middleware.refuel]: '0x957301825Dc21d4A92919C9E72dC9E6C6a29e7f8',
    routeIds: {
      [Bridge.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 6,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [Bridge.Celer]: {
        routeId: 11,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 8,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 9,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
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
  [ChainId.OPTIMISM_CHAIN_ID]: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [Bridge.Hop]: '0x0fd9F11B9C54a9F100234EeEf9ee7873d73C2204',
    [Middleware.OneInch]: '0xbDf50eAe568ECef74796ed6022a0d453e8432410',
    [Bridge.Across]: '0xA7f7e4fE8E4cdDCD9969Bd3fbcFF67000CD7DE47',
    [Bridge.Celer]: '0x0C0858290b6b268a93fB557af06390A3460c5dB6',
    [Bridge.refuel]: '0x47E136cf4A96e1afa72e19022f9699Bbaa1BE60e',
    [Middleware.refuelOneInch]: '0x1d43076909Ca139BFaC4EbB7194518bE3638fc76',
    [Middleware.refuel]: '0x0f933F6a58D885586d356d6677DC87995bdC1B51',
    [Bridge.Hyphen]: '0xeb03440702bB6de23C63ad1c5A24598433F59F86',
    routeIds: {
      [Bridge.Hop]: {
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [Bridge.Across]: {
        routeId: 7,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 13,
        isMiddleware: false,
      },

      [Bridge.refuel]: {
        routeId: 9,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 10,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
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
  [ChainId.ARBITRUM_CHAIN_ID]: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [Bridge.Hop]: '0xa358d60b9Fd8d45A53baEAbd04c621c902572f3D',
    [Bridge.AnySwapRouterV4]: '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
    [Middleware.OneInch]: '0xaa3d9fA3aB930aE635b001d00C612aa5b14d750e',
    [Bridge.Across]: '0x0C0858290b6b268a93fB557af06390A3460c5dB6',
    [Bridge.Celer]: '0x9216253925d1A22CB375EcEf4f33cf93a1D1ff4D',
    [Bridge.Hyphen]: '0xF45Ec13167E8C03490d44fE780609c6209c25c81',
    [Bridge.refuel]: '0x7340798B75185849440c11FE09C5E6b494344F5C',
    [Middleware.refuelOneInch]: '0xdcABb6d7E88396498FFF4CD987F60e354BF2a44b',
    [Middleware.refuel]: '0x23ddd3beC944cdB16Cacf3039e389324Df598B89',
    routeIds: {
      [Bridge.Hop]: {
        routeId: 16,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV4]: {
        routeId: 2,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 4,
        isMiddleware: true,
      },
      [Bridge.Across]: {
        routeId: 8,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 10,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 11,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
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

  [ChainId.XDAI_CHAIN_ID]: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [Bridge.Hop]: '0xAC313d7491910516E06FBfC2A0b5BB49bb072D91',
    [Middleware.OneInch]: '0x565810cbfa3Cf1390963E5aFa2fB953795686339',
    [Bridge.refuel]: '0x7050b6f947BA48508219Ac02EC152E9f198ADc5e',
    [Middleware.refuelOneInch]: '0x2a1094b6585b32FE33929cDdF7Ee3F5a1c1E163A',
    [Middleware.refuel]: '0xD9e492C3899aC768F67aD9AdC0Ce88aAB5463f60',
    routeIds: {
      [Bridge.Hop]: {
        routeId: 8,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 2,
        isMiddleware: true,
      },

      [Bridge.refuel]: {
        routeId: 5,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 6,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
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

  [ChainId.POLYGON_CHAIN_ID]: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [Bridge.Hop]: '0xa3f9a7a13055f37479Ebc28E57C005F5c9A31F68',
    [Bridge.AnySwapRouterV4]: '0x8537307810fC40F4073A12a38554D4Ff78EfFf41',
    [Bridge.Hyphen]: '0x0fd9F11B9C54a9F100234EeEf9ee7873d73C2204',
    [Bridge.Across]: '0xeb03440702bB6de23C63ad1c5A24598433F59F86',
    [Middleware.OneInch]: '0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0',
    [Bridge.Celer]: '0xb48b743b85Bf955c4c039599A3eCdD6175B6787f',
    [Bridge.refuel]: '0xcc3ef7f9df10a5f177c30becd4aaa33f42d5bd57',
    [Middleware.refuelOneInch]: '0x4C9faD010D8be90Aba505c85eacc483dFf9b8Fa9',
    [Middleware.refuel]: '0x602029526b76c5116957aa360472b1141314ab7f',
    routeIds: {
      [Bridge.Hop]: {
        routeId: 21,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV4]: {
        routeId: 2,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 5,
        isMiddleware: true,
      },
      [Bridge.Celer]: {
        routeId: 20,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 10,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 15,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
        routeId: 18,
        isMiddleware: true,
      },
      [Bridge.Across]: {
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

  [ChainId.AURORA_CHAIN_ID]: {
    registry: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    [Bridge.Celer]: '0xBD9f6198a220046E944D704b7ff2A68b778F4A44',
    [Bridge.refuel]: '0xF51e426240E1C0b63dC7F7ec8b172376487329E3',
    [Middleware.refuel]: '0x7050b6f947BA48508219Ac02EC152E9f198ADc5e',
    routeIds: {
      [Bridge.Celer]: {
        routeId: 5,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 3,
        isMiddleware: false,
      },
      [Middleware.refuel]: {
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
};
