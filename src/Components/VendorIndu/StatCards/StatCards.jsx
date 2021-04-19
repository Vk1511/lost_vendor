import React from 'react';
import "./StatCards.css";
import order from './../../../Assets/Images/order.svg';
import cancel from './../../../Assets/Images/cancel.svg';
import monthly from './../../../Assets/Images/monthly.svg';
import Chart from '../Chart/Chart';
import LiveOrders from '../LiveOrders/LiveOrders';
import AllProduct from '../AllProduct/AllProduct';

function StatCards() {
   
    return (
        <>
        <div className="statcards_con_vk">
            <div className="statcard order">
                <h3 className="statcard_title">Today's orders</h3>
                <img src={order} alt="order" className="statcard_img"/>
                <div className="statcard_body">
                    <h1>20</h1>
                </div>
            </div>
            <div className="statcard monthly">
                <h3 className="statcard_title">This Month's Order</h3>
                <img src={monthly} alt="monthly" className="statcard_img"/>
                <div className="statcard_body">
                    <h1>120</h1>
                </div>
            </div>
            <div className="statcard cancel">
                <h3 className="statcard_title">Cancel orders</h3>
                <img src={cancel} alt="cancel" className="statcard_img"/>
                <div className="statcard_body">
                    <h1>6</h1>
                </div>
            </div>
        </div>
        <LiveOrders />
        <Chart />
        <AllProduct />
        </>
    )
}

export default StatCards
