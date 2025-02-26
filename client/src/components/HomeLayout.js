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
            <a  href="/admin">
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
                      <h1><b><Link to='/' style={{color: "orangered"}}>Cars Rental</Link></b></h1>
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
                
                <Link to="/">
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
                  <span class="nav-link" style={{ color: "white" }}>Offers</span>
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
                    <h6 style={{ color: "orangered" }}>
                      lorem ipsum dolor sit amet!
                    </h6>
                    <h4>
                      Quam temporibus accusam <br></br> hic ducimus quia
                    </h4>
                    <p>
                      Magni deserunt dolorem consectetur adipisicing elit.
                      Corporis molestiae optio, laudantium odio quod rerum
                      maiores, omnis unde quae illo.
                    </p>
                    <Button style={{ background: "orangered", color: "black" }}>
                      <b>contact us</b>
                    </Button>
                  </div>
                </div>
              </div>

              <div class="item item-2">
                <div class="img-fill">
                  <div class="text-content">
                    <h6 style={{ color: "orangered" }}>
                      magni deserunt dolorem harum quas!
                    </h6>
                    <h4>
                      Aliquam iusto harum <br></br> ratione porro odio
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At culpa cupiditate mollitia adipisci assumenda laborum
                      eius quae quo excepturi, eveniet. Dicta nulla ea beatae
                      consequuntur?
                    </p>
                    <Button style={{ background: "orangered", color: "black" }}>
                      <b>Fleet</b>
                    </Button>
                  </div>
                </div>
              </div>

              <div class="item item-3">
                <div class="img-fill">
                  <div class="text-content">
                    <h6 style={{ color: "orangered" }}>
                      alias officia qui quae vitae natus!
                    </h6>
                    <h4>
                      Lorem ipsum dolor <br></br> sit amet, consectetur.
                    </h4>
                    <p>
                      Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate
                      mi. Sed nec cursus augue. Phasellus lacinia ac sapien
                      vitae dapibus. Mauris ut dapibus velit cras interdum nisl
                      ac urna tempor mollis.
                    </p>
                    <Button style={{ background: "orangered", color: "black" }}>
                      <b>Offers</b>
                    </Button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="mt-5">
          <img src="https://therentalradar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcars.b43449c7.png&w=828&q=75" alt='img'></img>
          <p>
            <b>The cheapest car rental rates are just a click away</b>
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
                      Get to know about <em>our company</em>
                    </h2>
                    <p>
                      Curabitur pulvinar sem a leo tempus facilisis. Sed non
                      sagittis neque. Nulla conse quat tellus nibh, id molestie
                      felis sagittis ut. Nam ullamcorper tempus ipsum in cursus
                    </p>
                    <a href="about.html" class="filled-button">
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
                Read our <em>Blog</em>
              </h2>
              <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing <br/>
                      <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
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
                      Mauris lobortis quam id dictum dignissim <br />
                      <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
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
                      Class aptent taciti sociosqu ad litora torquent per <br />
                      <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                    </a>
                  </li>
                </ul>
                <br />
                <div className="text-center">
                  <a href="blog.html" className="filled-button">
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
                        <a href="blog-details.html">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </a>
                      </h4>
                      <p>
                        Sed ut dolor in augue cursus ultrices. Vivamus mauris
                        turpis, auctor vel facilisis in, tincidunt vel diam. Sed
                        vitae scelerisque orci. Nunc non magna orci. Aliquam
                        commodo mauris ante, quis posuere nibh vestibulum sit
                        amet.
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
                        <a href="blog-details.html">
                          Mauris lobortis quam id dictum dignissim
                        </a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et voluptatum doloribus voluptatem fugit dolores quam,
                        quaerat minima velit optio exercitationem temporibus
                        officia quibusdam placeat possimus quos enim provident
                        numquam aspernatur vero, nulla laborum, fugiat itaque
                        illo qui? Ducimus quaerat soluta sit doloremque
                        laudantium reiciendis ad ratione, laboriosam eligendi?
                        Neque architecto quibusdam alias minus nihil corrupti,
                        maiores id hic deleniti eius.
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
                        <a href="blog-details.html">
                          Class aptent taciti sociosqu ad litora torquent per
                        </a>
                      </h4>
                      <p>
                        Mauris lobortis quam id dictum dignissim. Donec
                        pellentesque erat dolor, cursus dapibus turpis hendrerit
                        quis. Suspendisse at suscipit arcu. Nulla sed erat
                        lectus. Nulla facilisi. In sit amet neque sapien. Donec
                        scelerisque mi at gravida efficitur. Nunc lacinia a est
                        eu malesuada. Curabitur eleifend elit sapien, sed
                        pulvinar orci luctus eget.{" "}
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
                  <h2>What they say <em>about us</em></h2>
                  <span>Testimonials from our greatest clients</span>
                </div>
              </div>
              <div class="col-md-12">
                <Carousel autoplay>
                  
                  <div className="testimonial-item">
                    <div class="inner-content">
                    <img src="https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                      <h4>Ambar Gupta</h4>
                      <span>Chief Financial Analyst</span>
                      <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptatibus aliquid, magnam perferendis dolor mollitia corporis suscipit quo expedita porro placeat non nisi eum minus earum eveniet ipsam quae error!"</p>
                    </div>
                  </div>
                  
                  <div class="testimonial-item">
                    <div class="inner-content">
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                      <h4>Mayank Singh</h4>
                      <span>Market Specialist</span>
                      <p>"Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique."</p>
                    </div>
                  </div>
                  
                  <div className="testimonial-item d-flex justify-item-between">
                    <div class="inner-content">
                    <img src="https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                      <h4><b>Anurag</b></h4>
                      <span>Marketing Head</span>
                      <p>"Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique."</p>
                    </div>
                  </div>
                  
                  <div class="testimonial-item">
                    <div class="inner-content">
                    <img src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                      <h4>Shivam </h4>
                      <span>Chief Accountant</span>
                      <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis expedita velit minus a, sit aspernatur enim neque doloribus cumque harum eveniet placeat dignissimos earum temporibus deleniti nesciunt mollitia natus maxime!"</p>
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
                <h4>Car Rental Website</h4>
                <p>Reliable car rental services at affordable prices.</p>
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
                <li><span>Nulla nec cursus elit</span></li>
                <li><span>Vivamus ut tellus mi</span></li>
                <li><span>Vulputate sed nec</span></li>
                <li><span>Cursus augue hasellus</span></li>
                <li><span>Lacinia ac sapien</span></li>

                </ul>
              </div>
              <div class="col-md-3 footer-item">
                <h4>Additional Pages</h4>
                <ul class="menu-list">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/about">Blog</a></li>
                  <li><a href="/about">FAQ</a></li>
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
                    Copyright © 2025  Mayank Singh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default HomeLayout