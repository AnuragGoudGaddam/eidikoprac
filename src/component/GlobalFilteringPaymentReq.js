import { Form, FormGroup, Label, Input, Col, CustomInput } from "reactstrap";
const GlobalFilteringPaymentReq = ({ filter, setFilter }) => {
  return (
    <>
      <div class='inline' style={{ marginTop: "2rem", marginLeft: "-6.5rem" }}>
        Search
      </div>
      <Col style={{ marginTop: "-1.7rem", marginLeft: "-1.5rem" }}>
        <Input
          placeholder=''
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Col>
      {/* <div class="col ml-auto" align="right">
<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-download" aria-hidden="true"></i>{' '}PDF</button>{' '}
<button type="button" class="btn btn-primary btn-sm">
    <i class="fa fa-download" aria-hidden="true"></i>{' '}Excel</button>
</div> */}
      {/* </div> */}
    </>
  );
};

export default GlobalFilteringPaymentReq;
