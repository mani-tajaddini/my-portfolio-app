import { createClient } from "contentful";
import config from "../config.json";
import moment from "moment";

const client = createClient({
  space: process.env.SPACE,
  accessToken: config.accessToken
});

const previewClient = createClient({
  space: process.env.SPACE,
  accessToken: config.previewToken,
  host: "preview.contentful.com"
});

export const getAllBlogPosts = async () => {
  const entries = await client.getEntries({
    content_type: "blogPost"
  });
  return {
    posts: entries.items
  };
};

export const getAllPreviewBlogPosts = async () => {
  const entries = await previewClient.getEntries({
    content_type: "blogPost"
  });

  return {
    posts: entries.items
  };
};

export const getAllBlogPostsWithTag = async tag => {
  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.tags[in]": `${tag}`
  });
  return {
    posts: entries.items
  };
};

export const getBlogPostBySlug = async slg => {
  const entry = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": `${slg}`
  });
  return entry.items[0];
};

export const getPreviewPostBySlug = async slg => {
  const entry = await previewClient.getEntries({
    content_type: "blogPost",
    "fields.slug": `${slg}`
  });
  return entry.items[0];
};

export const getPostsLinkedTo = async id => {
  const entries = await client.getEntries({
    links_to_entry: id
  });

  return entries.items;
};

export const getPreviewPostsLinkedTo = async id => {
  const entries = await previewClient.getEntries({
    links_to_entry: id
  });

  return entries.items;
};

export const getSingleEntry = async id => {
  const entry = await client.getEntry(id);
  return entry;
};

export const getCarouselImages = async () => {
  const images = await client.getEntries({
    content_type: "carousel"
  });
  return images.items[0].fields.carouselImages; //There is supposed to be only one entry of type Carousel in contentful
};

export const getPortfolioItems = async () => {
  const entries = await client.getEntries({
    content_type: "portfolioItem"
  });
  return entries.items;
};

export const getCV = async () => {
  const cv = await client.getAsset("PxuPZNU1Mohe0pd5NzhvW");
  return cv;
};

export const getMyImage = async () => {
  const me = await client.getAsset("2MSY4zrt7ICJp7osvScrX5");
  return me;
};

export const getDefaultImage = async () => {
  const me = await client.getAsset("Xe4Ku1VEblT0WIqAXkqL8");
  return me;
};

export const getImage = async id => {
  const me = await client.getAsset(id);
  return me;
};

export const getRssXml = blogPosts => {
  const { rssItemImage, rssItemsXml, latestPostDate } = blogPostsRssXml(
    blogPosts
  );
  return `<?xml version="1.0" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Mani's Blog</title>
        <link>https://www.manitajaddini.com/blog/feed</link>
        <description>My blog posts on various matters</description>
        <language>en</language>
        <lastBuildDate>${moment(latestPostDate).format(
          "ddd, DD MMM YYYY HH:mm:ss ZZ"
        )}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

const blogPostsRssXml = blogPosts => {
  let latestPostDate = "";
  let rssItemsXml = "";
  let rssItemImage = "";
  blogPosts.forEach(post => {
    const postDate = Date.parse(post.fields.publishDate);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.fields.publishDate;
    }
    rssItemImage += `
      <image>
        <url>${post.fields.heroImage.fields.file.url}</url>
        <title>${post.fields.title}</title>
        <link>          
          https://www.manitajaddini.com/blog/posts/${post.fields.slug}
        </link>
      </image>`;
    rssItemsXml += `
      <item>
        <title>${post.fields.title}</title>
        <link>
          https://www.manitajaddini.com/blog/posts/${post.fields.slug}
        </link>
        <guid>
          https://www.manitajaddini.com/blog/posts/${post.fields.slug}
        </guid>
        ${(() => {
          let categories = "";
          post.fields.tags.forEach(ctg => {
            categories += `<category>${ctg}</category>`;
          });
          return categories;
        })()}
        <pubDate>${moment(post.fields.publishDate).format(
          "ddd, DD MMM YYYY HH:mm:ss ZZ"
        )}</pubDate>
        <description>
          <![CDATA[${post.fields.body}]]>
        </description>
      </item>`;
  });
  return {
    rssItemImage,
    rssItemsXml,
    latestPostDate
  };
};
