import React from "react";
import Layout from "../../components/layouts/Layout";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity/sanity.server";
import PostList from "../../components/elements/PostList";
import { motion } from "framer-motion";

/**
 * Blog index page
 *
 * @return {JSX.Element} JSX Code for the blog index page
 */
export default function BlogIndex({ data }) {
    const { posts } = data;

    return (
        <Layout>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Blog
                </motion.h1>
                <PostList posts={posts} />
            </div>
        </Layout>
    );
}

const postsQuery = groq`*[_type == 'post' && !(_id in path('drafts.**'))] | order(_createdAt desc){
  'id':_id,
  title,
  slug
}`;

/**
 * Query for static page props
 *
 * @return {Object} Static page props
 */
export async function getStaticProps() {
    const posts = await getClient().fetch(postsQuery);
    return {
        props: {
            data: { posts },
            revalidate: 10,
        },
    };
}
