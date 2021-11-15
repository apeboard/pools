import glob from 'glob'
import { chain, set } from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pages = await new Promise((resolve, reject) => {
    glob('**/*.ts', { cwd: './pages/api/' }, (err, pages) => {
      if (err) reject(err)
      resolve(
        chain(pages)
          .filter((page) => page !== 'index.ts')
          .reduce((acc, cur) => {
            const path = cur.replace(/(\.ts)/g, '').replace(/\//g, '.')

            const code = `https://github.com/apeboard/pools/blob/main/pages/api/${cur}`

            const apiOrigin =
              process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000/api'
                : 'https://pools.apeboard.finance'

            const apiRoute = cur.replace(/(\.ts)/g, '')

            const api = `${apiOrigin}/${apiRoute}`

            return set(acc, path, { code, api })
          }, {})
          .value()
      )
    })
  })

  res.status(200).json(pages)
}
