const PortfolioItems = (props) => (
  <div className="itemsContainer">
    <ul className="items">
        {props.children}
    </ul>
    <style jsx global>{`
    .items li {
      display: inline-block;
      padding: 5px;
    }
    
    .itemsContainer {
      width: 100%;
    }
    
    
    .items li img {
      width: 100%;
      -webkit-transition: all 0.2s linear, 1s;
        -moz-transition: all 0.2s linear, 1s;
        -o-transition: all 0.2s linear, 1s;
        -ms-transition: all 0.2s linear, 1s;
        -transition: all 0.2s linear, 1s;
    }
    
    .items .item {
      position: relative;
      display: block;
      overflow: hidden;
    }
    
    .items .icons {
      position: absolute;
        width: 90px;
        height: 40px;
        left: 50%;
        top: 50%;
        margin: -20px auto 0 -47px;
        text-align: center;
        z-index: 3;
    }
    
    .items .icons i {
      color: #fff;
        font-size: 20px;
        margin-top: 9px;
    }
    
    .items a {
      width: 40px;
        height: 40px;
        background-color: #12232a;
        position: relative;
        display: inline-block;
    
    
        -webkit-transition: all 0.2s linear, 0.2s;
        -moz-transition: all 0.2s linear, 0.2s;
        -o-transition: all 0.2s linear, 0.2s;
        -ms-transition: all 0.2s linear, 0.2s;
        -transition: all 0.2s linear, 0.2s;
    
    }
    
    .items .imageOverlay {
      width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
    
        -webkit-transition: all 0.2s linear, 1s;
        -moz-transition: all 0.2s linear, 1s;
        -o-transition: all 0.2s linear, 1s;
        -ms-transition: all 0.2s linear, 1s;
        -transition: all 0.2s linear, 1s;
    }
    
    .items .item:hover .imageOverlay {
      opacity: 1;
    }
    
    .items .openButton {
      float: left;
      left: -200px;
    }
    
    .items .projectLink {
      float: right;
      right: -200px;
    }
    
    .items .item:hover .openButton {
      left: 0px;
    }
    
    .items .item:hover .projectLink {
      right: 0px;
    }
    
    .items .item:hover img {
      -webkit-transform: scale(1.05, 1.05);
        -moz-transform: scale(1.05, 1.05);
        -o-transform: scale(1.05, 1.05);
        -ms-transform: scale(1.05, 1.05);
        -transform: scale(1.05, 1.05);
    }
    
    .items {
      padding: 0;
    }
    `}</style>
  </div>
)

export default PortfolioItems