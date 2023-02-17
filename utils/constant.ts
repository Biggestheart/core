export const NETWORK = {
  LOCAL: 'localhost',
  HARDHAT: 'hardhat',
  ETHEREUM: 'ethereum',
  ROPSTEN: 'ropsten',
  RINKEBY: 'rinkeby',
  GOERLI_DEV: 'goerli_dev',
  KOVAN: 'kovan',
  BSC: 'bsc',
  POLYGON: 'polygon',
  POLYGON_DEV: 'polygon_dev',
  POLYGON_MUMBAI: 'polygon_mumbai',
  AVALANCHE: 'avalance',
  FANTOM: 'fantom',
  CELO: 'celo',
  OPTIMISM: 'optimism',
  ARBITRUM: 'arbitrum',
  ARBITRUM_GOERLI_DEV: 'arbitrum_goerli_dev',
  POLYGON_ZK_MANGO: 'polygon_zk_mango',
} as const

export const CHAINID = {
  LOCAL: 1337,
  HARDHAT: 1337,
  ETHEREUM: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  KOVAN: 42,
  BSC: 56,
  POLYGON: 137,
  POLYGON_MUMBAI: 80001,
  AVALANCHE: 43114,
  FANTOM: 250,
  CELO: 42220,
  OPTIMISM: 10,
  ARBITRUM: 42161,
  ARBITRUM_GOERLI: 421613,
  POLYGON_ZK_MANGO: 1422,
} as const

export const MARKET_TYPE = {
  NONE: 0,
  VOLATILE: 0,
  STABLE: 1,
}

export const CLOBER_ADMIN: { [network: string]: string } = {
  [NETWORK.ETHEREUM]: '0xa8a05ED6Ab403e1D2b90D2e5050ed0a1f98b11be',
  [NETWORK.ARBITRUM]: '0x290D9de8d51fDf4683Aa761865743a28909b2553',
  [NETWORK.POLYGON]: '0xF4155c2a753B4f5e001357d3a81169245b374FCf',
}

export const CLOBER_DAO_TREASURY: { [network: string]: string } = {
  [NETWORK.ETHEREUM]: '0xD91012FCd663E9636afA20ff29cF3ed3090A137f',
  [NETWORK.ARBITRUM]: '0xc60eb261CD031F7ccf4b6cbd9ae677E11456A22a',
  [NETWORK.POLYGON]: '0x309bCc19DC4d8F4c31312DF2BEFb3b2821646e7f',
}

export const TOKEN = {
  [NETWORK.ETHEREUM]: {
    WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  },
  [NETWORK.ARBITRUM]: {
    WETH: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    USDC: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    DAI: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    USDT: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  },
  [NETWORK.POLYGON]: {
    WMATIC: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    WETH: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  },
}
