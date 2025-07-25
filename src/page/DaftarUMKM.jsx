import { useState } from "react";

import Navbar from "../component/Navbar.jsx";
import CardUMKM from "../component/CardUMKM.jsx";

import dataUMKM from "../json/dataUMKM.json";

import heroImage from "../asset/heroImage.webp";
import HeroSection from "../component/HeroSection.jsx";
import Footer from "../component/Footer.jsx";

const DaftarUMKM = () => {
  const [aktifIndex, setAktifIndex] = useState(null);
  const [indexLabel, setIndexLabel] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredUMKM = dataUMKM.filter((value) =>
    value.nama_umkm.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const tombolList = ["Makanan", "Minuman", "Kue", "Kerajinan"];

  return (
    <>
      <Navbar />
      <section className="mx-[30px] md:mx-[125px] h-auto mb-21">
        <HeroSection
          heroImage={heroImage}
          title="Daftar UMKM"
          subTitle="Temukan ragam usaha mikro, kecil, dan menengah yang tumbuh bersama komunitas."
        />
        <div className="text-center my-15 md:my-21">
          <p className="font-bold text-4xl">Daftar UMKM Klampis Ngasem</p>
          <p className="font-semibold text-xl mt-3">
            Yuk Kenali UMKM Klampis Ngasem Lebih Dekat!
          </p>
        </div>
        <div className="h-auto flex">
          <input
            type="search"
            name="cariUMKM"
            id=""
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Cari UMKM...."
            className="border-4 border-[#547792] w-9/10 justify-center m-auto p-3 rounded-2xl text-xl font-semibold"
          />
        </div>
        <div className="w-7/10 mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 my-15 md:my-21">
          {tombolList.map((label, index) => (
            <button
              key={index}
              onClick={() => {
                console.log(`Tombol ${label} diklik`);
                if (aktifIndex === index) {
                  setAktifIndex(null);
                  setIndexLabel("");
                } else {
                  setAktifIndex(index);
                  setIndexLabel(label);
                }
                // setAktifIndex(index === aktifIndex ? null : index);
              }}
              className={`px-5 mx-auto py-2 rounded-[30px] font-semibold transition duration-300 ${
                aktifIndex === index
                  ? "bg-[#547792] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-20">
          {searchKeyword.trim() !== ""
            ? filteredUMKM.map((value, index) => (
                <CardUMKM
                  key={index}
                  namaUMKM={value.nama_umkm}
                  pemilik={value.pemilik}
                  alamat={value.alamat}
                  gambar={value.logo}
                  nomor={value.kontak}
                  katalog={value.katalog}
                />
              ))
            : dataUMKM.map((value, index) => {
                if (indexLabel === "" || value.kategori.includes(indexLabel)) {
                  return (
                    <CardUMKM
                      key={index}
                      namaUMKM={value.nama_umkm}
                      pemilik={value.pemilik}
                      alamat={value.alamat}
                      gambar={value.logo}
                      nomor={value.kontak}
                      katalog={value.katalog}
                    />
                  );
                }
              })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DaftarUMKM;
