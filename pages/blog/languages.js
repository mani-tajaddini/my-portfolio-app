import { getAllBlogPostsWithTag } from "../../lib/api";
import { parse, stringify } from "flatted";
import SingleBlogPage from "../../components/Blog/SingleBlogPage";

const Languages = ({ posts }) => {
  const postsArray = parse(posts).posts;
  return (
    <SingleBlogPage
      posts={postsArray}
      pageTitle="Languages"
      alertMessage="I am aspiring to become a polyglot (not very seriously) and I'm interested in almost all the languages, dead or alive, synthetic or natural. Here I write about the methods I use to study languages, summaries, insights, etymologies, etc. The languages I currently fiddle with are: English, German, French, Italian, Russian, Latin, Ancient Greek, and Japanese."
    />
  );
};

export const getStaticProps = async () => {
  const posts = await getAllBlogPostsWithTag("languages");
  return {
    props: { posts: stringify(posts) }
  };
};

export default Languages;
