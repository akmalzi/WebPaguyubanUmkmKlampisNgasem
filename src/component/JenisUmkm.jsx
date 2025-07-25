import dataKategori from "../json/dataKategori.json";

const JenisUmkm = () => {
  return (
    <>
      <section>
        <div className="py-20">
          <p className="text-center text-3xl md:text-5xl font-bold">
            Jenis-jenis UMKM
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-10 w-4/5 mx-auto">
          {dataKategori.map((item, index) => (
            <div key={index}>
              <img
                src={item.gambar}
                alt=""
                width={120}
                className="mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
              <p className="font-semibold mt-4">{item.kategori}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default JenisUmkm;
