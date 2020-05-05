const DismissableAlert = props => {
  return (
    <div
      className="alert alert-dismissible mx-5 mt-5 mb-0"
      style={{ backgroundColor: "#99bbc9", color: "white" }}
    >
      <button className="close" type="button" data-dismiss="alert">
        <span>&times;</span>
      </button>
      {props.message}
    </div>
  );
};

export default DismissableAlert;
