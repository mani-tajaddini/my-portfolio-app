import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <script src={"/plugins/jquery/jquery.min.js"} />
          <script src={"/plugins/bootstrap/js/popper.min.js"} />
          <script src={"/plugins/superslides/jquery.superslides.js"} />
          <script src={"/plugins/bootstrap/js/bootstrap.min.js"} />
          <script src={"/plugins/typed/typed.min.js"} />
          <script src={"/plugins/isotope/isotope.pkgd.min.js"} />
          <script src={"/plugins/fancybox/jquery.fancybox.min.js"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
