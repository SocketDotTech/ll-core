export enum Bridge {
  Hop = "hop",
  AnySwap = "anyswap",
  AnySwapRouterV4 = "anyswap-router-v4",
  AnySwapRouterV6 = "anyswap-router-v6",
  PolygonBridge = "polygon-bridge",
  ArbitrumBridge = "arbitrum-bridge",
  Hyphen = "hyphen",
  Across = "across",
  OptimismBridge = "optimism-bridge",
  Celer = "celer",
  refuel = "refuel-bridge",
  Stargate = "stargate",
  Connext = "connext",
  CCTP = "cctp",
  Synapse = "synapse",
  BaseBridge = 'base-bridge',
  ZoraBridge =  'zora-bridge',
  ZkSyncNative = "zksync-native"
}

export enum DexNames {
  OneInch = "oneinch",
  ZeroX = "zerox",
  Rainbow = 'rainbow'
}
export enum RefuelDexNames {
  refuelOneInch = 'refuel-oneinch',
  refuelZeroX = 'refuel-zerox',
  refuelRainbow = 'refuel-rainbow',
}
export enum SimpleMiddleware {
  refuel = "refuel",
}

export const Middleware = {
  ...SimpleMiddleware,
  ...DexNames,
  ...RefuelDexNames
}
export type Middleware = DexNames | RefuelDexNames | SimpleMiddleware

export enum ChainId {
  POLYGON_CHAIN_ID = 137,
  MAINNET_CHAIN_ID = 1,
  XDAI_CHAIN_ID = 100,
  ARBITRUM_CHAIN_ID = 42161,
  FANTOM_CHAIN_ID = 250,
  OPTIMISM_CHAIN_ID = 10,
  AVAX_CHAIN_ID = 43114,
  BSC_CHAIN_ID = 56,
  AURORA_CHAIN_ID = 1313161554,
  POLYGON_ZKEVM_CHAIN_ID = 1101,
  ZKSYNC_ERA_CHAIN_ID = 324,
  ZORA_CHAIN_ID = 7777777,
  BASE_CHAIN_ID = 8453
}
