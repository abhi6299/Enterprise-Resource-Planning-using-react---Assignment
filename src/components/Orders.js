import React, { useState } from 'react';
import './Orders.css';
import mockOrders from './orderData';
import Modal from 'react-modal';

function Orders() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleView = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    setSelectedOrder(order);
    setViewModalOpen(true);
  };

  const handleEdit = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    setSelectedOrder(order);
    setEditModalOpen(true);
  };

  const handleDelete = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const handleUpdate = (newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === selectedOrder.id ? { ...order, status: newStatus } : order
      )
    );
    setEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditModalOpen(false);
  };

  return (
    <div className='container'>
      <h1>Orders Management</h1>

      {/*------------------------ View Order Modal -------------------------------------*/}
      <Modal isOpen={isViewModalOpen} onRequestClose={() => setViewModalOpen(false)} 
        contentLabel="View Order Modal" className="modal" >
        <h3>Order Details</h3>
        {selectedOrder && (
          <div>
            <p>Order ID: {selectedOrder.id}</p>
            <p>Customer Name: {selectedOrder.customerName}</p>
            <p>Order Date: {selectedOrder.orderDate}</p>
            <p>Status: {selectedOrder.status}</p>
          </div>
        )}
        <button onClick={() => setViewModalOpen(false)}>Close</button>
      </Modal>

      {/*----------------------- Edit Order Modal-------------------------------------- */}
      <Modal isOpen={isEditModalOpen} onRequestClose={() => setEditModalOpen(false)}
        contentLabel="Edit Order Modal" className="modal" >
        <h3>Edit Order</h3>
        {selectedOrder && (
          <div>
            <p>Order ID: {selectedOrder.id}</p>
            <p>Customer Name: {selectedOrder.customerName}</p>
            <p>Order Date: {selectedOrder.orderDate}</p>
            <label>Status:</label>
            <div className='inputSelect'>
              <label><input onChange={(e) => handleUpdate(e.target.value)} type="radio" name="gender" value = "Pending" checked={selectedOrder.status === "Pending"}/> Pending </label>
              <label><input onChange={(e) => handleUpdate(e.target.value)} type="radio" name="gender" value = "In-transit" checked={selectedOrder.status === "In-transit"}/> In-transit </label>
              <label><input onChange={(e) => handleUpdate(e.target.value)} type="radio" name="gender" value = "Delivered" checked={selectedOrder.status === "Delivered"}/> Delivered </label>
            </div>
          </div>
        )}
        <div className="formButtons">
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      </Modal>

      {/* --------------------------Main UI---------------------------------------- */}
      <div className='outer'>
        <div className='inner'>
          {orders.map((order) => (
            <div className="inner-child" key={order.id}>
              <p><b>Order ID: </b> {order.id}</p>
              <p><b>Customer Name:</b> {order.customerName}</p>
              <p><b>Order Date: </b> {order.orderDate}</p>
              <p><b>Status: </b> {order.status}</p>
              <button className="view-button" onClick={() => handleView(order.id)}>View</button>
              <button className="edit-button" onClick={() => handleEdit(order.id)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(order.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
{/* ------------------------------------------------------------- */}
    </div>
  );
}

export default Orders;
