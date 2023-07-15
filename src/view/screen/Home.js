import { Container,Row,Col,Carousel,Card,Button,} from "react-bootstrap";
import{banner,trip,content,info} from "../data/Data"
import '../style/style.css'
import { useNavigate } from "react-router-dom";

function Home() {
  const nav =useNavigate()
    return (
     <Container fluid>
        <Row>
            <Col>
            <Carousel>
                {
                    banner.map(function(d){
                        return(
                            <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={d}  style={{width:'100%', height:'1000px'}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ADVENTURE</h3>
          <p> It is a good idea to defeat your fear with adventure.Various adventurous activities include river rafting, bungee jumping, sky diving, etc.</p>
        </Carousel.Caption>
      </Carousel.Item>
                        )
                    })
      
      }
    </Carousel>
            </Col>
        </Row>
      
           {/* About */}
             <Row>
                <div className='section'>
             <Row>
            
               {
                      content.map(function(d){
                     return(
                        <Row>
                        <h1 className='sec3'>ABOUT US</h1>
                        <Col>
            <div className='col-6 col-lg-4'>
               <img  src={d.img} alt='' className='sec2'/>
            </div>
            </Col>
            <Col className='col-12  col-lg-8'>
               <p className='sec1'>An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports. Adventures are often undertaken to create psychological arousal or in order to achieve a greater goal, such as the pursuit of knowledge that can only be obtained by such activities.Adventure is essential in life for several reasons. It brings so many positive changes in your own self and your life, letting you see your own life from a new perspective, never experienced before. Today, with such big money involved, it has also become a matter of bread and butter for many families linked with the industry.</p>
               </Col>
            </Row>
             )})  }
          </Row>
             </div>
             </Row>


   {/* services */}
        <Row>
          <h3 className="heading">Services</h3>
          <h4 className="heading2">Scroll our list of  ideas for adventure travel to go on below. </h4>
            {
             trip.map(function(d){
                return(
                  <Col>
                    <Card style={{ width: '23rem', marginRight:'50px', marginLeft:'auto'}} className="cursor" onClick={()=>nav('/details', {state:d})}>
      <Card.Img variant="top" src={d.img} style={{height:'350px'}} />
      <Card.Body>
        <Card.Text>
          {d.Text}
        </Card.Text>
        <Button variant="primary"  style={{position:'relative',left:'90px'}}>{d.Button}</Button>
      </Card.Body>
    </Card>
                   </Col>
                )
             })
            }
      </Row>
   
 
      {/* Blog  */}
      <Container fluid>
      <Row>
            {
               info.map(function(d){
                  return(
                     <Col>
                     <h1 className="blog">Blog</h1>
                     <div class="py-5 bg-light service-27">
                        <div class="container">
                           <div class="row">
                        
                              <div class="col-lg-6 align-self-center">
                             
                                 <h4 class="my-3">Adventure Activities You Must Try Once in a Lifetime</h4>
                                 <p class="mt-3">Adventure activities are all about pushing those boundaries to know how far you can go. They help you prove your abilities, boost confidence, help calm your mind, body, and soul, and promotes good mental health.  Moreover, they help you gain a perspective on your life while enriching you with loads of new experiences.In the past few years, the popularity for adventure activities has grown significantly and people are looking at more than just fun.</p>
                                 <div class="row">
                                    <div class="col-md-6 mt-4">
                                       <span class="text-info-gradiant display-5">Travel Enthusiast</span>
                                       <h6 class="font-weight-medium my-3">Best HIKING Tips</h6>
                                       <p>You can relay on our amazing features list and also our customer services will be great experience have.</p>
                                    </div>
                                    <div class="col-md-6 mt-4">
                                       <span class="text-info-gradiant display-5">Expand Your Mind</span>
                                       <h6 class="font-weight-medium my-3">A First-Timer’s Guide</h6>
                                       <p>You can relay on our amazing features list and also our customer services will be great experience have.</p>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6 text-center">
                                 <img src={d.img} class="img-fluid" alt="" />
                              </div>
                           </div>
                        </div>
                     </div> 
                     </Col>
                  )
                  
               })
            }
            
            
         </Row>
         </Container>
     </Container>
    );
  }
  
  export default Home;
  