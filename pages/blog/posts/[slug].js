import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getPostsLinkedTo,
  getAllPreviewBlogPosts,
  getPreviewPostBySlug,
  getPreviewPostsLinkedTo,
  getMyImage
} from "../../../lib/api";
import Navbar from "../../../components/Navbar";
import Head from "next/head";
import RelatedPostCard from "../../../components/Blog/RelatedPostCard";
import Footer from "../../../components/Footer";
import Subscribe from "../../../components/Subscribe";
import Link from "next/link";
import DismissableAlert from "../../../components/DismissableAlert";
import { parse, stringify } from "flatted";
import RichText from "@madebyconnor/rich-text-to-jsx";
import axios from "axios";
import { useEffect } from "react";
import Gitalk from "gitalk";

const Post = ({ stringified }) => {
  let state = {
    postTitle: "Not Initialized",
    postAuthorName: "Not Initialized",
    postDate: "Not Initialized",
    postBodyIsHtml: false,
    postBody: "Not Initialized",
    postTags: "Not Initialized",
    postImage: "/images/blog/undefinedPage.jpg",
    postInReplyTo: "Not Initialized",
    relatedPosts: [],
    myImage: null
  };

  if (!stringified) {
    console.log(`POST UNDEFINED`);
    state = {
      postTitle: "Undefined",
      postAuthorName: "Undefined",
      postDate: "Undefined",
      postBodyIsHtml: false,
      postBody: "Post Undefined",
      postTags: "Undefined",
      postImage: "/images/blog/undefinedPage.jpg",
      postInReplyTo: "Undefined",
      relatedPosts: [],
      myImage: null
    };
  } else {
    //to avoid circular json error, we stringify the props and parse it back again
    const postParsed = parse(stringified.post);
    const linkedToParsed = parse(stringified.linkedTo);
    var nextPostParsed = stringified.nextPost
      ? parse(stringified.nextPost)
      : null;
    var previousPostParsed = stringified.previousPost
      ? parse(stringified.previousPost)
      : null;
    var preview = stringified.preview;
    state = {
      postTitle: postParsed.fields.title,
      postAuthorName: postParsed.fields.author.fields.name,
      postDate: new Date(postParsed.fields.publishDate).toDateString(),
      postBodyIsHtml: postParsed.fields.postBodyIsHtml,
      postBody: postParsed.fields.body,
      postTags: postParsed.fields.tags.join(" , "),
      postImage: postParsed.fields.heroImage
        ? `${postParsed.fields.heroImage.fields.file.url}?fm=jpg&fl=progressive`
        : null,
      postInReplyTo: postParsed.fields.inReplyTo
        ? postParsed.fields.inReplyTo
        : null,
      relatedPosts: (() => {
        if (postParsed.fields.relatedPosts) {
          return [...postParsed.fields.relatedPosts, ...linkedToParsed].filter(
            //removing duplicate objects
            (item, index, self) =>
              index === self.findIndex(t => t.fields.slug === item.fields.slug)
          );
        } else {
          return [...linkedToParsed];
        }
      })(),
      myImage: stringified.me
    };
  }

  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: "0fcda34360aaf39ca2e8",
      clientSecret: "27da1d2ea362b03d8ab9448af6a51e0fbaab2a4e",
      repo: "myportfolioappcomments",
      owner: "mani-tajaddini",
      admin: ["mani-tajaddini"],
      id: location.pathname,
      title: "manimani",
      distractionFreeMode: false // Facebook-like distraction free mode
    });
    gitalk.render("gitalk-container");
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>SinglePost</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="stylesheet" href="/plugins/themify/css/themify-icons.css" />
        <link rel="stylesheet" href="/plugins/slick-carousel/slick-theme.css" />
        <link rel="stylesheet" href="/plugins/slick-carousel/slick.css" />
        <script src="/plugins/slick-carousel/slick.min.js" />
      </Head>
      <div className="h-entry">
        <Navbar />
        {/* solely for Microformats puporses */}
        <div className="u-author h-card d-none">
          {state.myImage ? (
            <img
              src={`https:${state.myImage.fields.file.url}`}
              className="u-photo"
              width="40"
            />
          ) : null}
          <a href="https://manitajaddini.com" className="u-url p-name">
            Mani Tajaddini
          </a>
        </div>
        {state.postInReplyTo ? (
          <div className="d-none">
            <a
              className="u-in-reply-to in-reply-to u-syndication hidden"
              href={state.postInReplyTo.inReplyTo}
            ></a>
          </div>
        ) : null}
        {preview ? (
          <a href="/api/exitPreview">
            <DismissableAlert message="This is a preview. Exit preview by clicking the alert card." />
          </a>
        ) : null}
        <section className="single-block-wrapper section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="single-post">
                  <div className="post-header mb-5 text-center">
                    <div className="meta-cat">
                      <a
                        className="post-category font-extra text-color text-uppercase font-sm letter-spacing-1"
                        href="#"
                      >
                        {state.postTags}
                      </a>
                    </div>
                    <h2 className="post-title mt-2">{state.postTitle}</h2>

                    <div className="post-meta">
                      <span className="text-uppercase font-sm letter-spacing-1 mr-3">
                        <a href="/">{state.postAuthorName}</a>
                      </span>
                      <span className="text-uppercase font-sm letter-spacing-1 dt-published">
                        {state.postDate}
                      </span>
                    </div>
                    {state.postImage ? (
                      <div className="post-featured-image mt-5">
                        <img
                          src={state.postImage}
                          className="img-fluid w-100"
                          alt="featured-image"
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="post-body">
                    <div className="entry-content e-content">
                      {state.postBodyIsHtml ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: state.postBody.content[0].content[0].value
                          }}
                        ></div>
                      ) : (
                        <RichText richText={state.postBody} />
                      )}
                    </div>
                    <div className="tags-share-box center-box d-flex text-center justify-content-around border-bottom py-3">
                      {/* <span className="single-comment-o">
                        <i className="fa fa-comment-o"></i>0 comment
                      </span> */}

                      {/* <div className="post-share justify-content-around">
                        <span className="count-number-like">2</span>
                        <a className="penci-post-like single-like-button">
                          <i className="ti-heart"></i>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>

                <nav className="post-pagination clearfix border-top border-bottom py-4">
                  {/* mixup in previous and next post */}
                  <div
                    className={`prev-post ${nextPostParsed ? "" : "invisible"}`}
                  >
                    <a
                      href={
                        nextPostParsed
                          ? `https://manitajaddini.com/blog/posts/${nextPostParsed.fields.slug}`
                          : "https://manitajaddini.com/blog"
                      }
                    >
                      <span className="text-uppercase font-sm letter-spacing">
                        Previous
                      </span>
                      <h4 className="mt-3">
                        {nextPostParsed && nextPostParsed.fields.title}
                      </h4>
                    </a>
                  </div>
                  <div
                    className={`next-post ${
                      previousPostParsed ? "" : "invisible"
                    }`}
                  >
                    <a
                      href={
                        previousPostParsed
                          ? `https://manitajaddini.com/blog/posts/${previousPostParsed.fields.slug}`
                          : "https://manitajaddini.com/blog"
                      }
                    >
                      <span className="text-uppercase font-sm letter-spacing">
                        Next
                      </span>
                      <h4 className="mt-3">
                        {previousPostParsed && previousPostParsed.fields.title}
                      </h4>
                    </a>
                  </div>
                </nav>
                {state.relatedPosts.length > 0 ? (
                  <div className="related-posts-block mt-5">
                    <h3 className="news-title mb-4 text-center">
                      You May Also Like
                    </h3>
                    <div className="row">
                      {state.relatedPosts.length > 0 &&
                        state.relatedPosts.map(relPost => (
                          <RelatedPostCard
                            post={relPost}
                            key={relPost.fields.title}
                          />
                        ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <div id="gitalk-container" className="mx-4"></div>
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  if (preview) {
    var allPosts = await getAllPreviewBlogPosts();
    var post = await getPreviewPostBySlug(params.slug);
    var linkedTo = await getPreviewPostsLinkedTo(post.sys.id);
  } else {
    var allPosts = await getAllBlogPosts();
    var post = await getBlogPostBySlug(params.slug);
    var linkedTo = await getPostsLinkedTo(post.sys.id);
  }
  const nextPost =
    allPosts.posts[
      allPosts.posts.findIndex(p => p.fields.title === post.fields.title) + 1
    ];
  const previousPost =
    allPosts.posts[
      allPosts.posts.findIndex(p => p.fields.title === post.fields.title) - 1
    ];
  const me = await getMyImage();

  // axios
  //   .get(
  //     "https://webmention.io/api/mentions.jf2?target=https://manitajaddini.com/blog/posts/testingmicroformats01&wm-property=in-reply-to"
  //   )
  //   .then(p => {
  //     console.log(JSON.stringify(p.data));
  //   });

  return {
    props: {
      //to avoid circular json error, we stringify the props and parse it back again
      stringified: {
        post: stringify(post),
        linkedTo: stringify(linkedTo),
        nextPost: nextPost ? stringify(nextPost) : null,
        previousPost: previousPost ? stringify(previousPost) : null,
        me,
        preview
      }
    }
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllBlogPosts();
  const slugs = await allPosts.posts.map(post => ({
    params: {
      slug: post.fields.slug //Oddly doesn't matter to what to set even "zrt" works
    }
  }));
  return {
    paths: slugs || [],
    fallback: true
  };
};

export default Post;
