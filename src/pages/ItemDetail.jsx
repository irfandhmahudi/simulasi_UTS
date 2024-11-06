// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";

const ItemDetail = ({ item }) => (
  <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
    <h2 className="text-2xl font-bold mb-4">Detail Barang</h2>
    {item ? (
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Nama:</span> {item.name}
        </p>
        <p>
          <span className="font-semibold">Kategori:</span> {item.category}
        </p>
        <p>
          <span className="font-semibold">Stok:</span> {item.stock}
        </p>
        <p>
          <span className="font-semibold">Harga:</span> Rp{item.price}
        </p>
      </div>
    ) : (
      <p className="text-gray-500">Pilih barang dari daftar.</p>
    )}
  </div>
);

ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ItemDetail;
