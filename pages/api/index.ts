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
            const path = cur.replace(/(\.ts)/g, '').replace(/\//g, '.')

            const code = `https://github.com/apeboard/pools/blob/main/pages/api/${cur}`

            const apiOrigin =
              process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000/api'

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
