import { ChainId, Bridge, Middleware } from "../constants/types";
import { Address } from "./type";
export const addresses: {
  [chainId: number]: Address;
} = {
  [ChainId.MAINNET_CHAIN_ID]: {
    registry: "0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0",
    feeRouter: "0x5e2361cd711de7efe2a85045b643271a64262d40",
    stargateReceiver: "0x362c116779D2d27F822a497E4650B6e2616d3859",
    [Bridge.Hop]: "0x4C9faD010D8be90Aba505c85eacc483dFf9b8Fa9",
    [Bridge.PolygonBridge]: "0xa7649aa944b7dce781859c18913c2dc8a97f03e4",
    [Bridge.ArbitrumBridge]: "0x852C5DE08b9beB014caD171C16B12a8D7456ea3f",
    [Bridge.AnySwapRouterV4]: "0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB",
    [Bridge.AnySwapRouterV6]: "0x64D1a81a38e1A9A7Ae5b5F15C8870480ca10A76B",
    [Bridge.Hyphen]: "0x1Aba89fC7ff67D27ccaa51893c46FD1e5fEE924B",
    [Middleware.OneInch]: "0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0",
    [Bridge.OptimismBridge]: "0x14aC5b3580dD1e546CD7287Cd1faDba9A8736628",
    [Bridge.BaseBridge]: "0xEE29B82504812B3A70fF2fDEC66776b95eACcf05",
    [Bridge.ZoraBridge]: "0xEE29B82504812B3A70fF2fDEC66776b95eACcf05",
    [Bridge.Celer]: "0xB6fb3062405985F700fa23758A3053162ddBeFb9",
    [Bridge.refuel]: "0xe48AE3B68f0560d4aaA312E12fD687630C948561",
    [Bridge.Stargate]: "0x6cf8d2bf45fe99e369db145faf6fb606a50b27f3",
    [Bridge.Connext]: "0x43D32673649800D8c697ce92b10cD5cd6dea55f8",
    [Bridge.CCTP]: "0x61603bBB585B88Ca34Ae5AcD5A094e4228c4EB48",
    [Middleware.refuelOneInch]: "0x87225Ec2C6d8ee8293E8F5667077d699eC2FB6Db",
    [Middleware.refuel]: "0xa1Cc84A788A8405369E49781Ca151bDeDbB5b47C",
    [Middleware.ZeroX]: "0x33BE2a7CF4Bb94d28131116F840d313Cab1eD2DA",
    [Middleware.refuelZeroX]: "0x201c8d3AC4C261690e7C42A26bA49e614585c0D1",
    [Middleware.Rainbow]: "0x7d3C52110E391D1a227A26736c0B3f3f19cc60f8",
    [Middleware.refuelRainbow]: "0x0df5AfFC28FF314FEF2Ba82d8C44685A460EF538",

    routeIds: {
      [Bridge.CCTP]: {
        routeId: 29,
        isMiddleware: false,
      },
      [Bridge.Connext]: {
        routeId: 28,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV6]: {
        routeId: 26,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 27,
        isMiddleware: false,
      },
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
        routeId: 20,
        isMiddleware: false,
      },
      [Bridge.BaseBridge]: {
        routeId: 32,
        isMiddleware: false,
      },
      [Bridge.ZoraBridge]: {
        routeId: 33,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 17,
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
      [Middleware.ZeroX]: {
        routeId: 21,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 22,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 24,
        isMiddleware: true,
      },
      [Middleware.refuelRainbow]: {
        routeId: 23,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 1,
      name: "mainnet",
      isL1: true,
    },
    extraData: {
      ERC20PredicateProxy: "0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf",
      ERC721PredicateProxy: "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD",
      RootChainManagerProxy: "0xA0c68C638235ee32657e8f720a23ceC1bFc77C77",
    },
  },

  [ChainId.BSC_CHAIN_ID]: {
    registry: "0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0",
    feeRouter: "0x3EC389511AF4AF02C9F3723C0fdEB105d1cC5A9C",
    stargateReceiver: "0x71cF3E64E42bcAEC7485AF71571d7033E5b7dF93",
    [Bridge.AnySwapRouterV4]: "0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3",
    [Bridge.AnySwapRouterV6]: "0x91f9c44fE349D0C309E9463FA8e871A015041dE0",
    [Middleware.OneInch]: "0xd286595d2e3D879596FAB51f83A702D10a6db27b",
    [Bridge.Celer]: "0x031c67Ee65e508E96c184Fc8D8559B50CedeBaa9",
    [Bridge.Hyphen]: "0x663dc7E91157c58079f55C1BF5ee1BdB6401Ca7a",
    [Bridge.refuel]: "0x807B2e8724cDf346c87EEFF4E309bbFCb8681eC1",
    [Bridge.Stargate]: "0x1747a20e940f37fE566f24600f0F2B6E50933C94",
    [Bridge.Connext]: "0xDB4592E96275a9feE6134Dd940F3ae2D0D7d8292",
    [Middleware.refuelOneInch]: "0x0C0858290b6b268a93fB557af06390A3460c5dB6",
    [Middleware.refuel]: "0x0Aa26a14C2559319F9dEf7304E93db5aE6b32fb9",
    [Middleware.ZeroX]: "0x805696d6079ce9F347811f0Fe4D7e4c24C15dF5f",
    [Middleware.refuelZeroX]: "0xAAeB4b20521dDf5C8C90c2a39D3c28F224E08c52",
    routeIds: {
      [Bridge.Connext]: {
        routeId: 17,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV6]: {
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 16,
        isMiddleware: false,
      },
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
      [Middleware.ZeroX]: {
        routeId: 12,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 13,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 56,
      name: "bsc",
      isL1: false,
    },
  },
  [ChainId.FANTOM_CHAIN_ID]: {
    registry: "0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0",
    feeRouter: "0x5adde24B6a11B86C23a4f61c236A8795BD4aa2bB",
    stargateReceiver: "0x24dE7b66673e6996a6677EC27c3678a32Ed5Bd15",
    [Bridge.AnySwapRouterV4]: "0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3",
    [Bridge.AnySwapRouterV6]: "0xCc6effFD8972f3cea0E08107A578A4bf845F1724",
    [Middleware.ZeroX]: "0xA7649aa944b7Dce781859C18913c2Dc8A97f03e4",
    [Bridge.Celer]: "0x6086c6451217241D8e42e134733A542095E13c47",
    [Bridge.refuel]: "0x1D6811553Aff8231aDd04A84F300b89E15D99EA4",
    [Bridge.Hyphen]: "0x4732133E7440E70ED05d759045299Bb162384E43",
    [Bridge.Stargate]: "0x8c2f17426bcbddc6dbc710df2869fdb911d6ff88",
    [Middleware.refuelZeroX]: "0xBD9f6198a220046E944D704b7ff2A68b778F4A44",
    [Middleware.refuel]: "0xA7f7e4fE8E4cdDCD9969Bd3fbcFF67000CD7DE47",
    [Middleware.OneInch]: "0x957301825Dc21d4A92919C9E72dC9E6C6a29e7f8",
    [Middleware.refuelOneInch]: "0x17A89B7372866a0155bF14980973Ad4408A3145C",

    routeIds: {
      [Bridge.AnySwapRouterV6]: {
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 12,
        isMiddleware: false,
      },
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
      [Middleware.OneInch]: {
        routeId: 10,
        isMiddleware: true,
      },
      [Middleware.refuelOneInch]: {
        routeId: 11,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 250,
      name: "fantom",
      isL1: false,
    },
  },
  [ChainId.AVAX_CHAIN_ID]: {
    registry: "0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3",
    feeRouter: "0xc0315627bc6404F40188D1FAE5a7151650DEdA10",
    stargateReceiver: "0x83b2cda6A33128324ee9cb2f0360bA8a42Cec2C6",
    [Bridge.AnySwapRouterV4]: "0x8537307810fC40F4073A12a38554D4Ff78EfFf41",
    [Bridge.AnySwapRouterV6]: "0x9F13b2D1C01937Bc5df1D3f27213BaDC494d8476",
    [Bridge.Hyphen]: "0xBD9f6198a220046E944D704b7ff2A68b778F4A44",
    [Middleware.OneInch]: "0xbDf50eAe568ECef74796ed6022a0d453e8432410",
    [Bridge.Celer]: "0x9ca48cAF8AD2B081a0b633d6FCD803076F719fEa",
    [Bridge.refuel]: "0xDC23842d47b80D88A549777eB1F33C2F47f253D0",
    [Bridge.Stargate]: "0x1765b308001753901c7A676d0E1cCE5d03e18dd0",
    [Bridge.CCTP]: "0xB6dD3804f43b55866B7eCC61970a6Dbf9906eB2f",
    [Middleware.refuelOneInch]: "0x6086c6451217241D8e42e134733A542095E13c47",
    [Middleware.refuel]: "0x957301825Dc21d4A92919C9E72dC9E6C6a29e7f8",
    [Middleware.ZeroX]: "0xdcABb6d7E88396498FFF4CD987F60e354BF2a44b",
    [Middleware.refuelZeroX]: "0x23ddd3beC944cdB16Cacf3039e389324Df598B89",
    routeIds: {
      [Bridge.AnySwapRouterV6]: {
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 16,
        isMiddleware: false,
      },
      [Bridge.CCTP]: {
        routeId: 18,
        isMiddleware: false,
      },
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
      [Middleware.ZeroX]: {
        routeId: 12,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 13,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 43114,
      name: "Avalanche",
      isL1: false,
    },
  },
  [ChainId.OPTIMISM_CHAIN_ID]: {
    registry: "0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0",
    feeRouter: "0xE00D67F732E6ED1158553fDBE9C6a151d06bed6c",
    stargateReceiver: "0xddC3A2bc1D6252D09A82814269d602D84Ca3E7ae",
    [Bridge.Hop]: "0x0fd9F11B9C54a9F100234EeEf9ee7873d73C2204",
    [Bridge.AnySwapRouterV6]: "0x85197bC6A4753829889Cf31193639f2429a80A46",
    [Middleware.OneInch]: "0xbDf50eAe568ECef74796ed6022a0d453e8432410",
    [Bridge.Celer]: "0x0C0858290b6b268a93fB557af06390A3460c5dB6",
    [Bridge.refuel]: "0x47E136cf4A96e1afa72e19022f9699Bbaa1BE60e",
    [Bridge.Connext]: "0x50f7e7EEf0Fd9173f6b33Ce4EAFEdec606673bCE",
    [Middleware.refuelOneInch]: "0x1d43076909Ca139BFaC4EbB7194518bE3638fc76",
    [Middleware.refuel]: "0x0f933F6a58D885586d356d6677DC87995bdC1B51",
    [Bridge.Hyphen]: "0xeb03440702bB6de23C63ad1c5A24598433F59F86",
    [Bridge.Stargate]: "0x9eA1C30A61f33c82762DF9bce404B19735302B88",
    [Middleware.ZeroX]: "0x2d7F2B4CEe097F08ed8d30D928A40eB1379071Fe",
    [Middleware.refuelZeroX]: "0x029057DF831CCE19fc7adBb8D7283afCBB9d88D0",
    [Middleware.Rainbow]: "0x3EC389511AF4AF02C9F3723C0fdEB105d1cC5A9C",
    [Middleware.refuelRainbow]: "0x387bcEE789A50b42EDa6AebC55B7505183ae56f0",

    routeIds: {
      [Bridge.Connext]: {
        routeId: 23,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV6]: {
        routeId: 22,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 21,
        isMiddleware: false,
      },
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
      [Middleware.ZeroX]: {
        routeId: 16,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 17,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 19,
        isMiddleware: true,
      },
      [Middleware.refuelRainbow]: {
        routeId: 18,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 10,
      name: "Optimism",
      isL1: false,
    },
  },
  [ChainId.ARBITRUM_CHAIN_ID]: {
    registry: "0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0",
    feeRouter: "0x8b14984de0ddD2e080d8679fEbE2f5c94B975aF8",
    stargateReceiver: "0x88616cB9499F32Ff6A784B66B60aABF0bCf0df39",
    [Bridge.Hop]: "0xa358d60b9Fd8d45A53baEAbd04c621c902572f3D",
    [Bridge.AnySwapRouterV4]: "0x8537307810fC40F4073A12a38554D4Ff78EfFf41",
    [Bridge.AnySwapRouterV6]: "0x9F13b2D1C01937Bc5df1D3f27213BaDC494d8476",
    [Middleware.OneInch]: "0xaa3d9fA3aB930aE635b001d00C612aa5b14d750e",
    [Bridge.Celer]: "0x9216253925d1A22CB375EcEf4f33cf93a1D1ff4D",
    [Bridge.Hyphen]: "0xF45Ec13167E8C03490d44fE780609c6209c25c81",
    [Bridge.refuel]: "0x7340798B75185849440c11FE09C5E6b494344F5C",
    [Bridge.Stargate]: "0xd7E23c91d00daF2017BdB96F57B69c56dc82C317",
    [Bridge.Connext]: "0x6C0dF10c800B130c53c54a2e49B14fB20e829DB5",
    [Bridge.CCTP]: "0x1a4f0075987f557ae59caf559dc7c98ee86a8d1f",
    [Middleware.refuelOneInch]: "0xdcABb6d7E88396498FFF4CD987F60e354BF2a44b",
    [Middleware.refuel]: "0x23ddd3beC944cdB16Cacf3039e389324Df598B89",
    [Middleware.Rainbow]: "0x5837B68a8560bA2087006BcF69BB6Ef022005Cf4",
    [Middleware.refuelRainbow]: "0xeb59a4D442Ab0Db5d18631FA51E7dBC351506302",
    routeIds: {
      [Bridge.CCTP]: {
        routeId: 25,
        isMiddleware: false,
      },
      [Bridge.Connext]: {
        routeId: 24,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV6]: {
        routeId: 22,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 23,
        isMiddleware: false,
      },
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
      [Middleware.Rainbow]: {
        routeId: 18,
        isMiddleware: true,
      },
      [Middleware.refuelRainbow]: {
        routeId: 17,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 42161,
      name: "Arbitrum",
      isL1: false,
    },
  },

  [ChainId.XDAI_CHAIN_ID]: {
    registry: "0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0",
    feeRouter: "0xFC5B37ba0f6A43fd67CdD7f30a2Fc1Df126A1027",
    [Bridge.Hop]: "0xAC313d7491910516E06FBfC2A0b5BB49bb072D91",
    [Middleware.OneInch]: "0x565810cbfa3Cf1390963E5aFa2fB953795686339",
    [Bridge.refuel]: "0x7050b6f947BA48508219Ac02EC152E9f198ADc5e",
    [Bridge.Connext]: "0xa96D6BD50F1836A3F8C79299E06A1e16A370E0C4",
    [Middleware.refuelOneInch]: "0x2a1094b6585b32FE33929cDdF7Ee3F5a1c1E163A",
    [Middleware.refuel]: "0xD9e492C3899aC768F67aD9AdC0Ce88aAB5463f60",
    routeIds: {
      [Bridge.Connext]: {
        routeId: 9,
        isMiddleware: false,
      },
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
      name: "gnosis",
      isL1: false,
    },
  },

  [ChainId.POLYGON_CHAIN_ID]: {
    registry: "0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0",
    feeRouter: "0xc9b6F5eEaBb099BBbFB130b78249E81f70EFc946",
    stargateReceiver: "0x8DfeB2e0B392f0033C8685E35FB4763d88a70d12",
    [Bridge.Hop]: "0xa3f9a7a13055f37479Ebc28E57C005F5c9A31F68",
    [Bridge.AnySwapRouterV4]: "0x8537307810fC40F4073A12a38554D4Ff78EfFf41",
    [Bridge.AnySwapRouterV6]: "0x6283790DBe68b674769E6288816C10B30370Af27",
    [Bridge.Hyphen]: "0x0fd9F11B9C54a9F100234EeEf9ee7873d73C2204",
    [Middleware.OneInch]: "0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0",
    [Bridge.Celer]: "0xb48b743b85Bf955c4c039599A3eCdD6175B6787f",
    [Bridge.Stargate]: "0xab0A709A5B73b907a0e35f268Cc9C292a94BdB82",
    [Bridge.refuel]: "0xcc3ef7f9df10a5f177c30becd4aaa33f42d5bd57",
    [Bridge.Connext]: "0x696a6059F23321CEdA099731f4DDae2A3DeAEB11",
    [Middleware.refuelOneInch]: "0x4C9faD010D8be90Aba505c85eacc483dFf9b8Fa9",
    [Middleware.refuel]: "0x602029526b76c5116957aa360472b1141314ab7f",
    [Middleware.ZeroX]: "0xAE3dd4C0E3cA6823Cdbe9641B1938551cCb25a2d",
    [Middleware.refuelZeroX]: "0x3694Ab37011764fA64A648C2d5d6aC0E9cD5F98e",
    [Middleware.Rainbow]: "0xc0ab6E988fe7ba442D17A36d35723A6686f61386",
    [Middleware.refuelRainbow]: "0x7926f34d7ad2379c89c5459959254ab2fffeb3fc",
    routeIds: {
      [Bridge.Connext]: {
        routeId: 32,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV6]: {
        routeId: 31,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 30,
        isMiddleware: false,
      },
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
      [Middleware.ZeroX]: {
        routeId: 23,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 24,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 26,
        isMiddleware: true,
      },
      [Middleware.refuelRainbow]: {
        routeId: 25,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 137,
      name: "polygon",
      isL1: false,
    },
  },

  [ChainId.AURORA_CHAIN_ID]: {
    registry: "0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0",
    feeRouter: "0x6277cEe7746c382dBDEB1DeE57884EA79bD28E04",
    [Bridge.Celer]: "0xBD9f6198a220046E944D704b7ff2A68b778F4A44",
    [Bridge.refuel]: "0xF51e426240E1C0b63dC7F7ec8b172376487329E3",
    [Middleware.refuel]: "0x7050b6f947BA48508219Ac02EC152E9f198ADc5e",
    [Middleware.OneInch]: "0xDC23842d47b80D88A549777eB1F33C2F47f253D0",
    [Middleware.refuelOneInch]: "0x6086c6451217241D8e42e134733A542095E13c47",

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
      [Middleware.OneInch]: {
        routeId: 6,
        isMiddleware: true,
      },
      [Middleware.refuelOneInch]: {
        routeId: 7,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 1313161554,
      name: "Aurora",
      isL1: false,
    },
  },
  [ChainId.BASE_CHAIN_ID]: {
    registry: "0x4BfE629847BC9d0d7A4fB4E423d9c1cAABAC5bc5",
    feeRouter: "",
    [Bridge.Hop]: "0x43AA68673e54e95E07e8388BDd8612Abe6Df6F81",
    routeIds: {
      [Bridge.Hop]: {
        routeId: 1,
        isMiddleware: false,
      },
    },
  },
};
