import React from "react";
import { NextSeo } from "next-seo";

/**
 * SEO Component for the site
 *
 * @param {Object} props SEO component props
 * @return {JSX.Element} JSX Code for the NextSEO component
 */
export default function SEO(props) {
  return <NextSeo title={props.title} description={props.description} />;
}
