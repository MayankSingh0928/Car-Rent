import React from 'react';
import { Button, Dropdown, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// import { Color } from 'antd/es/color-picker';
// import { createFromIconfontCN } from '@ant-design/icons';
import { GithubOutlined, InstagramOutlined, LinkedinOutlined  } from '@ant-design/icons';
<head>
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link>
  <link rel="stylesheet" href="assets/css/style.css"></link>

</head>
function DefaultLayout(props){
    const user = JSON.parse(localStorage.getItem('user'))
    // const IconFont = createFromIconfontCN({
    //   scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    // });
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
        <div className="header bs1">
          <Row gutter={16} justify={"center"}>
            <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
                <h1>
                  <b>
                    <Link to="/" style={{ color: "orangered" }}>
                      Cars Rental
                    </Link>
                  </b>
                </h1>
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}
                >
                  <Button>{user.username}</Button>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
        <div className="content">{props.children}</div>
        {/* <div className="footer  align-items-center">
          <hr />
          <div >
            <p>Desinged and Developed By</p>
            <p>Mayank Singh</p>
          </div>
          <div >
            <Space>
              <Link to='https://www.instagram.com/mr._mayanksingh/'><InstagramOutlined /></Link>
              <Link to='https://m.facebook.com/profile.php?id=100020285913175&name=xhp_nt__fb__action__open_user'><IconFont type="icon-facebook" style={{ color: '#1877F2' }} />
              </Link>              
              <Link to='https://github.com/MayankSingh0928'><GithubOutlined /></Link>
              <Link to='https://www.linkedin.com/in/mayank-singh-2097012a5/'><LinkedinOutlined /></Link>
            </Space>
          </div>
          
        </div> */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4 footer-item">
                <h4>Car Rental Website</h4>
                <p>Reliable car rental services at affordable prices.</p>
                <ul className="social-icons">
                  <li rel="nofollow" target="_blank">
                    
                      <Link to="https://www.linkedin.com/in/mayank-singh-2097012a5/">
                        <LinkedinOutlined />
                      </Link>
                    
                  </li>
                  <li>
                    
                      <Link to="https://github.com/MayankSingh0928">
                        <GithubOutlined />
                      </Link>
                    
                  </li>
                  <li>
                   
                    <Link to="https://www.instagram.com/mr._mayanksingh/">
                      <InstagramOutlined />
                    </Link>
                    
                  </li>
                </ul>
              </div>
              <div className="col-md-4 footer-item">
                <h4>Useful Links</h4>
                <ul className="menu-list">
                  <li>
                    <a href="/home2">Car Listings</a>
                  </li>
                  <li>
                    <a href="/">Rental Guide</a>
                  </li>
                  <li>
                    <span>FAQs</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 footer-item">
                <h4>Contact Info</h4>
                <ul className="menu-list">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <span>Terms & Conditions</span>
                  </li>
                  <li>
                    <span>Privacy Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default DefaultLayout