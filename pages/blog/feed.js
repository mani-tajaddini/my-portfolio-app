import { getAllBlogPosts, getRssXml } from "../../lib/api";

const feed = () => {};

export const getServerSideProps = async ({ res }) => {
  if (!res) {
    return;
  }

  const blogPosts = await getAllBlogPosts();
  res.setHeader("Content-Type", "text/xml");
  res.write(getRssXml(blogPosts.posts));
  res.end();
};

export default feed;
