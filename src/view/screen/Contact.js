// import './Contact.css'
import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap' 
import '../style/style.css'
// import Home from './Home'
function ContactUs() {


  return (

         
      <div className='contact_us row'>

      
      <div class="text-center contact">
      <h1 className='contact_text'>Contact Us</h1>
      <span className='hr'><hr/></span>
    
    
      <div class="row">
    
    <div class='col-lg-6 col-md-6 col-sm-12'>
        <div class="col" className='col_1'>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.588872601289!2d75.80209387427135!3d26.853025762655168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d0abb464cf%3A0x43440aa416c9fdaf!2sWorld%20Trade%20Park!5e0!3m2!1sen!2sin!4v1683634846845!5m2!1sen!2sin"
      allowfullscreen="" 
      loading="lazy"
      className='map'
        referrerpolicy="no-referrer-when-downgrade">
        </iframe> */}


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5814120633004!2d75.77421117427262!3d26.885037161281552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db445cc9b116f%3A0x242189be6ea0ae12!2sSumit%20General%20Store!5e0!3m2!1sen!2sin!4v1684306080466!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>

        </div>
        </div>
        <div class='col-lg-6 col-md-6 col-sm-12'>
        <div class="col"  className='col_2'>
        <div class="text-center touch" >
          <h2 style={{paddingTop:'2vh'}}>Get In Touch</h2>
          </div>
        <form>
        <div class="form-group">
    
        <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter Your Name" name="name"  autoComplete='off' required/>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" autoComplete='off' required/>
          <small id="emailHelp" class="form-text text-muted" style={{marginLeft:'0px'}}>We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" name="password" autoComplete='off' required/>
          </div>
        <div class="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Message' name="massage" autoComplete='off' required></textarea>
        </div>
        <Button type="submit" class="btn btn-primary" className="contactbtn"> Send Message</Button>
      </form>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default ContactUs