import React from 'react'
import Helmet from 'react-helmet'

import config from '../utils/config'

export default function SEO({
  postNode,
  postPath,
  postSEO,
  coverPicture,
  customDescription,
}) {
  let title
  let description
  let image = ''
  let postURL
  let useLogoAsImage = true

  if (postSEO) {
    const postMeta = postNode.frontmatter
    title = postMeta.title
    description = postNode.excerpt

    if (postMeta.banner || coverPicture) {
      image = postMeta.banner ?? coverPicture
      useLogoAsImage = false
    }
    postURL = `${config.siteUrl}${postPath}`
  } else {
    title = config.siteTitle
    description = customDescription || config.description
    image = config.siteLogo
  }

  if (useLogoAsImage) image = `${config.siteUrl}${image}`
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: title,
      alternateName: title,
    },
  ]

  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: config.siteUrl,
        name: title,
        alternateName: title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      }
    )
  }
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:url" content={postSEO ? postURL : config.siteUrl} />
      {postSEO && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={config.userTwitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
