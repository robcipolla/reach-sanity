import { groq } from "next-sanity";
import React from "react";
import Layout from "../../components/layouts/Layout";
import { BlockContent } from "../../components/block-content/BlockContent";
import { getClient } from "../../lib/sanity/sanity.server";
import SEO from "../../components/common/SEO";
import Image from "next/image";
import { urlFor } from "../../lib/sanity/sanity-img-builder";
import { motion } from "framer-motion";

/**
 * Blog post page
 *
 * @return {JSX.Element} JSX Code for the single post page
 */
export default function Post({ post }) {
    return (
        <Layout>
            <SEO
                title={post.seo?.metaTitle}
                description={post.seo?.metaDescription}
            />
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {post.title}
                </motion.h1>
                {post?.mainImage && (
                    <Image
                        src={urlFor(post.mainImage).width(1280).url()}
                        width={1280}
                        height={300}
                        objectFit="cover"
                        layout="responsive"
                    />
                )}
                {post?.body && <BlockContent blocks={post?.body} />}
            </div>
        </Layout>
    );
}

// Posts query to get slugs
const postsSlugsQuery = groq`*[_type == 'post' && !(_id in path('drafts.**'))]{
  slug
}`;

// Posts query to get post data
const postQuery = groq`*[_type == 'post' && slug.current == $slug][0]{
  "id" : _id,
  title,
  body,
  mainImage,
  seo
}`;

/**
 * Function to get static page props
 *
 * @param {Object} params Object containing path paramaters
 * @return {Object} static page props
 */
export async function getStaticProps({ params }) {
    const post = await getClient().fetch(postQuery, { slug: params.slug });
    return {
        props: {
            post,
        },
    };
}

/**
 * Function to generate the blog post pages
 *
 * @return {Array} Array of static paths for blog posts
 */
export async function getStaticPaths() {
    const postSlugs = await getClient().fetch(postsSlugsQuery);
    const paths = postSlugs.map((post) => ({
        params: { slug: post.slug.current },
    }));
    return {
        paths,
        fallback: false, // false or 'blocking'
    };
}
