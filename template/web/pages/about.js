import { groq } from 'next-sanity'
import React from 'react'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import Layout from '../components/Layouts/Layout'
import { getClient } from '../lib/sanity/sanity-server'
import { motion } from 'framer-motion'
import BlockContent from '../components/block-content/BlockContent'

export default function aboutPage({ data }) {
    const { seo, pageTitle, pageContent } = data;
    return (
        <Layout>
            <SEO title={seo.metaTitle} description={seo.metaDescription} />
            <Container>
                <main>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {pageTitle}
                    </motion.h1>
                    <BlockContent blocks={pageContent} />
                </main>
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {

    const query = groq`*[_type == 'aboutPage'][0]`;
    const data = await getClient().fetch(query);

    return {
        props: {
            data
        },
        revalidate: 60
    }
}