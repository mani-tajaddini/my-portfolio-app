import { getAllBlogPostsWithTag } from "../../lib/api";
import { parse, stringify } from "flatted";
import SingleBlogPage from "../../components/Blog/SingleBlogPage";

const Math = ({ posts }) => {
  const postsArray = parse(posts).posts;
  return (
    <SingleBlogPage
      posts={postsArray}
      pageTitle="Math"
      alertMessage="Here I write about certain fields of mathematics like category theory, proof theory, etc. These are usually summaries, comprehensions, or direct quotes from original resources."
    />
  );
};

export const getStaticProps = async () => {
  const posts = await getAllBlogPostsWithTag("math");
  return {
    props: { posts: stringify(posts) }
  };
};

export default Math;
