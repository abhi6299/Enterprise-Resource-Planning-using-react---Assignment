import React, { useState } from 'react';
import './OrdersCalendarView.css';
import initialOrders from './orderData';
import Calendar from 'react-calendar';
import Modal from 'react-modal';

function OrdersCalendarView() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const ordersOnSelectedDate = initialOrders.filter(
      (order) => new Date(order.orderDate).toDateString() === date.toDateString()
    );
    setSelectedOrders(ordersOnSelectedDate);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className='container'>
      <h1>Orders Calendar View</h1>
      <h2>(Try selecting the date on which order is scheduled)</h2>
      {/* -------------------- Calendar ------------------------------ */}
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      {/* --------------------- Orders PopUp --------------------------------- */}
      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose}
        contentLabel="Orders Calendar Modal" className="modal">
        <h3>Orders on {selectedDate.toDateString()}</h3>
        <div>
          {selectedOrders.map((order) => (
            <div key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Customer Name: {order.customerName}</p>
              <p>Status: {order.status}</p>
              <hr />
            </div>
          ))}
        </div>
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </div>
  );
}

export default OrdersCalendarView;
