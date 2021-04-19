import React,{useState} from 'react';
import "./Sidebar.css";

function Sidebar({sidebarOpen}) {

    const [selectedMenu,setSelectedmenu] = useState("Dashboard");

    return (
        <div className={`${sidebarOpen ? "sidebar_container" : "de"}`}>
        <div className="sidebar_brand">
           LOST
        </div>
        <div className="sidebar_content">
            <ul>
                <li onClick={() => setSelectedmenu("Dashboard")} className={`${selectedMenu === "Dashboard" ? 'active' : 'deactive'}`}><i className="fa fa-cogs" aria-hidden="true"></i> Dashboard</li>
                <li onClick={() => setSelectedmenu("Orders")} className={`${selectedMenu === "Orders" ? 'active' : 'deactive'}`}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Orders</li>
                <li onClick={() => setSelectedmenu("Wallet")} className={`${selectedMenu === "Wallet" ? 'active' : 'deactive'}`}><i className="fas fa-wallet"></i> Wallet</li>
                <li onClick={() => setSelectedmenu("Product")} className={`${selectedMenu === "Product" ? 'active' : 'deactive'}`}><i className="fa fa-archive" aria-hidden="true"></i> Product</li>
                <li onClick={() => setSelectedmenu("Customers")} className={`${selectedMenu === "Customers" ? 'active' : 'deactive'}`}><i className="fa fa-users" aria-hidden="true"></i> Customers</li>
                <li onClick={() => setSelectedmenu("Account")} className={`${selectedMenu === "Account" ? 'active' : 'deactive'}`}><i className="fa fa-user" aria-hidden="true"></i> Account</li>
            </ul>
        </div>
    </div>
    )
}

export default Sidebar
