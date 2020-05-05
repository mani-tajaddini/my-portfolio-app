const ReferencePerson = props => (
  <div>
    <p className="font-weight-bold m-0">
      <a href={props.personWebsite}>{props.person}</a>
    </p>
    <p>
      <a href={props.departmentWebsite}>{props.department}</a>
    </p>
  </div>
);

export default ReferencePerson;
