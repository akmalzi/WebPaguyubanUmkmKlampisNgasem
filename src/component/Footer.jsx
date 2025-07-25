import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-4 px-[30px] md:px-[155px] bg-[#547792] text-white py-6 md:py-10">
        <div className="text-sm md:text-2xl font-bold">
          <p>Paguyuban</p>
          <p>UMKM Klampis</p>
          <p>Ngasem</p>
        </div>
        <div className="">
          <p className="font-semibold text-sm md:text-xl mb-2">
            Informasi Kontak
          </p>
          <p className="text-[10px] md:text-xl">Ibu Edwine </p>
          <p className="text-[10px] md:text-xl">088888888888</p>
        </div>
        <div className="">
          <p className="font-semibold text-sm md:text-xl mb-2">Lokasi</p>
          <p className="text-[10px] md:text-xl">
            Jl Klampis Ngasem, Komplek Klampis Ngasem no 123, Surabaya, Jawa
            Timur
          </p>
        </div>
        <div className="ml-auto">
          <img
            src="/image/logo/logoKKN.webp"
            className="w-16 md:w-23"
            alt=""
            loading="lazy"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
