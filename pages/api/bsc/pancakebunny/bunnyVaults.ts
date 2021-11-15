import { NextApiRequest, NextApiResponse } from 'next'

type Vault = {
  /** Vault name (unused), just for readbility */
  name: string

  /** Address of the BunnyVault contract */
  address: string
}

const bunnyVaults: Vault[] = [
  {
    name: 'BUNNY (BUNNY Maximizer)',
    address: '0xC004a3b5Af216e9c2c59a9EA8BC3Ee07aF667329',
  },
  {
    name: 'CAKE (CAKE Maximizer)',
    address: '0xedfcb78e73f7ba6ad2d829bf5d462a0924da28ed',
  },
  {
    name: 'CAKE-BNB (LP to LP)',
    address: '0xA599d6b81eC4a5DDd8eCa85e3AAc31E006aF00AA',
  },
  {
    name: 'CAKE-BNB (CAKE Maximizer)',
    address: '0x203Ee29ba85BbDfA23bFaE5D77620AeFDaf92cB1',
  },
  {
    name: 'BTC-BNB (LP to LP)',
    address: '0x285F793CE97079D4a5712E616AFBbb971Dbf1f1f',
  },
  {
    name: 'BTC-BNB (CAKE Maximizer)',
    address: '0xac20925e6615ad6871987e199783Fa80Bf24EB39',
  },
  {
    name: 'ETH-BNB (LP to LP)',
    address: '0x0d17e7B77C678C79C3ab5176e164FF0BCceb8EAa',
  },
  {
    name: 'ETH-BNB (CAKE Maximizer)',
    address: '0x7D52a1697F2dF08E6fb2b5A88E0E8e4D7C11a921',
  },
  {
    name: 'BUSD-BNB (LP to LP)',
    address: '0xE0aca387C6600b455CCFC32B253e2DB13b71ca62',
  },
  {
    name: 'BUSD-BNB (CAKE Maximizer)',
    address: '0x81fa6F9F4599c5316Cc53B782DE7c01EFf4f9551',
  },
  {
    name: 'USDT-BNB (LP to LP)',
    address: '0x633e538EcF0bee1a18c2EDFE10C4Da0d6E71e77B',
  },
  {
    name: 'USDT-BNB (CAKE Maximizer)',
    address: '0xac7D40638271D349cb2DeDfdC6268A77738403Fa',
  },
  {
    name: 'VAI-BUSD (LP to LP)',
    address: '0xFdb7D4AbD0109b36667946726dF943E83570286C',
  },
  {
    name: 'VAI-BUSD (CAKE Maximizer)',
    address: '0x7f0320cef62C88CE1DB7d77c1849082C053E2344',
  },
  {
    name: 'USDT-BUSD (LP to LP)',
    address: '0xC341c6a006cab105E8CD2518e25aaB311Cb22FF6',
  },
  {
    name: 'USDT-BUSD (CAKE Maximizer)',
    address: '0x74fdc215f8309Ec58Fd34455bf3Fee95FB3416dD',
  },
  {
    name: 'DAI-BUSD (CAKE Maximizer)',
    address: '0xf92f12b505594EedF65CB8B973819dfA242c61D7',
  },
  {
    name: 'USDC-BUSD (CAKE Maximizer)',
    address: '0xFeED0bb79035c61CF6519795a02a6a2A69A11aAC',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vault[]>
) {
  res.status(200).json(bunnyVaults)
}
