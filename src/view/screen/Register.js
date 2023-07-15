import { Container, Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import '../style/style.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img1 from '../img/register.jpg'


function Register() {
    const nav = useNavigate()
    const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    let submitregister=async()=>{
        console.log(file);
        console.log(fileName);
        
          const formdata= new FormData();
          formdata.append("file",file)
          formdata.append("filename",fileName)
          let data =JSON.stringify( Object.fromEntries(formdata));
        
        console.log(data);
          let params={
          username:name,
          email:email,
          password:password,
          image:file
        }
        console.log(params);
        try {
            let res =await axios.post("register",params).catch(err=>alert(err))
            console.log(res.data);
            let {success,message} =res.data
            if(success){
              alert(message)
              nav("/Login")
            }
            else{
              alert(message)
            }
          } catch (error) {
            console.log("error==",error);
            alert(error)
          }
        
        setEmail("")
        setPassword("")
        setName("")
        }
    return (
        <Container>
            <Row>
                <Col>
                        <img src={img1} style={{width:'100%', height:'600px'}} fluid/>
                        
                    <Form  style={{position:'relative', bottom:'50%'}}>
                    <h1 style={{textAlign:'center',fontFamily:'Italic', color:'wheat',textDecoration:'underline'}}>Register Now!</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-light">Enter name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" vlaue={name} onChange={(d)=>setName(d.target.value)}></Form.Control>
                            <Form.Text className="text-muted"></Form.Text>
                            <Form.Label className="text-light">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(d)=>setEmail(d.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="text-light">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(d)=>setPassword(d.target.value)}/>
                        </Form.Group>
                        <Button variant="dark" onClick={submitregister} style={{fontSize:'18px', borderRadius:'10px',textAlign:'center'}}>
                           Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;