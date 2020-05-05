import Head from "next/head";
import { getAllBlogPostsWithTag } from "../../lib/api";
import FoodBlogCard from "../../components/Blog/FoodBlog/FoodBlogCard";
import Subscribe from "../../components/Subscribe";
import DismissableAlert from "../../components/DismissableAlert";
import { parse, stringify } from "flatted";

const Food = ({ posts }) => {
  const isBrowser = typeof window !== "undefined";
  const postsArray = parse(posts).posts;

  return (
    <>
      <Head>
        <title>Aside - Free HTML5 Bootstrap 4 Template by uicookies.com</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Free HTML5 Website Template by uicookies.com"
        />
        <meta
          name="keywords"
          content="free bootstrap 4, free bootstrap 4 template, free website templates, free html5, free template, free website template, html5, css3, mobile first, responsive"
        />
        <meta name="author" content="uicookies.com" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/plugins/Blog/css/foodBlog/open-iconic-bootstrap.min.css"
        />
        <link rel="stylesheet" href="/plugins/Blog/css/foodBlog/icomoon.css" />
        <link rel="stylesheet" href="/plugins/Blog/css/foodBlog/animate.css" />
        <link rel="stylesheet" href="/plugins/Blog/css/foodBlog/style.css" />

        {isBrowser && (
          <script
            src="/plugins/Blog/js/foodBlog/jquery.waypoints.min.js"
            defer
          />
        )}
        {isBrowser && (
          <script
            src="/plugins/Blog/js/foodBlog/imagesloaded.pkgd.min.js"
            defer
          />
        )}
        {isBrowser && <script src="/plugins/Blog/js/foodBlog/main.js" defer />}
      </Head>
      <div>
        {/* <DismissableAlert message="Here I keep my self-made recipes. Those which have been successful ofcourse." /> */}
        <aside className="probootstrap-aside js-probootstrap-aside">
          <a
            href="#"
            className="probootstrap-close-menu js-probootstrap-close-menu d-md-none"
          >
            <span className="oi oi-arrow-left"></span> Close
          </a>
          <div
            className="probootstrap-site-logo probootstrap-animate"
            data-animate-effect="fadeInLeft"
          >
            {/* <a href="index.html" className="mb-2 d-block probootstrap-logo">Aside</a>
            <p className="mb-0">Another free html5 bootstrap 4 template by <a href="https://uicookies.com/" target="_blank">uiCookies</a></p> */}
          </div>
          <div className="probootstrap-overflow">
            <nav className="probootstrap-nav">
              <ul>
                <li
                  className="probootstrap-animate active"
                  data-animate-effect="fadeInLeft"
                >
                  <a href="/">Home</a>
                </li>
                <li
                  className="probootstrap-animate"
                  data-animate-effect="fadeInLeft"
                >
                  <a href="/blog">Blog</a>
                </li>
                <li
                  className="probootstrap-animate"
                  data-animate-effect="fadeInLeft"
                >
                  <a href="/blog/philosophy">Philosophy</a>
                </li>
                <li
                  className="probootstrap-animate"
                  data-animate-effect="fadeInLeft"
                >
                  <a href="/blog/math">Math</a>
                </li>
                <li
                  className="probootstrap-animate"
                  data-animate-effect="fadeInLeft"
                >
                  <a href="/blog/programming">Programming</a>
                </li>
                <li
                  className="probootstrap-animate"
                  data-animate-effect="fadeInLeft"
                >
                  <a href="/blog/introspection">Introspection</a>
                </li>
                <li
                  className="probootstrap-animate"
                  data-animate-effect="fadeInLeft"
                >
                  <a href="/blog/food">Food</a>
                </li>
              </ul>
            </nav>
            <footer
              className="probootstrap-aside-footer probootstrap-animate"
              data-animate-effect="fadeInLeft"
            >
              <ul className="list-unstyled d-flex probootstrap-aside-social">
                <li>
                  <a href="#" className="p-2">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    <span className="icon-dribbble"></span>
                  </a>
                </li>
              </ul>
              <p>
                &copy; 2017{" "}
                <a href="https://uicookies.com/" target="_blank">
                  uiCookies:Aside
                </a>
                . <br /> All Rights Reserved.
              </p>
            </footer>
          </div>
        </aside>

        <main role="main" className="probootstrap-main js-probootstrap-main">
          <div className="probootstrap-bar">
            <a href="#" className="probootstrap-toggle js-probootstrap-toggle">
              <span className="oi oi-menu"></span>
            </a>
            <div className="probootstrap-main-site-logo">
              <a href="/blog">Aside</a>
            </div>
          </div>
          <div className="card-columns">
            {postsArray &&
              postsArray.map(post => (
                <FoodBlogCard post={post} key={post.fields.title} />
              ))}
          </div>

          <div className="container-fluid d-md-none">
            <div className="row">
              <div className="col-md-12">
                <ul className="list-unstyled d-flex probootstrap-aside-social">
                  <li>
                    <a href="#" className="p-2">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="p-2">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="p-2">
                      <span className="icon-dribbble"></span>
                    </a>
                  </li>
                </ul>
                <p>
                  &copy; 2017{" "}
                  <a href="https://uicookies.com/" target="_blank">
                    uiCookies:Aside
                  </a>
                  . <br /> All Rights Reserved. Designed by{" "}
                  <a href="https://uicookies.com/" target="_blank">
                    uicookies.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
        {/* <Subscribe /> */}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllBlogPostsWithTag("food");
  return {
    props: { posts: stringify(posts) }
  };
};

export default Food;
