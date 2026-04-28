import React, { useState } from 'react';
import { Button, Dropdown, Row, Col, Carousel } from 'antd';
import { Link } from 'react-router-dom';
// import { createFromIconfontCN } from '@ant-design/icons';
import { GithubOutlined, InstagramOutlined, LinkedinOutlined  } from '@ant-design/icons';

function HomeLayout(props){
    const user = JSON.parse(localStorage.getItem('user'))
    // const IconFont = createFromIconfontCN({
    //   scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    // });
    
    const [activeTab, setActiveTab] = useState("tabs-1");

    // Function to handle tab switching
    const showTab = (tabId) => {
        setActiveTab(tabId);
    };

    // Clicking on the sidebar should reset to 'tabs-1'
   
    
    const items = [
        {
          key: '1',
          label: (
            <a  href="/">
              Home
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a  href="/userbookings">
              My Booking
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a  href="/loginadmin">
                Admin
            </a>
          ),
        },
        {
            key: '4',
            label: (
              <li onClick={()=>{
                localStorage.removeItem('user');
                window.location.href='./login'
              }} style={{color:'orangered'}}>Logout</li>
            ),
          },
      ];
    return (
      <div>
        <div
          className="header"
          style={{
            position: "absolute",
            zIndex: 99999,
            backgroundColor: "transparent",
            width: "100%",
            height: "80px",
            fontSize: "20px",
            padding: "65px",
            WebkitTransition: "all 0.3s ease-in-out 0s",
            MozTransition: "all 0.3s ease-in-out 0s",
            OTransition: "all 0.3s ease-in-out 0s",
            transition: "all 0.3s ease-in-out 0s",
          }}
        >
          {/* <Row gutter={16} justify={'center'}>
              <Col lg={20} sm={24} xs={24}>
                    <div className='d-flex justify-content-between'>
                      <h1><b><Link to='/' style={{color: "orangered"}}>Car Rental</Link></b></h1>
                      <Dropdown menu={{items,}} placement="bottomRight" arrow={{pointAtCenter: true,}}>
                        <Button>{user.username}</Button>
                      </Dropdown>
                    </div>
              </Col>
            </Row> */}
          <Row gutter={16} justify={"center"}>
            <Col lg={20} sm={24} xs={24}>
              <div
                className="d-flex justify-content-between white"
                style={{ alignItems: "center" }}
              >
                
                <Link to="/" className="brand-link">
                  <h1 style={{ color: "white" }}>
                    <b>Car Rental</b>
                  </h1>
                </Link>
                
                <div className="d-flex" placement="Right">
                  <a class="nav-link" href="/" style={{ color: "white" }}>
                    Home
                  </a>
                  <a
                    class="nav-link"
                    href="/home2"
                    style={{ color: "white" }}
                  >
                    Fleet
                  </a>
                  <a
                    class="nav-link"
                    href="/home2"
                    style={{ color: "white" }}
                  >
                    Offers
                  </a>
                  <a
                    class="nav-link"
                    href="/contact"
                    style={{ color: "white" }}
                  >
                    Contact Us
                  </a>
                  <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    arrow={{ pointAtCenter: true }}
                  >
                    <Button style={{ borderRadius: "200%", border: "black" }}>
                      <b>{user.username}</b>
                    </Button>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div class="main-banner header-text" id="top">
          <div className="Modern-Slider">
            <Carousel autoplay>
              <div class="item item-1">
                <div class="img-fill">
                  <div class="text-content">
                    <h6 style={{ color: "orangered" }}>Flexible city rides</h6>
                    <h4>
                      Rent the right car <br></br> in minutes
                    </h4>
                    <p>
                      Compare trusted vehicles, check availability, and reserve
                      a clean, comfortable ride for errands, office commutes, or
                      weekend escapes.
                    </p>
                    <Button className="hero-button">
                      <a href="/home2"><b>Explore Fleet</b></a>
                    </Button>
                  </div>
                </div>
              </div>

              <div class="item item-2">
                <div class="img-fill">
                  <div class="text-content">
                    <h6 style={{ color: "orangered" }}>Transparent pricing</h6>
                    <h4>
                      Hourly rentals <br></br> without surprises
                    </h4>
                    <p>
                      Choose by budget, comfort, and trip length. Every listing
                      shows the hourly rate upfront so you can book with total
                      confidence.
                    </p>
                    <Button className="hero-button">
                      <a href="/home2"><b>View Cars</b></a>
                    </Button>
                  </div>
                </div>
              </div>

              <div class="item item-3">
                <div class="img-fill">
                  <div class="text-content">
                    <h6 style={{ color: "orangered" }}>Support that stays close</h6>
                    <h4>
                      Help before, during <br></br> and after your trip
                    </h4>
                    <p>
                      From pickup questions to booking changes, our team keeps
                      the rental experience smooth so you can focus on the road.
                    </p>
                    <Button className="hero-button">
                      <a href="/contact"><b>Contact Us</b></a>
                    </Button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="mt-5">
          <img src="https://therentalradar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcars.b43449c7.png&w=828&q=75" alt='img'></img>
          <p className="partner-copy">
            <b>Popular makes, practical rates, and booking that fits your schedule.</b>
          </p>
          <div
            className="d-flex justify-content-center mt-5"
            style={{
              aspectRatio: "50/2",
              objectFit: "contain",
              mixBlendMode: "darken",
            }}
          >
            <img src="https://th.bing.com/th/id/OIP.VPiJlD5DArEiEFm_Y3zn1QHaGV?rs=1&pid=ImgDetMain" alt='img'></img>
            <img src="https://www.carlogos.org/car-logos/honda-logo-2000-full-640.png" alt='img'></img>
            <img src="https://www.carlogos.org/car-logos/toyota-logo-2005-640.png" alt='img'></img>
            <img src="https://www.carlogos.org/car-logos/ford-logo-2017-640.png" alt='img'></img>
            <img src="https://www.carlogos.org/logo/Suzuki-logo-640x425.jpg" alt='img'></img>
          </div>
        </div>
        <div className="content" style={{ minHeight: "50vh" }}>
          {props.children}
        </div>
        <div class="fun-facts">
          <div class="container">
            <div class="more-info-content">
              <div class="row">
                <div class="col-md-6">
                  <div class="left-image">
                    <img
                      src="https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=600"
                      class="img-fluid"
                      alt='img'
                    ></img>
                  </div>
                </div>
                <div class="col-md-6 align-self-center">
                  <div class="right-content">
                    <span>Who we are</span>
                    <h2>
                      Built for simple, dependable <em>daily travel</em>
                    </h2>
                    <p>
                      Car Rental helps customers book verified cars for
                      short trips, planned travel, and last-minute mobility.
                      Our focus is clear pricing, quick confirmations, and a
                      fleet that is easy to compare.
                    </p>
                    <a href="/about" class="filled-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Section with Tabs */}
        <div className="more-info">
          <div className="container">
            <div className="section-heading">
              <h2>
                Rental <em>Tips</em>
              </h2>
              <span>Guides to help you choose, book, and drive smarter</span>
            </div>

            <div className="row" id="tabs">
              {/* Sidebar (Clickable Tabs) */}
              <div className="col-md-4">
                <ul>
                  <li>
                    <a
                      href="#tabs-1"
                      onClick={(e) => {
                        e.preventDefault();
                        showTab("tabs-1");
                      }}
                    >
                      How to pick the right car for a weekend trip <br/>
                      <small>Car Rental Team &nbsp;|&nbsp; 18.04.2026</small>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tabs-2"
                      onClick={(e) => {
                        e.preventDefault();
                        showTab("tabs-2");
                      }}
                    >
                      What to check before confirming a rental <br />
                      <small>Car Rental Team &nbsp;|&nbsp; 12.04.2026</small>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tabs-3"
                      onClick={(e) => {
                        e.preventDefault();
                        showTab("tabs-3");
                      }}
                    >
                      Hourly rentals vs day rentals: when each works best <br />
                      <small>Car Rental Team &nbsp;|&nbsp; 05.04.2026</small>
                    </a>
                  </li>
                </ul>
                <br />
                <div className="text-center">
                  <a href="/home2" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>

              {/* Right Column (Tabs Content) */}
              <div className="col-md-8">
                <section className="tabs-content">
                  {activeTab === "tabs-1" && (
                    <article id="tabs-1" className="tab-content">
                      <img
                        src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                      <h4>
                        <a href="/home2">
                          How to pick the right car for a weekend trip
                        </a>
                      </h4>
                      <p>
                        Match the car to the people, luggage, road conditions,
                        and comfort level you need. Compact cars are great for
                        city routes, while SUVs make longer drives feel easier.
                      </p>
                    </article>
                  )}

                  {activeTab === "tabs-2" && (
                    <article id="tabs-2" className="tab-content">
                      <img
                        src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                      <h4>
                        <a href="/home2">
                          What to check before confirming a rental
                        </a>
                      </h4>
                      <p>
                        Review the rate, pickup timing, vehicle image, seating,
                        and booking window before you pay. A quick check keeps
                        your trip predictable from the first kilometer.
                      </p>
                    </article>
                  )}

                  {activeTab === "tabs-3" && (
                    <article id="tabs-3" className="tab-content">
                      <img
                        src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                      <h4>
                        <a href="/home2">
                          Hourly rentals vs day rentals: when each works best
                        </a>
                      </h4>
                      <p>
                        Hourly plans are ideal for errands, meetings, and short
                        visits. Longer day plans make more sense when your route
                        has multiple stops or uncertain return times.
                      </p>
                    </article>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonials">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading">
                  <h2>What drivers say <em>about us</em></h2>
                  <span>Real feedback from frequent renters</span>
                </div>
              </div>
              <div class="col-md-12">
                <Carousel autoplay>
                  
                  <div className="testimonial-item">
                    <div class="inner-content">
                    <img src="https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                      <h4>Ambar Gupta</h4>
                      <span>Business Traveller</span>
                      <p>"The car was ready on time, the hourly price was clear, and the booking took less than five minutes."</p>
                    </div>
                  </div>
                  
                  <div class="testimonial-item">
                    <div class="inner-content">
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                      <h4>Mayank Singh</h4>
                      <span>Weekend Explorer</span>
                      <p>"I could compare cars quickly and choose one that had enough space for the whole family."</p>
                    </div>
                  </div>
                  
                  <div className="testimonial-item d-flex justify-item-between">
                    <div class="inner-content">
                    <img src="https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                      <h4><b>Anurag</b></h4>
                      <span>Marketing Lead</span>
                      <p>"Support was responsive when I needed to adjust my pickup time. The experience felt simple and reliable."</p>
                    </div>
                  </div>
                  
                  <div class="testimonial-item">
                    <div class="inner-content">
                    <img src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                      <h4>Shivam </h4>
                      <span>Finance Consultant</span>
                      <p>"The pricing was easy to understand, and the vehicle matched the listing exactly. I would book again."</p>
                    </div>
                  </div>
                  
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="footer  align-items-center">
          <hr />
          <div>
            <p>Desinged and Developed By</p>
            <p>Mayank Singh</p>
          </div>
          <div>
            <Space>
              <Link to="https://www.instagram.com/mr._mayanksingh/">
                <InstagramOutlined />
              </Link>
              <Link to="https://m.facebook.com/profile.php?id=100020285913175&name=xhp_nt__fb__action__open_user">
                <IconFont type="icon-facebook" style={{ color: "#1877F2" }} />
              </Link>
              <Link to="https://github.com/MayankSingh0928">
                <GithubOutlined />
              </Link>
              <Link to="https://www.linkedin.com/in/mayank-singh-2097012a5/">
                <LinkedinOutlined />
              </Link>
            </Space>
          </div>
        </div> */}
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-3 footer-item">
                <h4>Car Rental</h4>
                <p>Reliable cars, clear hourly pricing, and quick booking for everyday travel.</p>
                <ul class="social-icons">
                  <li rel="nofollow" target="_blank"><Link to="https://www.linkedin.com/in/mayank-singh-2097012a5/">
                <LinkedinOutlined />
              </Link></li>
                  <li><Link to="https://github.com/MayankSingh0928">
                <GithubOutlined />
              </Link></li>
                  <li><Link to="https://www.instagram.com/mr._mayanksingh/">
                <InstagramOutlined />
              </Link></li>
                </ul>
              </div>
              <div class="col-md-3 footer-item">
                <h4>Useful Links</h4>
                <ul class="menu-list">
                <li><a href="/home2">Browse Fleet</a></li>
                <li><a href="/userbookings">My Bookings</a></li>
                <li><a href="/contact">Customer Support</a></li>
                <li><a href="/about">About Car Rental</a></li>
                <li><a href="/home2">Current Offers</a></li>

                </ul>
              </div>
              <div class="col-md-3 footer-item">
                <h4>Additional Pages</h4>
                <ul class="menu-list">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/home2">Fleet</a></li>
                  <li><a href="/contact">FAQ</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/about">Terms</a></li>
                </ul>
              </div>
              <div class="col-md-3 footer-item last-item">
                <h4>Contact Us</h4>
                <div class="contact-form">
                  <form id="contact footer-contact" action="" method="post">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required=""/>
                        </fieldset>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required=""/>
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" class="filled-button">Send Message</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        <div class="sub-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <p>
                    Copyright (c) 2026 Car Rental
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default HomeLayout

