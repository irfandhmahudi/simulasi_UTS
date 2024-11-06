// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ItemDetail from "./pages/ItemDetail";
import AddItem from "./pages/AddItem";
import InventoryList from "./pages/InventoryList";
import barangData from "./assets/barang.json";
import PropTypes from "prop-types";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(barangData);
  }, []);

  const addItem = (item) => {
    const newItem = { ...item, id: items.length + 1 };
    setItems([...items, newItem]);
  };

  const username = "John Doe";

  const findItemById = (id) => items.find((item) => item.id === parseInt(id));

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar className="w-64 bg-white shadow-md" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header
            username={username}
            className="bg-blue-600 text-white p-4 shadow-md"
          />

          {/* Main Dashboard Content */}
          <main className="flex-1 p-6 overflow-auto">
            <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
              <Routes>
                <Route
                  path="/"
                  element={
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Ringkasan Stok Total:{" "}
                      <span className="text-blue-600">
                        {items.reduce((acc, item) => acc + item.stock, 0)}
                      </span>
                    </h2>
                  }
                />
                <Route
                  path="/inventory"
                  element={<InventoryList items={items} />}
                />
                <Route
                  path="/item-detail/:id"
                  element={<ItemDetailWrapper findItemById={findItemById} />}
                />
                <Route
                  path="/add-item"
                  element={<AddItem onAddItem={addItem} />}
                />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

const ItemDetailWrapper = ({ findItemById }) => {
  const { id } = useParams();
  const item = findItemById(id);
  return <ItemDetail item={item} />;
};

ItemDetailWrapper.propTypes = {
  findItemById: PropTypes.func.isRequired,
};

export default App;
