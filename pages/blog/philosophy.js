import { getAllBlogPostsWithTag } from "../../lib/api";
import { parse, stringify } from "flatted";
import SingleBlogPage from "../../components/Blog/SingleBlogPage";

const Philosophy = ({ posts }) => {
  const postsArray = parse(posts).posts;
  return (
    <SingleBlogPage
      posts={postsArray}
      pageTitle="Philosophy"
      alertMessage="Here are my thoughts on some philosophical matters."
    />
  );
};

export const getStaticProps = async () => {
  const posts = await getAllBlogPostsWithTag("philosophy");
  return {
    props: { posts: stringify(posts) }
  };
};

export default Philosophy;
