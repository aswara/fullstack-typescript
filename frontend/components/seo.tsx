import React from 'react';
import Head from 'next/head';

export interface MetaProps {
  name?: string
  content?: string
  property?: string
}

export interface SEOProps {
  description?: string
  author?: string
  title?: string
}

export default function SEO({
  description = 'startup apps landing page',
  author = 'Developer',
  title = 'Website',
}: SEOProps) {
  const metaData: MetaProps[] = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ];


  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};