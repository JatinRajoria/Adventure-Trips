import { Container, Row, Col } from "react-bootstrap";
import { info } from "../data/Data";
import '../style/style.css'
function Blog() {
   return (
      <Container fluid>
         <Row>
            {
               info.map(function (d) {
                  return (
                     <Col >
                        <h1 className="blog">Blog</h1>
                        <div class="py-5 bg-light service-27">
                           <div class="container">
                              <div class="row">
                                 <div class="col-lg-6 align-self-center">
                                    <h3 class="my-3">Adventure Activities You Must Try Once in a Lifetime</h3>
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
   );
}

export default Blog;
