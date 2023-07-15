import { Container,Row,Col,Card,Button} from "react-bootstrap";
import{trip} from "../data/Data"
import{useNavigate} from 'react-router-dom'
import '../style/style.css'
function Services() {
  const nav = useNavigate() 
    return (
     <Container fluid>
           <Row>
          <h1 className="heading">Services</h1>
          <h4 className="heading2">Scroll our list of  ideas for adventure travel to go on below. </h4>
            {
             trip.map(function(d){
                return(
                  <Col>
                    <Card style={{ width: '23rem', marginRight:'50px',marginLeft:'auto'}} className="cursor" onClick={()=>nav('/details', {state:d})}>
      <Card.Img variant="top" src={d.img} style={{height:'350px'}} />
      <Card.Body>
        <Card.Text>
          {d.Text}
        </Card.Text>
        <Button variant="primary" style={{position:'relative',left:'90px'}}>{d.Button}</Button>
      </Card.Body>
    </Card>
                   </Col>
                )
             })
            }
      </Row>
     </Container>
    );
  }
  
  export default Services;
  