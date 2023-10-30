import { Form, FormGroup, Label, Input, Col, CustomInput } from "reactstrap";
const GlobalFiltering = ({ filter, setFilter }) => {
  return (
    <>
    <div class='inline' style={{ marginTop: "2rem", marginLeft: "-4rem" }}>
    Search
  </div>
  <Col style={{ marginTop: "-1.7rem", marginLeft: "-1.5rem" }}>
    <Input
      placeholder=''
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
    />
  </Col>
  </>
  );
};

export default GlobalFiltering;
