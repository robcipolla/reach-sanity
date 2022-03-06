import { groq } from "next-sanity";
import { getServerSideSitemap } from "next-sitemap";
import { getClient } from "../../lib/sanity/sanity-server";

/**
 * Function to get all the sitemap paths
 */
export const getPaths = async () => {
    
    /**
     * Get the sitemap data for the pages
     */
    const pagesQuery = groq`*[_type in ['homePage', 'aboutPage']]{
        slug,
        _updatedAt,
        _type
    }`
    const pages = await getClient().fetch(pagesQuery);
    const pagePaths = pages.map(page => {
        if(page._type == 'homePage') {
            return {
                path: '',
                updated: page._updatedAt
            }
        }

        return {
            path: page.slug.current,
            updated: page._updatedAt
        };
    })

    /**
     * Get the sitemap data for the blogs
     */
    const postsQuery = groq`*[_type == 'post' && !(_id in path('drafts.**'))] | order(_createdAt desc){
        slug,
        _updatedAt
    }`;
    const postSlugs = await getClient().fetch(postsQuery);
    const postPaths = postSlugs.map(slug => {
        return {
            path: `blog/${slug.slug.current}`,
            updated: slug._updatedAt
        }
    });

    /**
     * Compile the sitemap paths collected above
     */
    const paths = [
        ...postPaths,
        ...pagePaths,
        {
            path: 'privacy-cookies-policy',
            updated: null
        }
    ]

    return paths;
};

/**
 * Server side render sitemap
 */
export const getServerSideProps = async (ctx) => {
    const siteUrl = "https://example.com";
    const data = await getPaths();
    const fields = data?.map((data) => ({
        loc: `${siteUrl}/${data.path}`,
        lastmod: data.updated,
    }));

    return getServerSideSitemap(ctx, fields);
};

/**
 * Needed to stop NextJS complaining about no exported function for the page
 */
export default function Site() {}