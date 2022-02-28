import React from "react";
import { createPortableTextComponent } from "next-sanity";
import { sanityConfig } from "../../lib/sanity/sanity-config";
import BlogImage from "./BlogImage";

export const BlockContent = createPortableTextComponent({
  ...sanityConfig,

  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      image: (props) => <BlogImage asset={props.node.asset} />,
    },
  },
});
