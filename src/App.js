import React from "react";
import "./App.css";
// -----------------------------------------------------------
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Orders from "./components/Orders";
import OrdersCalendarView from "./components/OrdersCalendarView";
import { BrowserRouter as Router, Route, NavLink, Routes,} from "react-router-dom";
// ----------------------------------------------------------
function App() {
  return (
    <Router> 
      <div>
        <nav className="nav">
          <h1>ERP System</h1>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active-link" exact="true"> Dashboard </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeclassname="active-link"> Products </NavLink>
            </li>
            <li>
              <NavLink to="/orders" activeclassname="active-link"> Orders </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" activeclassname="active-link"> Calendar </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/calendar" element={<OrdersCalendarView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
