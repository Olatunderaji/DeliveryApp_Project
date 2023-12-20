import NavBar from "../NavBar"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Dashboard.css"


const My_Shipment = ({menulist}) => {
  return (
    <div>
    <NavBar
    menulist='My Shipment'
    />
    <div className="formContainer">
      <div className="formboxes">
        <h5>Tracking ID</h5>
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search by Tracking ID"
              className=" mr-sm-2 trackingID"
            />
          </Col>
        </Row>
      </Form>
      </div>
    </div>
      
    </div>
    
  )
}

export default My_Shipment