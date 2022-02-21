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
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Launchpool[]>
) {
  res.status(200).json(launchpools)
}
