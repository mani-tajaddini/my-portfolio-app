import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    $(window).on("load", function() {
      $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
      });
    });
  }, []);

  return (
    <div className="loader">
      <div className="inner"></div>
      <style jsx global>{`
        .loader {
          width: 100%;
          height: 100%;
          background-color: #fff;
          position: fixed;
          top: 0px;
          left: 0px;
          z-index: 1000;
        }

        .loader .inner {
          width: 100%;
          height: 100%;
          background: url(/icons/loader.gif) center center no-repeat;
        }
      `}</style>
    </div>
  );
};

export default Loader;
