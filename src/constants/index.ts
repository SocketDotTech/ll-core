import { Bridge, ChainId, Middleware,DexNames, RefuelDexNames, SimpleMiddleware } from './types';

export const constants = {
  bridges: Bridge,
  middleware: Middleware,
  chains: ChainId,
  dexNames: DexNames,
  refuelDexNames: RefuelDexNames,
  simpleMiddleware: SimpleMiddleware
};

export * from './types';