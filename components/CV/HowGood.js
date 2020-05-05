const HowGood = props => {
  return (
    <div>
      <p className="text-light">{props.subject}</p>
      <div className="progress" style={{ backgroundColor: "#33648f" }}>
        <div
          className="progress-bar bg-light"
          style={{ width: `${props.howGoodPercent}%` }}
        ></div>
      </div>
      <p className="text-right align-text-top text-light">
        {props.howGoodVerbal}
      </p>
    </div>
  );
};

export default HowGood;
