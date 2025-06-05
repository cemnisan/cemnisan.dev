import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          
          {/* SEO Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Cem Nisan - Software Developer, Building Mobile and Web Applications & Photographer" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Cem Nisan" />
          <meta property="og:title" content="Cem Nisan - Software Developer, Building Mobile and Web Applications & Photographer" />
          <meta property="og:description" content="Personal website of Cem Nisan - Software Developer, Building Mobile and Web Applications & Photographer" />
          <meta property="og:url" content="https://cemnisan.dev" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cem Nisan - Software Developer, Building Mobile and Web Applications & Photographer" />
          <meta name="twitter:description" content="Personal website of Cem Nisan - Software Developer, Building Mobile and Web Applications & Photographer" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
