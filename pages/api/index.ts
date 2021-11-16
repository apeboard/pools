import glob from 'glob'
import { chain, set } from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pages = await new Promise((resolve, reject) => {
    const pattern =
      process.env.NODE_ENV === 'development' ? '**/*.ts' : '**/*.js'

    const cwd =
      process.env.NODE_ENV === 'development'
        ? './pages/api/'
        : './.next/server/pages/api'

    const indexFile =
      process.env.NODE_ENV === 'development' ? 'index.ts' : 'index.js'

    glob(pattern, { cwd }, (err, pages) => {
      if (err) reject(err)
      resolve(
        chain(pages)
          .filter((page) => page !== indexFile)
          .reduce((acc, cur) => {
            const path = cur.replace(/(\.ts|\.js)/g, '').replace(/\//g, '.')
            const fileName = cur.replace(/\.js/g, '.ts')

            const code = `https://github.com/apeboard/pools/blob/main/pages/api/${fileName}`

            const apiOrigin =
              process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000/api'
                : 'https://pools.apeboard.finance/api'

            const apiRoute = cur.replace(/(\.ts|\.js)/g, '')

            const api = `${apiOrigin}/${apiRoute}`

            return set(acc, path, { code, api })
          }, {})
          .value()
      )
    })
  })

  res.status(200).json(pages)
}
