import React from 'react';
import './Dashboard.css';
import mockOrders from './orderData';
import mockProducts from './productData';
import { Link } from 'react-router-dom';

function Dashboard() {
  const totalProducts = mockProducts.length;
  const totalOrders = mockOrders.length;

  return (
    <div className="outer">
      <h1>Dashboard</h1>
      <hr/>

      <div className="inner">
        <div className="inner-child">
          <h3>No. of Orders</h3>
          <p>{totalOrders}</p>
          <Link to="/orders">
            <button>Manage Orders</button>
          </Link>
        </div>
        <div className="inner-child">
          <h3>No. of Products</h3>
          <p>{totalProducts}</p>
          <Link to="/products">
            <button>Manage Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
