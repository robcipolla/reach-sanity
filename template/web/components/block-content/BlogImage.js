import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity/sanity-img-builder";

/**
 * Image block for the content block component
 *
 * @return {JSX.Element} JSX Code for the blog image used within the block content component
 */
export default function BlogImage({ asset }) {
  return (
    <figure>
      <Image
        src={urlFor(asset).width(2500).height(600).auto('format').url()}
        width={2500}
        height={600}
        objectFit="cover"
        layout="responsive"
      />
    </figure>
  );
}
