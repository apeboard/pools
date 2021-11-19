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
    name: 'Earn BTCB',
    address: '0xD4855892a3188DA76da0066b9e4918939511E67a',
  },
  {
    name: 'Earn ETH',
    address: '0x9b9F3F1112E74765518cE93B1489c70F6db52bFf',
  },
  {
    name: 'Earn ALU',
    address: '0x683963df7331c65Df8ACE6818651a7611bdc39E5',
  },
  {
    name: 'Earn ZOON',
    address: '0xBD09D5E5dcC904bbf8649af78d323eEfdf7b0D1D',
  },
  {
    name: 'Earn AIRT',
    address: '0x8b10E6959F2915f532fE142b9C53B167eEC42fF4',
  },
  {
    name: 'Earn PEARL',
    address: '0x7D621C9F70B3743CbAb15c22d781754FcD7c9589',
  },
  {
    name: 'Earn PCT',
    address: '0x131010022654B57b0C39c918ef8313ce79Fa04B8',
  },
  {
    name: 'Earn KALA',
    address: '0x6653c3c4CD2083fEbFf49A52F9a5ce4c30978A25',
  },
  {
    name: 'Earn ETERNAL',
    address: '0x44EeCE1e9ccbaa5Ad0b8C14192467Ab83BE0BA51',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Launchpool[]>
) {
  res.status(200).json(launchpools)
}
