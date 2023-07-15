import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom"; 
import img1 from '../img/login1.jpg'

export default function Login(){
    const nav = useNavigate();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
       
        let submitlogin=async()=>{
    
            let params={
              email:email,
              password:password
            }
            
            console.log(params);
            try {
              let res =await axios.post("login",params).catch(err=>alert(err))
              console.log(res.data);
              
              let {success,message,data} =res.data
              if(success){
              alert(message)
           console.log(data);
           localStorage.setItem('user',true)
              nav("/")
              window.location.reload(true);
              }
              else{
                alert(message)
               }
               } catch (error) {
              alert(error)
            }
            setEmail("")
            setPassword("")
          }

    return(
        <>
        <Container>
        <Row>
            <Col>
            <img src={img1} style={{width:'100%', height:'600px'}} fluid/>
                <Form  style={{position:'relative', bottom:'50%'}}>
                    <h1 style={{textAlign:'center',fontFamily:'Italic', color:'wheat',textDecoration:'underline'}}>Login Now</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(d)=>setEmail(d.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(d)=>setPassword(d.target.value)}/>
                    </Form.Group>
                    <Button variant="dark"  onClick={submitlogin} style={{fontSize:'20px', borderRadius:'10px'}}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
    </>
    )
}
