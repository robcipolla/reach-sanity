import React from "react";
import "../styles/global.css";
import CookiesBanner from "../components/common/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { AnimatePresence } from "framer-motion";

/**
 * Custom _app component
 */
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <CookiesBanner />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
