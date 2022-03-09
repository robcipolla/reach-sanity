import React from "react";
import SEO from "../components/common/SEO";
import { motion } from "framer-motion";
import Layout from "../components/Layouts/Layout";
import { groq } from "next-sanity";
import { getClient } from "../lib/sanity/sanity-server";
import BlockContent from "../components/block-content/BlockContent";
import Container from "../components/common/Container";
import MainCarousel from "../components/elements/MainCoursel";

/**
 * Home: The landing page of the wesbite.
 */
export default function Home({ data }) {
  const { seo, pageTitle, pageContent, slider: sliderImages } = data;
  return (
    <Layout>
      <SEO title={seo.metaTitle} description={seo.metaDescription} />
      <MainCarousel sliderImages={sliderImages} />
      <Container>
        <main>
          <div className="max-w-[70ch] mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {pageTitle}
            </motion.h1>
            <BlockContent blocks={pageContent} />
          </div>
        </main>
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {

  const query = groq`*[_type == 'homePage'][0]`;
  const data = await getClient().fetch(query);

  return {
    props: {
      data
    },
    revalidate: 60
  }
}
