import Head from "next/head";
import { getAllBlogPosts, getAllPreviewBlogPosts } from "../../lib/api";
import Navbar from "../../components/Navbar";
import PostCard from "../../components/Blog/PostCard";
import SliderCard from "../../components/Blog/SliderCard";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import { useEffect } from "react";
import DismissableAlert from "../../components/DismissableAlert";
import { parse, stringify } from "flatted";

const Blog = ({ posts, preview }) => {
  //to avoid circular json error, we stringify the props and parse it back again
  const postsArray = Object.values(parse(posts));

  useEffect(() => {
    $(".slider-wrap").slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplaySpeed: 4000,
      items: 3,
      loop: true,
      autoplay: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS for blog posts"
          href="https://www.manitajaddini.com/blog/feed"
        />

        <link rel="stylesheet" href="/plugins/themify/css/themify-icons.css" />
        <link rel="stylesheet" href="/plugins/slick-carousel/slick-theme.css" />
        <link rel="stylesheet" href="/plugins/slick-carousel/slick.css" />

        <script src="/plugins/slick-carousel/slick.min.js" />
      </Head>
      <div>
        <Navbar />
        {preview ? (
          <a href="/api/exitPreview">
            <DismissableAlert message="This is a preview. Exit preview by clicking the alert card." />
          </a>
        ) : null}
        <section className="slider mt-4">
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-lg-12 col-sm-12 col-md-12 slider-wrap">
                {postsArray &&
                  postsArray
                    .slice(0, 5)
                    .map(post => (
                      <SliderCard
                        post={post}
                        postID={post.sys.id}
                        key={post.fields.title}
                      />
                    ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mx-4 mt-4">
          <div className="card-columns">
            {postsArray &&
              postsArray.map(post => (
                <PostCard
                  post={post}
                  postID={post.sys.id}
                  key={post.fields.title}
                />
              ))}
          </div>
          <style jsx>{`
            @media only screen and (min-width: 576px) {
              .card-columns {
                column-count: 2;
              }
            }

            @media only screen and (min-width: 768px) {
              .card-columns {
                column-count: 3;
              }
            }

            @media only screen and (min-width: 992px) {
              .card-columns {
                column-count: 4;
              }
            }

            @media only screen and (min-width: 1200px) {
              .card-columns {
                column-count: 5;
              }
            }
          `}</style>
        </section>
        {/* <div className="m-auto">
                <div className="pagination mt-5 pt-4">
                  <ul className="list-inline ">
                    <li className="list-inline-item">
                      <a href="#" className="active">
                        1
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">2</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">3</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="prev-posts">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const { posts } = await getAllBlogPosts();

  if (preview) {
    var { previewPosts } = await getAllPreviewBlogPosts();
  }

  return {
    //to avoid circular json error, we stringify the props and parse it back again
    props: { posts: stringify({ ...posts, ...previewPosts }), preview }
  };
};

export default Blog;
