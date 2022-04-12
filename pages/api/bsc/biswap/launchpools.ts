import { NextApiRequest, NextApiResponse } from 'next'

type Launchpool = {
  /** Pool name (unused), just for readbility */
  name: string

  /** Address of the Smartchef contract */
  address: string
}

/** Only support Stake BSW (Smartchef) launchpools */
const launchpools: Launchpool[] = [
  {
    name: 'Earn CBT',
    address: '0x13CA6A2c8d8D1382cc4DEab5cD0A558cf54bb845',
  },
  {
    name: 'Earn TMT',
    address: '0x6c00f2Ee6A79Fd083DE6EcF541fa59A5Cbe5dfF4',
  },
  {
    name: 'Earn HOTCROSS',
    address: '0x8bb11860EF14fB467c837678D15b64f0DbD94d4B',
  },
  {
    name: 'Earn TBL',
    address: '0xd86e4788DD0B59Ce1d7E42a2916fceEa0CE0b4c4',
  },
  {
    name: 'Earn UDO',
    address: '0x6E31dad921E3c8bE1059ed4432c8714dA9C1Df38',
  },
  {
    name: 'Earn LOA',
    address: '0xcC1B012ad72736653e1e5043D902A4081F3f6a73',
  },
  {
    name: 'Earn BSW',
    address: '0xa4b20183039b2F9881621C3A03732fBF0bfdff10',
  },
  {
    name: 'Earn BSW(Auto)',
    address: '0xcC1B012ad72736653e1e5043D902A4081F3f6a73',
  },
  {
    name: 'Earn BSW',
    address: '0xDbc1A13490deeF9c3C12b44FE77b503c1B061739',
  },
  {
    name: 'Earn NEAR',
    address: '0x6c7F1A28c64E09671beE2554e2bf40548bc7FE1f',
  },
  {
    name: 'Earn SOL',
    address: '0x8277f64fD5784325c29126518171D05298EC86a1',
  },
  {
    name: 'Earn ADA',
    address: '0xB535e0A88912fA434304E072Ae1f1Cb5bC814798',
  },
  {
    name: 'Earn ETH',
    address: '0xF2a99CA15082daD5ADFbBD3B5f976ed94e92143d',
  },
  {
    name: 'Earn BTC',
    address: '0x08a9a13701B7afBDE6716D10A57989A9533e0cfd',
  },
  {
    name: 'Earn bMVL',
    address: '0x9819339F6806A9C6C798bc2D09a309F693AC783D',
  },
  {
    name: 'Earn GQ',
    address: '0x0e2ab69B12B2D5036EA00C04eE213f8792f2EAF6',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Launchpool[]>
) {
  res.status(200).json(launchpools)
}
