type Link = {
  name: string
  url: string
}

type ProtocolInfo = {
  id: string
  chain: string
  website: string
  description: string
  logoURL: string
  categories: string[]
  links: Link[]
}

export const info: ProtocolInfo = {
  id: 'biswap',
  chain: 'bsc',
  website: 'https://biswap.org/',
  description: 'Biswap is good',
  logoURL:
    'https://assets.coingecko.com/coins/images/16845/small/biswap.png?1625388985',
  categories: ['Dexes'],
  links: [
    {
      name: 'twitter',
      url: 'https://twitter.com/Biswap_DEX',
    },
  ],
}
