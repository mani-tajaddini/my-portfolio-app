import Head from "next/head";
import Navbar from "../../components/Navbar";
import PostCard from "../../components/Blog/PostCard";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import DismissableAlert from "../../components/DismissableAlert";

const SingleBlogPage = props => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Revolve - Personal Magazine blog Template</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link rel="stylesheet" href="/plugins/themify/css/themify-icons.css" />
      <script src="/plugins/slick-carousel/slick.min.js" />
    </Head>
    <div>
      <Navbar />
      <DismissableAlert message={props.alertMessage} />
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <h2 className="lg-title">{props.pageTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-4 mt-4">
        <div className="card-columns">
          {props.posts &&
            props.posts.map(post => (
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
      {/* <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                {props.posts &&
                  props.posts.map(post => (
                    <PostCard post={post} key={post.fields.title} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Subscribe />
      <Footer />
    </div>
  </>
);

export default SingleBlogPage;
