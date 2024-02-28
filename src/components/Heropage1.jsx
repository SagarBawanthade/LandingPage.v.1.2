import React from "react";

const Heropage1 = () => {
  return (
    <div id="home">
      <div className="container-flex">
        <div className="container-left">
          <div>
            <h1>Discover Our Impact on </h1>
            <h1 className="header-one">Watchhub </h1>
            <br />
            <br />
            <br />
          </div>

          <div>
            <p>This case study demonstrates how we turned </p>
            <p className="content-purple">$135/week </p>
            <p>into </p>
            <p className="content-purple">$1,500 in sales </p>
            <p>
              using targeted Facebook ads. Without complex SEO or influencer
              marketing, we optimized our campaign for maximum conversions,
              showcasing effective, straightforward advertising strategies.
            </p>{" "}
            <br />
            <br />
            <br />
          </div>
          <div>
            <a href="https://marketinlab.com/facebook-ads-strategy-for-ecommerce/"  rel="noopener noreferrer">
            <button className="btn-purple-rm">Read more</button>
            </a>
          </div>
        </div>
        <div className="container-right">
          <div className="heroimg">
            <img
              className="discover-impact-img"
              src="./Assets/DiscoverImpact.png"
              alt="results"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <div className="container-flex">
        <div className="container-left">
          <div>
            <h1 className="header-two">Are you a Business Owner?</h1>
            <br />
            <br />
            <br />
          </div>
          <div>
            <p className="elevate-content">
              Elevate your business, unleash your potential. Together, let's
              craft the path to success.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div>
            <a href="https://marketinlab.com/contact-us/" target="_blank" rel="noreferrer">
            <button className="btn-purple-lwt">Let's Work Together</button>
            </a>
          </div>
        </div>
        <div className="container-right">
          <div className="xt-t">
          <img src="./Assets/xtimg.png" alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container-flex">
        <div className="container-right">
          <div className="pm">
            <img
              className="pmimg"
              src="./Assets/ProfilePic.png"
              alt="Prathamesh MAne"
            />
          </div>
        </div>
        <div className="container-left">
          <h2>Hi, I am </h2>
          <h2 className="header-purple-h2">Prathamesh Mane</h2>
          <br />
          <br />
          <br />
          <div>
            <p className="elevate-content">
              A seasoned Performance Marketer and WordPress Developer, steering
              the ship as the CEO of MarketingLab. My expertise lies in crafting
              dynamic online strategies and creating robust, user-friendly
              websites to drive your business forward.
            </p>
            <br /><br /><br />
          </div>
          <div>
          <a href="https://marketinlab.com/contact-us/" target="_blank" rel="noreferrer">
            <button className="btn-purple-lwt">Let's Work Together</button></a>
          </div>
        </div>
      </div>
      
      <div></div>
      <br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  );
};

export default Heropage1;
