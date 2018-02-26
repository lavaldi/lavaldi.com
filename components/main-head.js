import React from "react";
import Head from "next/head";

export default ({ data }) => {
  const image = data.image
    ? data.image
    : "http://lavaldi.com/static/lavaldi.jpg";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="autor" content="Claudia Valdivieso" />
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title + " - La Valdi"} />
      <meta property="og:type" content="website" />
      {/*<meta property="og:url" content="https://lavaldi.com" />*/}
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      {/*<meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />*/}
      <meta property="og:description" content={data.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@lavaldi_" />
      <meta name="twitter:creator" content="@lavaldi_" />
      <title>{data.title} - La Valdi</title>
      <link rel="icon" href="/static/favicon.png" sizes="32x32" />
      <link rel="stylesheet" href="/static/main.css" />
    </Head>
  );
};
