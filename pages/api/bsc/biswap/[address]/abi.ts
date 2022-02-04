import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import * as data from '../../../../../src/biswap';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = req.url.split('/')[4]

  for (const key in data.contracts) {
    const contract = data.contracts[key].find(
      (contract) => contract.address === address
    )
    if (contract) {
      res.status(200).json(data[contract.abi])
    }
  }
}
