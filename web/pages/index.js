import React from "react";
import Layout from "../components/layouts/Layout";
import SEO from "../components/common/SEO";
import { motion } from "framer-motion";

/**
 * Home: The landing page of the wesbite.
 */
export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is the homepage" />
      <div className="container">
        <main>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Home Page
          </motion.h1>
        </main>
      </div>
    </Layout>
  );
}
