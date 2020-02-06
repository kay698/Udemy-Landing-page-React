import React, { Component } from "react";
import Logo from "./Media/Logo.png";
import categoryPic from "./Media/categoryPic.svg";
import searchIcon from "./Media/searchIcon.svg";
import shoppingCart from './Media/shoppingCart.svg';
import  './CssFolders/HeaderCss.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} className="udemy-logo" alt="Logo" style = {{width : 100}}/>
        <div className = "category-div">
        <a className="category-section">
          <img
            src={categoryPic}
            className="category-icon"
            alt="category-icon"
          />
          <span className ="category-text">Categories</span>
            </a>  
          
           <div className="menu-items">
                  <p id="main-menu">Development</p>
                  <p id="main-menu">Business</p>
                  <p id="main-menu">Finance and Accounting</p>
                  <p id="main-menu">IT and Software</p>
                  <p id="main-menu">Office Productivity</p>
                  <p id="main-menu">Personal Development</p>
                  <p id="main-menu">Design</p>
                  <p id="main-menu">Marketing</p>
                  <p id="main-menu">Lifestyle</p>
                  <p id="main-menu">Photography</p>
                  <p id="main-menu">Health and Fitness</p>
                  <p id="main-menu">Music</p>
                  <p id="main-menu">Teaching and Academics</p>
            </div>
        </div>

        <div className="header-input-section">
          <input type="text" className="header-input-tag" placeholder = "Search For Anything"/>
          <div className = "search-icon-div">
            <img src={searchIcon} className="search-icon" alt="search-icon" />
          </div>
        </div>

        <a href ="#" className = "business-link header-links">
            Udemy For Business
            <div className="business-hidden-div">
                       <p className="business-hidden-text-paragraph">Get your team access to 3,500+ top <br/> Udemy courses anytime, anywhere</p>
                       <a href="#" className="business-hidden-text-link">Try Udemy for Business</a>
                    </div>
        </a>
        <a href ="#" className = "teach-link header-links">
            Teach On udemy
            <div className="teach-hidden-text">
                       <p className="teach-hidden-text-paragraph">Turn what you know into an opportunity <br/> and reach millions around the world</p>
                        <a href="#" className="teach-hidden-text-link">Learn more</a>
                    </div>
        </a>
        <div className = "cart-sign-log-section">
          <div className = "shopping-cart-div">
             <img src={shoppingCart} className="shopping-cart" alt="shopping-cart" style = {{opacity : 0.4}} />
             <div className="shopping-cart-hidden-div"> 
                    <p className="shopping-cart-hidden-div-para">Cart Is Empty</p>  
                    <a className="#" className="shopping-cart-hidden-div-link">Learn More</a>
                </div>
          </div>
          <a href="#" className="log-in registration-links" >Log in</a>
          <a href="#" className="sign-up registration-links" >Sign up</a>
        </div>

      </div>
    );
  }
}

export default Header;
