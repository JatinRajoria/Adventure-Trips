import '../style/style.css'
import {content} from '../data/Data'
import { Container,Row,Col } from 'react-bootstrap'
export default function About(){
  return(
      content.map(function(d){
      return(
        <Container fluid>
          <div className='section'>
          <Row>
              {/* <div className='section'> */}
              <h1 className='sec3'>ABOUT US</h1>
            <Col>
            <div className='col-6 col-lg-4'>
               <img  src={d.img} alt='' className='sec2'/>
            </div>
            </Col>
            <Col className='col-12  col-lg-8'>
               <p className='sec1'>An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports. Adventures are often undertaken to create psychological arousal or in order to achieve a greater goal, such as the pursuit of knowledge that can only be obtained by such activities.Adventure is essential in life for several reasons. It brings so many positive changes in your own self and your life, letting you see your own life from a new perspective, never experienced before. Today, with such big money involved, it has also become a matter of bread and butter for many families linked with the industry.</p>
               </Col>
            {/* </div> */}
          </Row>
          </div>
      </Container>
     )
  
   })
  )}
  

  // lg 5 , mg 5 sm 12