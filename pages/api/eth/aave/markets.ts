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
    underlyingTokenSymbol: 'USDT',
    underlyingTokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    aTokenAddress: '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811',
    aTokenDecimals: 6,
    variableDebtTokenAddress: '0x531842cEbbdD378f8ee36D171d6cC9C4fcf475Ec',
    variableDebtTokenDecimals: 6,
  },
  {
    underlyingTokenSymbol: 'WBTC',
    underlyingTokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    aTokenAddress: '0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656',
    aTokenDecimals: 8,
    variableDebtTokenAddress: '0x9c39809Dec7F95F5e0713634a4D0701329B3b4d2',
    variableDebtTokenDecimals: 8,
  },
  {
    underlyingTokenSymbol: 'WETH',
    underlyingTokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    aTokenAddress: '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xF63B34710400CAd3e044cFfDcAb00a0f32E33eCf',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'YFI',
    underlyingTokenAddress: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
    aTokenAddress: '0x5165d24277cD063F5ac44Efd447B27025e888f37',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x7EbD09022Be45AD993BAA1CEc61166Fcc8644d97',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'ZRX',
    underlyingTokenAddress: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
    aTokenAddress: '0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x85791D117A392097590bDeD3bD5abB8d5A20491A',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'UNI',
    underlyingTokenAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    aTokenAddress: '0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x5BdB050A92CADcCfCDcCCBFC17204a1C9cC0Ab73',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'AAVE',
    underlyingTokenAddress: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
    aTokenAddress: '0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xF7DBA49d571745D9d7fcb56225B05BEA803EBf3C',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'BAT',
    underlyingTokenAddress: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
    aTokenAddress: '0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xfc218A6Dfe6901CB34B1a5281FC6f1b8e7E56877',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'BUSD',
    underlyingTokenAddress: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
    aTokenAddress: '0xA361718326c15715591c299427c62086F69923D9',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xbA429f7011c9fa04cDd46a2Da24dc0FF0aC6099c',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'DAI',
    underlyingTokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    aTokenAddress: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x6C3c78838c761c6Ac7bE9F59fe808ea2A6E4379d',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'ENJ',
    underlyingTokenAddress: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
    aTokenAddress: '0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x38995F292a6E31b78203254fE1cdd5Ca1010A446',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'KNC',
    underlyingTokenAddress: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
    aTokenAddress: '0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x6B05D1c608015Ccb8e205A690cB86773A96F39f1',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'LINK',
    underlyingTokenAddress: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    aTokenAddress: '0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x0b8f12b1788BFdE65Aa1ca52E3e9F3Ba401be16D',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'MANA',
    underlyingTokenAddress: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
    aTokenAddress: '0xa685a61171bb30d4072B338c80Cb7b2c865c873E',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x0A68976301e46Ca6Ce7410DB28883E309EA0D352',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'MKR',
    underlyingTokenAddress: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
    aTokenAddress: '0xc713e5E149D5D0715DcD1c156a020976e7E56B88',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xba728eAd5e496BE00DCF66F650b6d7758eCB50f8',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'REN',
    underlyingTokenAddress: '0x408e41876cCCDC0F92210600ef50372656052a38',
    aTokenAddress: '0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xcd9D82d33bd737De215cDac57FE2F7f04DF77FE0',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'SNX',
    underlyingTokenAddress: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
    aTokenAddress: '0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x267EB8Cf715455517F9BD5834AeAE3CeA1EBdbD8',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'sUSD',
    underlyingTokenAddress: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
    aTokenAddress: '0x6C5024Cd4F8A59110119C56f8933403A539555EB',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xdC6a3Ab17299D9C2A412B0e0a4C1f55446AE0817',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'TUSD',
    underlyingTokenAddress: '0x0000000000085d4780B73119b644AE5ecd22b376',
    aTokenAddress: '0x101cc05f4A51C0319f570d5E146a8C625198e636',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x01C0eb1f8c6F1C1bF74ae028697ce7AA2a8b0E92',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'USDC',
    underlyingTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    aTokenAddress: '0xBcca60bB61934080951369a648Fb03DF4F96263C',
    aTokenDecimals: 6,
    variableDebtTokenAddress: '0x619beb58998eD2278e08620f97007e1116D5D25b',
    variableDebtTokenDecimals: 6,
  },
  {
    underlyingTokenSymbol: 'CRV',
    underlyingTokenAddress: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    aTokenAddress: '0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x00ad8eBF64F141f1C81e9f8f792d3d1631c6c684',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'GUSD',
    underlyingTokenAddress: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
    aTokenAddress: '0xD37EE7e4f452C6638c96536e68090De8cBcdb583',
    aTokenDecimals: 2,
    variableDebtTokenAddress: '0x279AF5b99540c1A3A7E3CDd326e19659401eF99e',
    variableDebtTokenDecimals: 2,
  },
  {
    underlyingTokenSymbol: 'BAL',
    underlyingTokenAddress: '0xba100000625a3754423978a60c9317c58a424e3D',
    aTokenAddress: '0x272F97b7a56a387aE942350bBC7Df5700f8a4576',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x13210D4Fe0d5402bd7Ecbc4B5bC5cFcA3b71adB0',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'xSUSHI',
    underlyingTokenAddress: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
    aTokenAddress: '0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xfAFEDF95E21184E3d880bd56D4806c4b8d31c69A',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'renFIL',
    underlyingTokenAddress: '0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5',
    aTokenAddress: '0x514cd6756CCBe28772d4Cb81bC3156BA9d1744aa',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x348e2eBD5E962854871874E444F4122399c02755',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'RAI',
    underlyingTokenAddress: '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919',
    aTokenAddress: '0xc9BC48c72154ef3e5425641a3c747242112a46AF',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xB5385132EE8321977FfF44b60cDE9fE9AB0B4e6b',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'AMPL',
    underlyingTokenAddress: '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
    aTokenAddress: '0x1E6bb68Acec8fefBD87D192bE09bb274170a0548',
    aTokenDecimals: 9,
    variableDebtTokenAddress: '0xf013D90E4e4E3Baf420dFea60735e75dbd42f1e1',
    variableDebtTokenDecimals: 9,
  },
  {
    underlyingTokenSymbol: 'USDP',
    underlyingTokenAddress: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
    aTokenAddress: '0x2e8F4bdbE3d47d7d7DE490437AeA9915D930F1A3',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xFDb93B3b10936cf81FA59A02A7523B6e2149b2B7',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'DPI',
    underlyingTokenAddress: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
    aTokenAddress: '0x6F634c6135D2EBD550000ac92F494F9CB8183dAe',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0x4dDff5885a67E4EffeC55875a3977D7E60F82ae0',
    variableDebtTokenDecimals: 18,
  },
  {
    underlyingTokenSymbol: 'FRAX',
    underlyingTokenAddress: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
    aTokenAddress: '0xd4937682df3C8aEF4FE912A96A74121C0829E664',
    aTokenDecimals: 18,
    variableDebtTokenAddress: '0xfE8F19B17fFeF0fDbfe2671F248903055AFAA8Ca',
    variableDebtTokenDecimals: 18,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Market[]>
) {
  res.status(200).json(markets)
}
