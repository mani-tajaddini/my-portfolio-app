import { getAllBlogPostsWithTag } from "../../lib/api";
import { parse, stringify } from "flatted";
import SingleBlogPage from "../../components/Blog/SingleBlogPage";

const Programming = ({ posts }) => {
  const postsArray = parse(posts).posts;
  return (
    <SingleBlogPage
      posts={postsArray}
      pageTitle="Programming"
      alertMessage="Here I write about programming, mostly bent toward functional programming practices in various programming languages and related endeavors. Occasionally there will be explanations of coding tasks I have done to various ends."
    />
  );
};

export const getStaticProps = async () => {
  const posts = await getAllBlogPostsWithTag("programming");
  return {
    props: { posts: stringify(posts) }
  };
};

export default Programming;
