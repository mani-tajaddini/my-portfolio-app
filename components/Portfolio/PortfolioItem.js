import { useEffect } from "react";

const PortfolioItem = props => {
  useEffect(() => {
    $("[data-fancybox]").fancybox();
  }, []);

  return (
    <li className={`${props.className} col-xs-6 col-sm-4 col-md-3 col-lg-3`}>
      <div className="item">
        <img src={props.iconImage} />
        <div className="icons">
          <a
            href={props.mainImage}
            title="View image"
            className="openButton"
            data-fancybox
            data-caption={props.caption}
          >
            <i className="fa fa-search"></i>
          </a>
          <a href={props.reff} target="_blank" className="projectLink">
            <i className="fa fa-link"></i>
          </a>
        </div>
        <div className="imageOverlay"></div>
      </div>
    </li>
  );
};

export default PortfolioItem;
