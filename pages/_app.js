import Head from "next/head";

import "../public/plugins/bootstrap/css/bootstrap.min.css";
import "../public/plugins/superslides/superslides.css";
import "../public/plugins/globalStyle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "academicons/css/academicons.min.css";
import "../public/plugins/fancybox/jquery.fancybox.min.css";
import "../public/plugins/Blog/css/style.css";
import "gitalk/dist/gitalk.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="webmention"
          href="https://webmention.io/manitajaddini.com/webmention"
        />
        <link
          rel="pingback"
          href="https://webmention.io/manitajaddini.com/xmlrpc"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
