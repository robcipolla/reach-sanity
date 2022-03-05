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
        src={urlFor(asset).width(300).height(300).url()}
        width={300}
        height={300}
        objectFit="cover"
      />
    </figure>
  );
}
