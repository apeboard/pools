import { NextApiRequest, NextApiResponse } from 'next'

type Market = {
  /** Token symbol (unused), just for readbility */
  underlyingTokenSymbol: string

  /** Borrowing token address */
  underlyingTokenAddress: string

  /** aToken address */
  aTokenAddress: string

  /** aToken decimals */
  aTokenDecimals: number

  /** Variable debt token address */
  variableDebtTokenAddress: string

  /** Variable debt token decimals */
  variableDebtTokenDecimals: number
}

const markets: Market[] = [
  {
    underlyingTokenSymbol: 'DAI',
    underlyingTokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    aTokenAddress: '0x27F8D03b3a2196956ED754baDc28D73be8830A6e',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x75c4d1Fb84429023170086f06E682DcbBF537b7d',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'USDC',
    underlyingTokenAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    aTokenAddress: '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F',
    aTokenDecimals: 6,
    variableDebtTokenAddress: '0x248960A9d75EdFa3de94F7193eae3161Eb349a12',
    variableDebtTokenDecimals: 6,
  },
  {
    underlyingTokenSymbol: 'WETH',
    underlyingTokenAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    aTokenAddress: '0x28424507fefb6f7f8E9D3860F56504E4e5f5f390',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xeDe17e9d79fc6f9fF9250D9EEfbdB88Cc18038b5',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'USDT',
    underlyingTokenAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    aTokenAddress: '0x60D55F02A771d515e077c9C2403a1ef324885CeC',
    aTokenDecimals: 6,
    variableDebtTokenAddress: '0x8038857FD47108A07d1f6Bf652ef1cBeC279A2f3',
    variableDebtTokenDecimals: 6,
  },
  {
    underlyingTokenSymbol: 'WBTC',
    underlyingTokenAddress: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    aTokenAddress: '0x5c2ed810328349100A66B82b78a1791B101C9D61',
    aTokenDecimals: 8,
    variableDebtTokenAddress: '0xF664F50631A6f0D72ecdaa0e49b0c019Fa72a8dC',
    variableDebtTokenDecimals: 8,
  },
  {
    underlyingTokenSymbol: 'WMATIC',
    underlyingTokenAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    aTokenAddress: '0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x59e8E9100cbfCBCBAdf86b9279fa61526bBB8765',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'AAVE',
    underlyingTokenAddress: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    aTokenAddress: '0x1d2a0E5EC8E5bBDCA5CB219e649B565d8e5c3360',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x1c313e9d0d826662F5CE692134D938656F681350',
    variableDebtTokenDecimals: 18,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Market[]>
) {
  res.status(200).json(markets)
}
