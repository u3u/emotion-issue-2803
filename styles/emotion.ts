import createCache, { Options } from '@emotion/cache'

export const createEmotionCache = (options: Options) => {
  const cache = createCache(options)
  cache.compat = true
  return cache
}

export const globalEmotionCache = createEmotionCache({ key: 'global' })

export const twEmotionCache = createEmotionCache({ key: 'tw' })
