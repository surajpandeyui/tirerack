import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Navbar, Nav, NavDropdown, Button, Carousel } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div className="desk">
      <Container fluid className="pt-3 pb-1">
          <Container>
              <Col lg={12} md={12} sm={12} xs={12} className="main-logo">
                  <Row>
                      <Col lg={3} md={3} sm={3} xs={3}>
                          <Col className="logo-ali">
                              <img src="https://www.tirerack.com/content/dam/tirerack/desktop/Navigation/TireRackLogo.png" className="logo" alt="Logo" />
                          </Col>
                      </Col>
                      <Col lg={9} md={9} sm={9} xs={9}>
                          <Col className="right-values">
                              <ul>
                                  <li>Why Tire Rack?</li>
                                  <li>Order Tracking</li>
                                  <li>Customer Support</li>
                                  <li>888-541-1777</li>
                                  <li>live chat</li>
                                  <li>LOG IN / CREATE ACCOUNT</li>
                                  <li>kart-icon</li>
                              </ul>
                          </Col>
                      </Col>
                  </Row>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} className="menu-section">
                  <Row>
                    <Navbar bg="light" expand="lg">
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                            <NavDropdown title="Tires" id="basic-nav-dropdown">
                              <Container fluid>
                                  <Row>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}><p className="font-weight-bold mb-0 mt-4">SHOP</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}> <p className="font-weight-bold mt-4">FIND</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" ><p className="font-weight-bold mt-4">LEARN</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col>
                                            <img src="https://www.tirerack.com/content/dam/tirerack/desktop/Navigation/menuTires.png" alt="" className="pt-5 pb-5" />
                                          </Col></Row>
                                      </Col>
                                  </Row>
                              </Container>
                            </NavDropdown>
                          </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                            <NavDropdown title="Wheels" id="basic-nav-dropdown">
                              <Container fluid>
                                  <Row>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}><p className="font-weight-bold mb-0 mt-4">SHOP</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}> <p className="font-weight-bold mt-4">FIND</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" ><p className="font-weight-bold mt-4">LEARN</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col>
                                            <img src="https://www.tirerack.com/content/dam/tirerack/desktop/Navigation/menuTires.png" alt="" className="pt-5 pb-5" />
                                          </Col></Row>
                                      </Col>
                                  </Row>
                              </Container>
                            </NavDropdown>
                          </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                            <NavDropdown title="Parts & Accessories" id="basic-nav-dropdown">
                              <Container fluid>
                                  <Row>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}><p className="font-weight-bold mb-0 mt-4">SHOP</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}> <p className="font-weight-bold mt-4">FIND</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" ><p className="font-weight-bold mt-4">LEARN</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col>
                                            <img src="https://www.tirerack.com/content/dam/tirerack/desktop/Navigation/menuTires.png" alt="" className="pt-5 pb-5" />
                                          </Col></Row>
                                      </Col>
                                  </Row>
                              </Container>
                            </NavDropdown>
                          </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                            <NavDropdown title="Research & Advice" id="basic-nav-dropdown">
                              <Container fluid>
                                  <Row>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}><p className="font-weight-bold mb-0 mt-4">SHOP</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}> <p className="font-weight-bold mt-4">FIND</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" ><p className="font-weight-bold mt-4">LEARN</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col>
                                            <img src="https://www.tirerack.com/content/dam/tirerack/desktop/Navigation/menuTires.png" alt="" className="pt-5 pb-5" />
                                          </Col></Row>
                                      </Col>
                                  </Row>
                              </Container>
                            </NavDropdown>
                          </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                            <NavDropdown title="Delivery & Installation" id="basic-nav-dropdown" className="">
                              <Container fluid>
                                  <Row>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}><p className="font-weight-bold mb-0 mt-4">SHOP</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" style={{borderRight: '1px dotted #000000'}}> <p className="font-weight-bold mt-4">FIND</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col className="" ><p className="font-weight-bold mt-4">LEARN</p></Col></Row>
                                      </Col>
                                      <Col lg={3} md={3}>
                                          <Row><Col>
                                            <img src="https://www.tirerack.com/content/dam/tirerack/desktop/Navigation/menuTires.png" alt="" className="pt-5 pb-5" />
                                          </Col></Row>
                                      </Col>
                                  </Row>
                              </Container>
                            </NavDropdown>
                          </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                  </Row>
              </Col>
          </Container>
      </Container>

      <Container fluid className="banner-image">
        <Container>
          <Row className="pt-5 pb-5">
            <Col lg={4} md={4} sm={12} xs={12}></Col>
            <Col lg={8} md={8} sm={12} xs={12} className="pt-5 pb-5">
              <h1 className="white-color" style={{
                fontSize: '48px', 
                marginBottom: '25px',
                fontWeight: '700',
                textTransform: 'uppercase',
                lineHeight: '46px'
              }}>FAST, FREE SHIPPING ON<br/> TIRES, WHEELS & MORE<br/>
                <span style={{
                  fontSize: '32px',
                  fontFamily: 'gibson',
                  fontWeight: '500',
                  lineHeight: '32px',
                  display: 'block',
                }}>PLUS SAFE & EASY INSTALLATION</span>
              </h1>
              <p className="white-color">Shipping is fast and free on all orders over $50.</p>
              <p className="white-color">Installation? Many of our 9,000+ independent Recommended Installers, some providing mobile services, offer contact-free transactions. One is likely just around the corner from you.</p>
              <p className="white-color">More About Our Protected Installation Pledge</p>

              <Button className="width-40 mr-2">Shop Tires</Button><Button className="width-40 ml-2">Shop All Products</Button>
            </Col>
          </Row>
          <Row>
            <Col>
                
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="banner-tc">
          <Col className="banner-circle">
          <p><i>why</i><br/>
            <b>TIRE RACK?</b>
          </p>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5 mt-2">
        <Row>
          <Col>
          <h2 style={{
            color: '#3c3837',
            fontFamily: 'gibson',
            fontWeight: '700',
            fontSize: '38px',
            lineHeight: '.85',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '32px',
          }}>HERE'S HOW IT WORKS</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Row>
              <Col className="text-center">
                <img src="https://www.tirerack.com/content/dam/tirerack/desktop/svg/images/Find.gif" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 style={{
                  fontFamily: 'gibson',
                  fontWeight: '700',
                  fontSize: '22px',
                  lineHeight: '22px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: '#3c3837',
                  marginBottom: '0',
                }}>FIND WHAT'S<br/>RIGHT FOR YOU</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-center">An unmatched selection, helpful shopping tools and unbiased reviews. All from the safety of your own home.</p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Row>
              <Col className="text-center">
                <img src="https://www.tirerack.com/content/dam/tirerack/desktop/svg/images/Find.gif" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 style={{
                  fontFamily: 'gibson',
                  fontWeight: '700',
                  fontSize: '22px',
                  lineHeight: '22px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: '#3c3837',
                  marginBottom: '0',
                }}>GET FAST,
                <br/>FREE SHIPPING*</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-center">Directly to you or your installer. Usually by the next day.</p>
                <p className="small-p text-center">*On orders over $50. Other exclusions apply.</p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Row>
              <Col className="text-center">
                <img src="https://www.tirerack.com/content/dam/tirerack/desktop/svg/images/Find.gif" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 style={{
                  fontFamily: 'gibson',
                  fontWeight: '700',
                  fontSize: '22px',
                  lineHeight: '22px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: '#3c3837',
                  marginBottom: '0',
                }}>WE’LL HELP YOU
                <br/>CHOOSE AN INSTALLER</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-center">Our Protected Installation Pledge means you’re covered from “add to cart” to install. Installers are ready and waiting.</p>
              </Col>
            </Row>
          </Col>
          <Col className="text-center"><Button>Try Our Tire Decision Guide</Button></Col>
        </Row>
      </Container>
      <Container fluid className="need-car-banner pt-5 pb-5">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Row className="p-3 mt-5 mb-3" style={{
                background: '#000000d1',
              }}>
                <Col className="white-color">
                  <h2>HOW DO I KNOW IF I <br/>NEED NEW TIRES?</h2>
                  <p>Check your tread depth. As a tire wears, its ability to perform is reduced. Especially on wet roads in the spring. The important number is 4/32”. We’ll show you how to measure your tires to see if they’re ready for the roads…or retirement.</p>
                  <Button>Watch Now</Button>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}></Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="bg-light-gray">
        <Container>
          <Row>
            <Col className="pt-5 pb-4">
            <h4 className="text-center">MORE FROM OUR VIDEO CENTER</h4>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col lg={4} md={4} sm={12} xs={12}>
              <Row>
                <Col>
                  <img src="https://www.tirerack.com/images/videos/thumbnails_320x180/2021/from_your_couch_30.jpg" />
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Row>
                <Col>
                  <img src="https://www.tirerack.com/images/videos/thumbnails_320x180/2019/firestone_destination_mt2.jpg" />
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Row>
                <Col>
                  <img src="https://www.tirerack.com/images/videos/thumbnails_320x180/2018/2018_mercedes_amg_gtr.jpg" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="tire-rating-banner">
        <Container>
          <Row className="pt-3 pb-5">
            <Col lg={6} md={6} sm={12} xs={12} className="pt-5 pb-5">
              <Row className="pt-5 pb-5">
                <Col>
                  <h2>TIRE RATINGS<br/><span>CHARTS & REVIEWS </span></h2>
                  <p>Our ratings and reviews, submitted by consumers just like you, uncover trends in performance. Pinpoint exactly what's right for you.</p>
                  <a href="">See Ratings & Reviews </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Row>
                <Col>
                
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-red">
        <Container>
          <Row>
            <Col className="text-center pt-5 pb-5 white-color">
              <h2>OUR TIRE DECISION GUIDE</h2>
              <p>Answer just a few questions and we’ll narrow it down to the one tire that’s right for you.</p>
              <Button>Let’s Start</Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Row>
          <Col className="black-color text-center pt-5 pb-5">
            <h2>THE BEST OF THE BEST</h2>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col lg={2} md={2} sm={12} xs={12} className="p-0">
            <img src="https://www.tirerack.com/images/css_elements/retail/brandCollage_left.jpg" />
          </Col>
          <Col lg={8} md={8} sm={12} xs={12} className="p-0">
            <img src="https://www.tirerack.com/content/dam/tirerack/desktop/homepage/brandCollage.jpg" />
          </Col>
          <Col lg={2} md={2} sm={12} xs={12} className="p-0">
            <img src="https://www.tirerack.com/images/css_elements/retail/brandCollage_right.jpg" />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className="text-center">
            <a href="">See All Brands</a>
          </Col>
        </Row>
      </Container>

      <Container fluid className="s-test-track-banner pt-5 pb-5">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}></Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Row>
                <Col className="white-color">
                  <h2>STRAIGHT FROM THE<br/> TEST TRACK</h2>
                  <p>We know how important it is to know just how a tire’s going to feel out there on the road.</p>
                  <p>That’s why our test drivers tackle the twists and turns of our purpose-built test track and navigate the real world from behind the wheel on our seven-mile road loop.</p>
                  <span className="d-flex">
                    <div className="mr-2"><img src="https://www.tirerack.com/images/videos/thumbnails_320x180/2011/Testing-Tires-On-the-Test-Track.jpg" /></div>
                    <div className="ml-2"><p>Join us on the track. We’ll show you what we do.</p>
                    <Button>See Recent Test Results</Button></div>
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-red">
        <Container>
          <Row>
            <Col className="text-center pt-5 pb-5 white-color">
              <h2>SKIP THE SHIPPING. GET AN ORDER PICK-UP DISCOUNT.</h2>
              <p>Tires optimized for the roads you drive on PLUS a discount when you pick up your order.*</p>
              <p>*Limited availablity in select areas.</p>
              <Button>Start Shopping (and Saving)</Button>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.tirerack.com/content/dam/tirerack/desktop/landingPages/PeterVeldmanBook/Peter-Velman-Book-homepage.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <Row className="caro-text p-4">
                    <Col>
                      <h2 className="red-color">PETER VELDMAN: </h2>
                      <h2 className="white-color">DUTCH IMMIGRANT,<br/> AMERICAN<br/> ENTREPRENEUR </h2>
                      <span className="d-flex">
                        <div><img src="https://www.tirerack.com/content/dam/tirerack/desktop/landingPages/PeterVeldmanBook/Veldman-Book_small.png" width="520px" /></div>
                        <div><p>Hardworking, determined, courageous. This book, an account of Tire Rack founder Pete Veldman's life, will inspire readers interested in history, entrepreneurship or simply a good story.</p>
                        <Button>Order Today</Button></div>
                      </span>
                    </Col>
                  </Row>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.tirerack.com/content/dam/tirerack/desktop/homepage/veldmanboys.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <Row className="caro-text p-4">
                    <Col>
                      <h2 className="red-color">PETER VELDMAN: </h2>
                      <h2 className="white-color">DUTCH IMMIGRANT,<br/> AMERICAN<br/> ENTREPRENEUR </h2>
                      <span className="d-flex">
                        <div><img src="https://www.tirerack.com/content/dam/tirerack/desktop/landingPages/PeterVeldmanBook/Veldman-Book_small.png" width="520px" /></div>
                        <div><p>Hardworking, determined, courageous. This book, an account of Tire Rack founder Pete Veldman's life, will inspire readers interested in history, entrepreneurship or simply a good story.</p>
                        <Button>Order Today</Button></div>
                      </span>
                    </Col>
                  </Row>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light-gray">
        <Container>
          <Row>
            <Col className="text-center pt-5 pb-3">
              <h2>SERVICE WITH A SMILE</h2>
              <p>Need help choosing the right products for your vehicle? Our team of highly trained experts has<br/>
the knowledge and passion to help. Just pick up the phone and give us a ring.<br/>Or let's chat via email. We love solving problems and lending a hand (or an ear).</p>
            <h6>888-541-1777</h6>
            <a href="">Contact Us</a>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="https://www.tirerack.com/content/dam/tirerack/desktop/homepage/footer_SpringSummer_r1.jpg" />
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Container fluid className="footer-banner">
        <Container>
          <Row>
            <Col className="text-center pt-4">
              <img src="https://www.tirerack.com/content/dam/tirerack/desktop/Navigation/footerLogo.png" />
            </Col>
          </Row>
          <Row className="pt-4 pb-4 white-color">
            <Col lg={3} md={3} sm={3} xs={3}>
              <Row>
                <Col>
                  <ul>
                    <li className="head">WHY TIRE RACK?</li>
                    <li><a href="">The Tire Rack Advantage</a></li>
                    <li><a href="">Our Expertise</a></li>
                    <li><a href="">Events & Sponsorships</a></li>
                    <li><a href="">Road Hazard Protection</a></li>
                    <li><a href="">Tire Ratings Charts & Reviews</a></li>
                    <li><a href="">Ambassador Program</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
            <Row>
                <Col>
                  <ul>
                    <li className="head">DELIVERY & INSTALLATION</li>
                    <li><a href="">Quick Delivery</a></li>
                    <li><a href="">Recommended Installers</a></li>
                    <li><a href="">Installers' Price Pledge</a></li>
                    <li><a href="">Package Installation Instructions</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
            <Row>
                <Col>
                  <ul>
                    <li className="head">CUSTOMER SUPPORT</li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Order Tracking</a></li>
                    <li><a href="">Warranty Information</a></li>
                    <li><a href="">Returns/Refunds</a></li>
                    <li><a href="">FAQs</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
            <Row>
                <Col>
                  <ul>
                    <li className="head">VIDEO CENTER</li>
                    <li><a href="">Tires</a></li>
                    <li><a href="">Wheels</a></li>
                    <li><a href="">Suspension</a></li>
                    <li><a href="">Winter / Snow Tires</a></li>
                    <li><a href="">See All Videos</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
    
    <div className="mob-view">
      <Container fluid>
        <Container>
          <Row>
            <Col>header</Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="p-0">
        <Container className="p-0">
          <Row style={{
            maxWidth: '600px',
            margin: '0px auto 0 ',
            width: '100%',
            overflow: 'hidden',
            height: '200px',
          }}>
            <Col className="mob-banner-top p-0"></Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Row>
            <Col className="text-center pt-5 pb-5">
              <h2>FAST, FREE SHIPPING ON TIRES, WHEELS & MORE</h2>
              <h4>PLUS SAFE & EASY INSTALLATION</h4>
              <p>Shipping is fast and free on all orders over $50.</p>
              <p>Installation? Many of our 9,000+ independent Recommended Installers, some providing mobile services, offer contact-free transactions. One is likely just around the corner from you.</p>
              <a href="">More About Our Protected Installation Pledge </a>
              <Button className="width-100 mt-2 mb-2">Shop Tires</Button>
              <Button className="width-100 mt-2 mb-2">Shop All Products</Button>
              <p>Already know your tire size?</p>
              <a href="">Shop by Tire Size</a>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container className="text-center pt-5 pb-5">
          <Row>
            <Col><h2>HERE'S HOW IT WORKS</h2></Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Row>
                <Col className="text-center">
                  <img src="https://m.tirerack.com/content/dam/tirerack/desktop/svg/images/FindEnd.jpg" />
                  <h2>FIND WHAT'S RIGHT FOR YOU</h2>
                  <p>An unmatched selection, helpful shopping tools and unbiased reviews. All from the safety of your own home.</p>
                </Col>
              </Row>
            </Col>
            <Col lg={12}>
              <Row>
                <Col className="text-center">
                  <img src="https://m.tirerack.com/content/dam/tirerack/desktop/svg/images/DeliverEnd.jpg" />
                  <h2>FIND WHAT'S RIGHT FOR YOU</h2>
                  <p>An unmatched selection, helpful shopping tools and unbiased reviews. All from the safety of your own home.</p>
                </Col>
              </Row>
            </Col>
            <Col lg={12}>
              <Row>
                <Col className="text-center">
                  <img src="https://m.tirerack.com/content/dam/tirerack/desktop/svg/images/InstallEnd.jpg" />
                  <h2>WE'LL HELP YOU CHOOSE AN INSTALLER</h2>
                  <p>Our Protected Installation Pledge means you’re covered from “add to cart” to install. Installers are ready and waiting.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="width-100">Try Our Tire Decision Guide</Button>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container className="text-center pt-5">
          <Row> 
            <Col>
              <h2>SERVICE WITH A SMILE</h2>
              <p>Need help deciding? Other assistance? Give us a call or let's chat via email.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="https://m.tirerack.com/content/dam/tirerack/mobile/common/footer_SpringSummer.jpg" />
            </Col>
          </Row>
          <Row className="p-2 bg-black">
            <Col>
              <Button className="mr-2 width-100">Call Us</Button>
            </Col>
            <Col>
              <Button className="ml-2 width-100">Email Us</Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="mob-footer">
        <Container>
          <Row>
            <Col className="text-center pt-3 pb-3">
              <p><a href="" className="white-color">FAQ</a></p>
              <p><a href="" className="white-color">CAREERS</a></p>
              <p><a href="" className="white-color">ORDER TRACKING</a></p>
              <p><a href="" className="white-color">AMBASSADOR PROGRAM</a></p>
              <p><a href="" className="white-color">ONTARIO RRCEA</a></p>
              <p><a href="" className="white-color">ACCESSIBILITY STATEMENT</a></p>
              <p><a href="" className="white-color">CA PRIVACY POLICY</a></p>
              <p><a href="" className="white-color">TERMS OF USE</a></p>
              <p><a href="" className="white-color">PRIVACY POLICY</a></p>
              <p><a href="" className="white-color">VIEW DESKTOP SITE</a></p>
              <p><a href="" className="white-color">©2021 TIRE RACK</a></p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
    </div>
  );
}

export default App;
