import React from "react";
import { PortableText } from '@portabletext/react'
import BlogImage from "./BlogImage";

export default function BlockContent({ blocks }) {
  return (
    <PortableText
      value={blocks}
      components={{
        block: {
          image: (props) => <BlogImage asset={props.node.asset} />,
        }
      }}
    />
  );
}
