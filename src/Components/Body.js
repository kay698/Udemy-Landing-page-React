import React, { Component } from "react";
import searchIcon from "./Media/searchIcon.svg";
import  './CssFolders/Body.css'

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="body-contents">
        <p className ="body-header">Learning is a lifestyle </p>
        <p className ="body-paragraph">Celebrate lifelong learning. Courses from $11.99. Ends <br></br> Feb. 6.</p>
         <div className = "body-input-section">
            <input type="text" placeholder="what do you want to learn?" className ="body-input-tag"/>
            <div className = "body-search-icon-div">
                <img src={searchIcon} className="search-icon" alt="search-icon" />
            </div>
         </div> 
         </div>  
      </div>
    );
  }
}
export default Body;
