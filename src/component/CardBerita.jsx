import React from "react";

const CardBerita = ({ gambar, judul, tanggal, penerbit, link }) => {
  return (
    <>
      <div className="md:flex grid grid-row-2 py-10 rounded-lg h-auto">
        <img
          src={gambar}
          width={400}
          alt="berita umkm klampis"
          loading="lazy"
          className="h-auto object-cover flex-shrink-0 rounded-md"
        />

        <a className="flex-1 min-w-0 p-6 my-auto hover:opacity-70" href={link}>
          <p className="font-bold text-2xl line-clamp-1 break-words">{judul}</p>
          <p className="font-normal text-2xl my-3">{tanggal}</p>
          <p className="font-bold text-xl">{penerbit}</p>
        </a>
      </div>
    </>
  );
};

export default CardBerita;
