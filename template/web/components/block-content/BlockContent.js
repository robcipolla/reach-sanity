import React from "react";
import { PortableText } from '@portabletext/react'
import BlogImage from "./BlogImage";

export default function BlockContent({ blocks }) {
  return (
    <PortableText
      value={blocks}
      components={{
        types: {
          image: (props) => <BlogImage asset={props.value.asset} />,
        },
        marks: {
          link: ({children, value}) => {
            if(value.external) {
              return (
                <a target="_blank" href={value.href} rel="noreferrer noopener">
                  {children}
                </a>
              )
            }
            return (
              <a href={value.href}>
                {children}
              </a>
            )
          },
        },
      }}
    />
  );
}
