import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex justify-between py-6 text-2xl font-bold sticky top-0 bg-white z-10 px-[125px]">
        <div className="text-center">Paguyuban UMKM Klampis Ngasem</div>
        <Link to="/" className="text-center">
          Beranda
        </Link>
        <Link to="/daftarumkm" className="text-center">
          Daftar UMKM
        </Link>
        <Link to="/berita" className="text-center">
          Berita
        </Link>
        <Link to="/hubungi" className="text-center">
          Hubungi Kami
        </Link>
      </div>
      <Sidebar />
    </>
  );
};

export default Navbar;
