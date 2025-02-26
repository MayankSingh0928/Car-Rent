import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Link } from 'react-router-dom';
import { InstagramOutlined } from '@ant-design/icons';

function About(){
    return(
        <DefaultLayout>
            <div className="page-heading header-text">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>About Us</h1>
                            <span>Our professional Developers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-heading">
                                <h2>Our team <em>members</em></h2>
                                <span>Suspendisse a ante in neque iaculis lacinia</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team-item">
                                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                                <div class="down-content">
                                    <h4>Mayank Singh</h4>
                                    <span>Founder</span>
                                    <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>

                                    <p style={{textAlign:'left'}}>
                                    <Link to="https://www.instagram.com/mr._mayanksingh/"><InstagramOutlined /><b>    Click to know about me!</b></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team-item">
                            <img src="https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                            <div class="down-content">
                                <h4>Anurag</h4>
                                <span>Chief Marketing Officer</span>
                                <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                                <p style={{textAlign:'left'}}>
                                <Link to="https://www.instagram.com/mr._mayanksingh/"><InstagramOutlined /><b>  Click to know about me!</b></Link>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team-item">
                                <img src="https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{aspectRatio:'10/9'}}/>
                                <div class="down-content">
                                    <h4>Ambar Gupta</h4>
                                    <span>Financial Analyst</span>
                                    <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                                    <p style={{textAlign:'left'}}>
                                        <Link to="https://www.instagram.com/mr._mayanksingh/"><InstagramOutlined /><b>  Click to know about me!</b></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>

    );
};

export default About;