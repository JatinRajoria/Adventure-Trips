// import{useLocation, useNavigate} from 'react-router-dom'
// import { useState } from 'react'
// import axios from "axios";
// import {Col,Container,Row} from "react-bootstrap";
// // import {trip} from "../data/Data";
// import(useState)
// function Details() {
//   const nav = useNavigate()
//   const loc = useLocation()
//   const[trip, setTrip] = useState(loc.state)
//   console.log(trip);


//    async function detailsitem(trip){
//    let res = await axios.post("addtocart",trip)
//    console.log(res.data); 
//    const {message,success} =res.data
// if(success){

//     alert(message)
//     nav("/")
// }
// else{
//     alert(message)
//    }
// }
  

  //   return (
  //     <Container>
  //       <Row>
  //         <Col lg={6} >
  //           <div className='w-75 px-3'>
  //         <img src={trip.img} alt="" className='productimg'/></div>
  //         </Col>
  //         <Col lg={6}>
  //         <div>
  //           <p  className='details-text2'>{trip.Text2}</p>
  //           <p className='details-text3'>{trip.Text3}</p>
  //           <p>{trip.Text4}</p>
  //           <div className='sell'>
  //           <p>{trip.sellrate}</p>
  //           <p className='mrp'>{trip.Mrp}</p>
  //          </div>
  //          <div className='sell1'> 
  //          <p>{trip.sellrate1}</p>
  //           <p className='mrp'>{trip.Mrp1}</p>
  //          </div>
  //           <div className='details-button'>
  //           <button className='details-button1'>{trip.Button1}</button>
  //           <button className='details-button1'>{trip.Button2}</button>
  //           </div>
  //         </div>
  //         </Col>
    
  //       </Row>
  //     </Container>
  //   );
  // }
  
  // export default Details;


  import{useLocation, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
import {Col,Container,Row} from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import {trip} from "../data/Data";
function Details() {
  const nav = useNavigate()
  const loc = useLocation()
  const[trip, setTrip] = useState(loc.state)
  console.log(trip);
  async function tripaddtocart(product){
    let params = {
        ...product
    }
    let res = await axios.post("addtocart",params).catch(e=>alert(e))
    console.log(res.data);
    let {message,success} = res.data
    console.log(success);
    if(!success)
    {
        alert("Successfully Added");
        nav("/AddtoCart")
    }
    else
    {
        alert("your")
        nav("/Login")
  }
}


  
  return (
    <Container>
      <Row>
        <Col lg={6} >
          <div className='w-75 px-3'>
        <img src={trip.img} alt="" className='productimg'/></div>
        </Col>
        <Col lg={6}>
        <div>
          <p  className='details-text2'>{trip.Text2}</p>
          <p className='details-text3'>{trip.Text3}</p>
          <p>{trip.Text4}</p>
          <div className='sell'>
          <p>{trip.sellrate}</p>
          <p className='mrp'>{trip.Mrp}</p>
         </div>
         <div className='sell1'> 
         <p>{trip.sellrate1}</p>
          <p className='mrp'>{trip.Mrp1}</p>
         </div>
          <div className='details-button'>
          <button className='details-button1' value={trip} onClick={()=> tripaddtocart(trip)}>{trip.Button1}</button>
            <Link className='butnow' to={"/Payment"}>  <button className='details-button1'>{trip.Button2}</button></Link>
        
          </div>
        </div>
        </Col>
  
      </Row>
    </Container>
  );
}

export default Details;