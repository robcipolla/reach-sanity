import {createClient} from 'next-sanity';
import {sanityConfig} from './sanity-config';

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(sanityConfig);

// Helper function to get the sanity client
export const getClient = () => (sanityClient)