import PortfolioFilter from "./Portfolio/PortfolioFilter";
import PortfolioItem from "./Portfolio/PortfolioItem";
import PortfolioItems from "./Portfolio/PortfolioItems";

const Portfolio = ({ portfolioItems }) => {
  return (
    <div id="portfolio" className="section">
      <div className="container">
        <div className="row">
          <div className="heading">
            <h2 className="text-light">PORTFOLIO</h2>
          </div>
          <PortfolioFilter />
          <PortfolioItems>
            {Object.values(portfolioItems).map(portfolioItem => (
              <PortfolioItem
                key={portfolioItem.fields.title}
                className={portfolioItem.fields.type}
                iconImage={`${portfolioItem.fields.iconImage.fields.file.url}?fm=jpg&fl=progressive`}
                mainImage={`${portfolioItem.fields.mainImage.fields.file.url}?fm=jpg&fl=progressive`}
                caption={portfolioItem.fields.title}
                reff={portfolioItem.fields.hRef}
              />
            ))}
          </PortfolioItems>
        </div>
      </div>
      <style jsx global>{`
        #portfolio {
          background-color: #12232a;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
