//eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-60 h-full bg-gray-800 text-white p-4">
    <h2 className="text-xl font-bold mb-6">Menu</h2>
    <ul>
      <li>
        <Link to="/" className="block py-2">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/inventory" className="block py-2">
          Inventory List
        </Link>
      </li>
      <li>
        <Link to="/add-item" className="block py-2">
          Add Item
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
