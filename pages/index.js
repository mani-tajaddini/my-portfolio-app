import Loader from "../components/Loader";
import Slides from "../components/Slides";
import NavbarHomepage from "../components/NavbarHomepage";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Head from "next/head";
import { getCarouselImages, getPortfolioItems, getMyImage } from "../lib/api";

const Home = props => {
  return (
    <>
      <Head>
        <link href="mailto:mtajaldini@gmail.com" rel="me authn" />
        <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
        <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
      </Head>
      <main>
        <Loader />
        <Slides carouselImages={props.carouselImages} />
        <NavbarHomepage />
        <About myImage={props.me} />
        <Portfolio portfolioItems={props.portfolioItems} />
        <Contact />
        <Footer />
        <style jsx global>{`
          .section {
            padding: 50px 0;
          }

          .section .heading {
            text-align: center;
            padding-bottom: 40px;
            width: 100%;
          }
        `}</style>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const images = await getCarouselImages();
  const portfolioItems = await getPortfolioItems();
  const me = await getMyImage();
  return {
    props: {
      carouselImages: Object.assign({}, images),
      portfolioItems: Object.assign({}, portfolioItems),
      me: me
    }
  };
};

export default Home;
