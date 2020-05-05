import { getAllBlogPostsWithTag } from "../../lib/api";
import { parse, stringify } from "flatted";
import SingleBlogPage from "../../components/Blog/SingleBlogPage";

const Introspection = ({ posts }) => {
  const postsArray = parse(posts).posts;
  return (
    <SingleBlogPage
      posts={postsArray}
      pageTitle="Introspection"
      alertMessage="Here I write about my personal thoughts, philosophical wandering, and occasionally daydreamings."
    />
  );
};

export const getStaticProps = async () => {
  const posts = await getAllBlogPostsWithTag("introspection");
  return {
    props: { posts: stringify(posts) }
  };
};

export default Introspection;
