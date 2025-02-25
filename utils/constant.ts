import { arbitrum, mainnet, polygon, zkSyncTestnet } from '@wagmi/chains'

export const MARKET_TYPE = {
  NONE: 0,
  VOLATILE: 0,
  STABLE: 1,
}

export const CLOBER_ADMIN: { [network: string]: string } = {
  [mainnet.id]: '0xa8a05ED6Ab403e1D2b90D2e5050ed0a1f98b11be',
  [arbitrum.id]: '0x290D9de8d51fDf4683Aa761865743a28909b2553',
  [polygon.id]: '0xF4155c2a753B4f5e001357d3a81169245b374FCf',
}

export const CLOBER_DAO_TREASURY: { [network: string]: string } = {
  [mainnet.id]: '0xD91012FCd663E9636afA20ff29cF3ed3090A137f',
  [arbitrum.id]: '0xc60eb261CD031F7ccf4b6cbd9ae677E11456A22a',
  [polygon.id]: '0x309bCc19DC4d8F4c31312DF2BEFb3b2821646e7f',
}

export const TOKEN = {
  [mainnet.id]: {
    WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  },
  [arbitrum.id]: {
    WETH: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    USDC: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    DAI: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    USDT: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  },
  [polygon.id]: {
    WMATIC: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    WETH: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  },
  [zkSyncTestnet.id]: {
    WETH: '0x4F0577E9684e5e7c0A87e35f2b6EA88bb14E3be4',
    USDC: '0x0faF6df7054946141266420b43783387A78d82A9',
    DAI: '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
  },
  [zkSyncTestnet.id]: {
    WETH: '0x4F0577E9684e5e7c0A87e35f2b6EA88bb14E3be4',
    USDC: '0x0faF6df7054946141266420b43783387A78d82A9',
    DAI: '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
  },
  // TODO: use `@wagmi/chain`
  [1422]: {
    CUSD: '0xc0d74f9C1c27BC5EC195066863F4de7Ee1152998',
    DAI: '0x5BD1e852642B4eb7364a167768da6E0122033BE4',
    CLOB: '0x1Aa68597c14F3f950E2683fA7a975fc9CdAcC484',
  },
}
