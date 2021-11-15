import { NextApiRequest, NextApiResponse } from 'next'

type Vault = {
  /** Vault name (unused), just for readbility */
  name: string

  /** Address of the BunnyVault contract */
  address: string
}

const boostedVaults: Vault[] = [
  {
    name: 'BUNNY-BNB LP (Boost!)',
    address: '0xC004a3b5Af216e9c2c59a9EA8BC3Ee07aF667329',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vault[]>
) {
  res.status(200).json(boostedVaults)
}
