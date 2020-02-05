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

        <a className="category-section">
          <img
            src={categoryPic}
            className="category-icon"
            alt="category-icon"
          />
          <span className ="category-text">Categories</span>
        </a>

        <div className="header-input-section">
          <input type="text" className="header-input-tag" placeholder = "Search For Anything"/>
          <div className = "search-icon-div">
            <img src={searchIcon} className="search-icon" alt="search-icon" />
          </div>
        </div>

        <a href ="#" className = "business-link header-links">
            Udemy For Business
        </a>
        <a href ="#" className = "teach-link header-links">
            Teach On udemy
        </a>
        <div className = "cart-sign-log-section">
          <div className = "shopping-cart-div">
             <img src={shoppingCart} className="shopping-cart" alt="shopping-cart" style = {{opacity : 0.4}} />
          </div>
          <a href="#" className="log-in registration-links" >Log in</a>
          <a href="#" className="sign-up registration-links" >Sign up</a>
        </div>

      </div>
    );
  }
}
export default Header;
