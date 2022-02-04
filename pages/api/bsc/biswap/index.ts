import { NextApiRequest, NextApiResponse } from 'next';

import { contracts, info } from '../../../../src/biswap';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    info,
    contracts,
  })
}
