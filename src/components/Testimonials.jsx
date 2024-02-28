import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="flex-co">
        <h1>TESTIMONIALS</h1><br /><br /><br /><br /><br />
      </div>
      <div className="testimonial-flex-container"> 
        <div className="testimg">
        <img  className="testimg2" src="./Assets/photo2.png" alt="" />
        </div>
        <div className="testimg">
          <img  className="testimg1" src="./Assets/photo1.png" alt="" />
        </div>        
        <div className="testimg">
        <img  className="testimg3" src="./Assets/photo3.png" alt="" />

        </div>
      </div>
      <br /><br /><br />
      <div className="flex-co-t">
      <div className="testimonial-contact">
        <div>
        <p>Let’s connect on a short call with us</p></div>
        <div className="test-b">
          <a href="https://calendly.com/maneprathamesh2020/30min?month=2024-02" target="_blank" rel="noreferrer">
        <button>Book a call now</button>
        </a>
        </div>
      </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
      <div className="test-flex">
        <div className="test-left">
          <div className="testl">
          <div className="test-left-content">
          Unlock Your Business Potential with Marketinlab – Your Partner in Strategic Marketing, Cutting-Edge IT Solutions, and Creative Branding Excellence.
          </div>
          </div>
        </div>
        <div className="test-right">

          <img src="./Assets/testimonialimg1.png" alt="" />
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Testimonials;
