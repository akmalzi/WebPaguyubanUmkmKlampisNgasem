import React from "react";

const JenisUmkm = ({ kategoriUmkm }) => {
  return (
    <>
      <section>
        <div className="py-20">
          <p className="text-center text-3xl md:text-5xl font-bold">
            Jenis-jenis UMKM
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-10 w-4/5 mx-auto">
          <div>
            <img
              src={kategoriUmkm}
              alt=""
              width={120}
              className="mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <p className="font-semibold">Makanan</p>
          </div>
          <div>
            <img
              src={kategoriUmkm}
              alt=""
              width={120}
              className="mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <p className="font-semibold">Minuman</p>
          </div>
          <div>
            <img
              src={kategoriUmkm}
              alt=""
              width={120}
              className="mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <p className="font-semibold">Kue</p>
          </div>
          <div>
            <img
              src={kategoriUmkm}
              alt=""
              width={120}
              className="mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <p className="font-semibold">Kerajinan</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default JenisUmkm;
