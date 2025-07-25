import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex justify-between text-xl font-bold sticky top-0 bg-white z-10 px-[125px] py-2">
        <div className="text-center my-auto">
          <img
            src="/image/logo/logoPaguyuban.jpg"
            className="w-50 my-auto"
            alt=""
            loading="lazy"
          />
        </div>
        <Link to="/" className="text-center my-auto">
          Beranda
        </Link>
        <Link to="/daftarumkm" className="text-center my-auto">
          Daftar UMKM
        </Link>
        <Link to="/berita" className="text-center my-auto">
          Berita
        </Link>
        <div className="text-center my-auto">
          <img
            src="/image/logo/logoKKN.webp"
            className="w-18 my-auto"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Navbar;
