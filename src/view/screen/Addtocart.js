import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import img1 from '../img/banner-bg.png'
import '../style/style.css'
export default function Cart() {
    const nav = useNavigate()
    const [trip, setTrip] = useState('')

    useEffect(() => {
        async function show() {
            let res = await axios.post('showtocart', {}).catch(e => console.log(e))
            console.log(res?.data);
            setTrip(res?.data)
        }
        show()
    }, [])

    async function removeitem(index) {
        console.log(index);
        let arr = [];
        trip.map((d, index1) => {
            if (index !== index1) {
                arr.push(d);
            }
        })
        console.log(arr);
        let res = await axios.post('removecartitem', arr).catch(e => console.log(e))
        console.log(res?.data);

        setTrip(arr)
    }

    console.log(Array.isArray(trip));


    return (
        <Container fluid>

            <Row className="justify-content-center">

                <Col className="col-lg-6">
                    {
                        trip.length > 0 && (Array.isArray(trip) && trip !== [] ? trip.map((d, index) => {
                            if (!Array.isArray(d)) {
                                return (

                                    <div className="border">
                                        <div className="addtocartshow d-flex">
                                            <div className="addtocartshow-img">
                                                <img src={d.img} style={{ width: '280px', height: '200px' , borderRadius:'10px'}} />

                                            </div>
                                            <div className="addtocartshow-text ">
                                                <p className="cart">{d.Text2}</p>
                                                {/* <p>Price : {d.sellrate}</p> */}
                                                <Form className="cart2">
                                                    <Form.Select   aria-label="Default select example">
                                                        <option>Solo or Family</option>
                                                        <option  value="1">{d.sellrate}</option>
                                                        <option    value="2">{d.sellrate1}</option>
                                                    </Form.Select>
                                                </Form>
                                                {/* <p>{d.sellrate1}</p> */}
                                                <p className="cart2">No. of persons : {1}</p>
                                                {/* <p>{d.delivery}</p> */}
                                                <div className="d-flex">
                                                    <Button style={{position:'relative', left:'60px'}} variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                    <Button style={{position:'relative', left:'80px'}}  variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                </div>

                                            </div>

                                            <div className="addtocartshow-text">

                                            </div>
                                        </div>
                                    </div>


                                )
                            } if (Array.isArray(d)) {
                                return (
                                    d.map(dd => (
                                        <div className="border">
                                            <div className="addtocartshow d-flex">
                                                <div className="addtocartshow-img">
                                                    <img src={dd.img} style={{ width: '280px', height: '200px' , borderRadius:'10px'}} />

                                                </div>
                                                <div className="addtocartshow-text ">
                                                    <p className="cart">{dd.Text2}</p>
                                                    <p>Price : {dd.sellrate}</p>
                                                    <p>Qty : {1}</p>
                                                    {/* <p>{dd.delivery}</p> */}
                                                    <div className="d-flex">
                                                        <Button variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                        <Button variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                    </div>

                                                </div>

                                                <div className="addtocartshow-text">

                                                </div>
                                            </div>
                                        </div>


                                    ))
                                )
                            }
                        }) :

                            trip.map((d, index) => {
                                if (d !== []) {
                                    return (
                                        <div className="border">
                                            <div className="addtocartshow d-flex">
                                                <div className="addtocartshow-img">
                                                    <img src={d.img} style={{ width: '280px', height: '200px' , borderRadius:'10px'}} />

                                                </div>
                                                <div className="addtocartshow-text ">
                                                    <p className="cart">{d.Text2}</p>
                                                    <p>Price : {d.sellrate}</p>
                                                    <p>Qty : {1}</p>
                                                    {/* <p>{d.delivery}</p> */}
                                                    <div className="d-flex">
                                                        <Button variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                        <Button variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                    </div>
                                                </div>

                                                <div className="addtocartshow-text">

                                                </div>
                                            </div>
                                        </div>


                                    )
                                }
                            }

                            )



                        )}
                </Col>
                <Col>
                <center><img src={img1} style={{width:'100%', height:'600px'}}/></center>
                <center className="cartvisit">Visit Now!</center>
                                <center className="cartpay"> “Adventure is a path. Real adventure – self-determined, self-motivated, often risky – forces you to have firsthand encounters with the world. The world the way it is, not the way you imagine it. Your body will collide with the earth and you will bear witness. In this way you will be compelled to grapple with the limitless kindness and bottomless cruelty of humankind – and perhaps realize that you yourself are capable of both. This will change you. Nothing will ever again be black-and-white.”</center>
                <center className="cartpay2">If you are willing to see beauty of nature with your on eyes then go on.</center>
                    <center><Link className="buynow" to="/Payment"> <Button className="cartpaybutton">Proceed to Payment</Button></Link></center>

                </Col>

            </Row>

            <br /> <br />
            <br /> <br />

            <br /> <br />
            <br /> <br />
        </Container>

    )
}

