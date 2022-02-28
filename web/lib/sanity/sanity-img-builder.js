import {
    createImageUrlBuilder,
} from 'next-sanity'
import { config } from './sanity-config'

export const urlFor = source => createImageUrlBuilder(config).image(source);