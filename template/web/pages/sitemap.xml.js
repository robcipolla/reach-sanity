import React from 'react';
import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity/sanity-server';

const Sitemap = () => {
    return null;
};

const BASE_URL = 'http://localhost:3000';

export const getServerSideProps = async ({ res }) => {

    const postsQuery = groq`*[_type == "post" && !(_id in path("drafts.**"))]{
        slug,
        _updatedAt
    }`
    const posts = await getClient().fetch(postsQuery);

    const staticPages = ['/about']

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${BASE_URL}/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
        ${staticPages.map((url) => {
            return `
                <url>
                    <loc>${BASE_URL}${url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
              `;
          })}
        <url>
            <loc>${BASE_URL}/blog</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
      ${posts.map((post) => {
        return `
            <url>
                <loc>${BASE_URL}/blog/${post.slug.current}</loc>
                <lastmod>${post._updatedAt}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
            </url>
          `;
      })}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;