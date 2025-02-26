import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { PhoneFilled, MailFilled, EnvironmentFilled } from '@ant-design/icons';

function Contact(){
   
  return (
    <DefaultLayout>
    <div className="page-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Contact Us</h1>
            <span>feel free to send us a message now!</span>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-information">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <PhoneFilled  />
              <h4>Phone</h4>
              <p>Call us anytime for inquiries.</p>
              <a href="tel:+91706xxxxxxx">+91 706xxxxxxx</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <MailFilled />
              <h4>Email</h4>
              <p>Send us a message anytime.</p>
              <a href="mailto:mayanksi0928@gmail.com">mayank@gmail.com</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <EnvironmentFilled />
              <h4>Location</h4>
              <p>Rewa, MP</p>
              <a href="https://g.co/kgs/bkuEvgZ">View on Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="callback-form contact-us">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Send us a <em>message</em></h2>
              <span>Suspendisse a ante in neque iaculis lacinia</span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="contact-form">
              <form id="contact" action="" method="get">
                <div class="row">
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject" required=""/>
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
    </div>
    <div
      className="mapouter"
      style={{ position: "relative", textAlign: "right", width: "100%", height: "500px" }}
    >
      <div
        className="gmap_canvas"
        style={{ overflow: "hidden", background: "none!important", width: "100%", height: "500px" }}
      >
        <iframe
          title="Google Map"
          className="gmap_iframe"
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=juet&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: "none" }}
        ></iframe>
        <a href="https://sprunkin.com/">Sprunki</a>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default Contact;
