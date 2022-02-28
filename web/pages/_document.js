import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import HeadScripts from "../components/common/HeadScripts";

/**
 * _document: Overwrites the default document.js file for NextJS
 */
class MyDocument extends Document {
  /**
   *
   * @param {DocumentContext} ctx
   * @return {object}
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  /**
   * Renders the root document
   *
   * @return {JSX.Element} The JSX code for the Homepage
   */
  render() {
    return (
      <Html lang="en">
        <Head />
        <HeadScripts />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
