import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./view/screen/Home";
import About from "./view/screen/About";
import Services from "./view/screen/Services";
import Blog from "./view/screen/Blog";
import Details from "./view/screen/Details";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Nav, Navbar } from "react-bootstrap";
import { menubar } from "./view/data/Data";
import './view/style/style.css'
import Register from "./view/screen/Register";
import Login from "./view/screen/Login";
import { useState } from "react";
import Addtocart from "./view/screen/Addtocart";
import Payment from "./view/screen/Payment";
import Contact from "./view/screen/Contact";

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  console.log(localStorage.getItem('user'));

  function logout() {
    alert('logout')
    localStorage.setItem('user', false)
    setUser(false)
    localStorage.clear()
  }
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col>
              <Navbar bg="light" expand="lg">
                <Container fluid className="header">
                  <Navbar.Brand href="#home" style={{ fontSize: '30px', fontFamily: 'Franklin Gothic Medium Arial Narrow Arial sans-serif', color: 'orange' }} className="logo">BLEISURE TRIPS</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      <Nav.Link href="/">Home</Nav.Link>
                      {
                        menubar.map(function (d) {
                          return (
                            <Nav.Link href={`/${d}`}>{d}</Nav.Link>
                          )
                        }
                        )
                      }

                      {
                        user ?
                          <Nav.Link> <Link to="/Addtocart" className="text-decoration-none text-secondary cart">🛒</Link></Nav.Link>
                          : null
                      }

                      {user ? null : <>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                      </>
                      }
                    </Nav>
                    {/* ternary operator */}
                    {
                      user ? <Button onClick={logout}>Logout</Button> : null
                    }
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/Addtocart" element={<Addtocart />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Contact" element={<Contact />} />

          {/* ternary operator */}
          {
            user ? null : <>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </>

          }

          <Route path='/details' element={<Details />} />
        </Routes>
        <>
          <Container className="last" fluid>
            <footer className="bg-dark text-white pt-5 pb-4">
              <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">BLEISURE TRIPS</h5>
                    <p>Explore the world to find the destination of your choice.</p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Services</h5>
                    <p className="text-white">RAFTING</p>
                    <p className="text-white">HIKING</p>
                    <p className="text-white">CAMPING</p>
                    <p className="text-white">SKYDIVING</p>
                    <p className="text-white">SURFING</p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                    <Link to='/about' className="text-decoration-none">
                      <p className="text-white">About</p>
                    </Link>
                    <Link to='/service' className="text-decoration-none">
                      <p className="text-white">Services</p>
                    </Link>
                    <Link to='/service' className="text-decoration-none">
                      <p className="text-white">Blog</p>
                    </Link>
                    <Link to='/register' className="text-decoration-none">
                      <p className="text-white">Register</p>
                    </Link>
                  </div>
                  <div className="col-md-4 col-md-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                    <p>
                      <i className="fas fa-home mr-3"></i>Jaipur 302006, Rajasthan, India
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i>elegance@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i>+01 222 456 984
                    </p>
                    <p>
                      <i className="fas fa-print mr-3"></i> +01 746 409 234
                    </p>
                  </div>
                  <hr className="mb-4" />
                  <div className="w-100 row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-8">
                      <p>Copyright © 2023 |  Jatin Rajoria,  All rights reserved by:
                        <strong className="text-success"> BLEISURE TRIPS</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </footer>

          </Container>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
