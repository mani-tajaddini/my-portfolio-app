import { useEffect } from "react";

const PortfolioFilter = () => {
  useEffect(() => {
    $("#filters a").click(function() {
      $("#filters .current").removeClass("current");
      $(this).addClass("current");

      let selector = $(this).attr("data-filter");

      $(".items").isotope({
        filter: selector,
        animationOptions: {
          duration: 1500,
          easing: "linear",
          queue: false
        }
      });

      return false;
    });
  }, []);

  return (
    <div className="filter">
      <ul id="filters">
        <li>
          <a href="#" data-filter="*" className="current">
            ALL
          </a>
        </li>
        <li>
          <a href="#" data-filter=".App">
            Apps
          </a>
        </li>
        <li>
          <a href="#" data-filter=".Publication">
            Publications
          </a>
        </li>
        <li>
          <a href="#" data-filter=".Website">
            Websites
          </a>
        </li>
      </ul>
      <style jsx global>{`
        .filter a {
          color: #fff;
          border: 1px solid #fff;
          padding: 10px 18px;
          display: block;
        }

        .filter li {
          display: inline-block;
          padding: 5px;
        }

        .filter .current {
          background-color: #fff;
          border-color: #12232a;
          color: #12232a;
        }

        .filter {
          text-align: center;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default PortfolioFilter;
