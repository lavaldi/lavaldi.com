import React from "react";
import Head from "next/head";

export default ({ data }) => {
  const image = data.image
    ? data.image
    : "http://lavaldi.com/static/lavaldi.jpg";
  const url = data.url
    ? `http://lavaldi.com${data.url}`
    : "http://lavaldi.com"
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="author" content="Claudia Valdivieso" />
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:description" content={data.description} />
      <meta property="og:site_name" content="La Valdi" />
      <meta name="twitter:title" content={data.title + " by @lavaldi_"} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image:src" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lavaldi_" />
      <meta name="twitter:creator" content="@lavaldi_" />
      <title>{data.title} - La Valdi</title>
      <link rel="icon" href="/static/favicon.png" sizes="32x32" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai.min.css"
      />
      <link rel="stylesheet" href="/static/main.css" />
    </Head>
  );
};
