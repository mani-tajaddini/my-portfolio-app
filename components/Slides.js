import { useEffect } from "react";

const Slides = ({ carouselImages }) => {
  useEffect(() => {
    $("#slides").superslides({
      animation: "fade",
      play: 5000
    });

    let typed = new Typed(".typed", {
      strings: [
        "Complexity.",
        "Cognition.",
        "Collective Behavior.",
        "Human-Computer Interaction.",
        "Category Theory.",
        "Functional Programming."
      ],
      typeSpeed: 70,
      loop: true,
      startDelay: 1000,
      showCursor: false
    });
  }, []);

  return (
    <div id="slides">
      <div className="overlay"></div>
      <div className="slides-container">
        {Object.values(carouselImages).map(carouselImage => (
          <img
            src={`${carouselImage.fields.file.url}?fm=jpg&fl=progressive`}
            alt=""
            key={carouselImage.fields.file.url}
          />
        ))}
      </div>
      <div className="titleMessage">
        <div className="heading">
          <p className="main ">MANI TAJADDINI</p>
          <p className="sub typed"></p>
        </div>
      </div>
      <nav className="slides-navigation">
        <a href="#" className="next"></a>
        <a href="#" className="prev"></a>
      </nav>
      <style jsx global>{`
        .overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 3;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .slides-navigation {
          z-index: 6;
        }

        .slides-navigation .prev,
        .slides-navigation .next {
          width: 47px;
          height: 47px;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .slides-navigation a.prev {
          left: 20px;
          background-image: url(/icons/prev.png);
        }

        .slides-navigation a.next {
          right: 20px;
          background-image: url(/icons/next.png);
        }

        .titleMessage {
          position: absolute;
          width: 100%;
          height: 250px;
          top: 50%;
          z-index: 5;
          text-align: center;
          margin-top: -125px;
        }

        .titleMessage .heading p {
          color: #fff;
          text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
          font-weight: 100;
          line-height: 45px;
          letter-spacing: 7px;
        }

        .titleMessage .heading .main {
          font-size: 50px;
        }

        .titleMessage .heading .sub {
          font-size: 23px;
        }
      `}</style>
    </div>
  );
};

export default Slides;
