// eslint-disable-next-line
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const InventoryList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/item-detail/${id}`);
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Daftar Barang</h2>

      <input
        type="text"
        placeholder="Cari berdasarkan nama atau kategori"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama Barang</th>
            <th className="py-2 px-4 border-b">Kategori</th>
            <th className="py-2 px-4 border-b">Stok</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.category}</td>
                <td className="py-2 px-4 border-b">{item.stock}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 text-center text-gray-500">
                Tidak ada barang yang ditemukan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

InventoryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default InventoryList;
