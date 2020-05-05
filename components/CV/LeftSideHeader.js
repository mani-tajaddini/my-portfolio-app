const LeftSideHeader = props => (
  <div style={{ backgroundColor: "#00315c" }}>
    <h3 className="m-0 p-1 pl-2 font-weight-bold text-light">
      {props.subject}
    </h3>
  </div>
);

export default LeftSideHeader;
