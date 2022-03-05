import createImageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from './sanity-config'

export const urlFor = source => createImageUrlBuilder(sanityConfig).image(source);