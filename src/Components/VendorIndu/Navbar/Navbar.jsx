import React from 'react';
import './Navbar.css';

function Navbar({handleSidebar}) {
    return (
        <div className="nav_container">
           <div className="brand_name">
                <h2><i className="fas fa-bars hamburger" onClick={() => handleSidebar()}></i> Dashboard</h2>
           </div>
           <div className="search_field">
                <i className="fa fa-search serach_icon" aria-hidden="true" />
                <input type="search" placeholder="Search Here..."/>
           </div>
           <div className="icons">
                <i className="fas fa-wallet navicon fa-lg"></i>
                <i className="fa fa-bell navicon fa-lg" aria-hidden="true"></i>
                <i className="fa fa-user navicon fa-lg" aria-hidden="true"></i>
           </div>
        </div>
    )
}

export default Navbar
