// eslint-disable-next-line
import React, { useState } from "react";
import PropTypes from "prop-types";

const AddItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !category || !stock || !price || stock <= 0 || price <= 0) {
      setMessage("Gagal: Semua informasi barang harus diisi dan valid.");
      return;
    }

    onAddItem({
      name,
      category,
      stock: parseInt(stock),
      price: parseFloat(price),
    });
    setMessage("Berhasil: Barang berhasil ditambahkan!");

    // Reset form
    setName("");
    setCategory("");
    setStock("");
    setPrice("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tambah Barang</h2>

      {message && (
        <p
          className={`mb-4 p-2 rounded ${
            message.startsWith("Gagal")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Barang"
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Kategori"
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stok"
          required
          min="1"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Harga"
          required
          min="1"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

AddItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default AddItem;
