import React, { Component } from "react";
import newarrow from "./Media/newarrow.png";
import check from "./Media/check.png";
import newclock from "./Media/newclock.png";
import "./CssFolders/Footer.css";

class Footer extends Component {

  render() {
    return (
    <> 
      <div className="footer">
        <div className="foot">
          <img
            src={newarrow}
            className="footer-arrow"
            alt="Logo"
          />
          <div id="footer-text">
            <h5>100,000 online courses</h5>
            <p>Explore a variety of fresh topics </p>
          </div>
        </div>

        <div className="foot">
          <img
            src={check}
            className="footer-check"
            alt="Logo"
          />
          <div id="footer-text">
            <h5>Expert instruction</h5>
            <p>Find the right instructor for you</p>
          </div>
        </div>

        <div className="foot">
          <img
            src={newclock}
            className="footer-arrow"
            alt="Logo"
          />
          <div id="footer-text">
            <h5>Lifetime access</h5>
            <p>Learn on your schedule</p>
          </div>
        </div>


        </div>
        
        <div className = "next-page-links">
            <a>Business</a>
            <a>Design</a>
            <a>Photography</a>
            <a>Development</a>
            <a>Markettig</a>
            <a>IT and Software</a>
            <a>Personal Development</a>

        </div>
      </>
    );
  }
}
export default Footer;
