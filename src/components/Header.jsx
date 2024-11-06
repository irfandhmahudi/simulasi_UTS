//eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";

const Header = ({ username }) => (
  <div className="w-full bg-blue-600 p-4 text-white">
    <h1 className="text-2xl font-bold">Manajemen Inventaris Barang</h1>
    <p>Selamat datang, {username}</p>
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
