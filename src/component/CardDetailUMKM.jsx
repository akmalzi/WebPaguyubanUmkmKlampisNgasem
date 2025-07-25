const CardDetailUMKM = ({ namaUMKM, alamat, pemilik, gambar, nomor }) => {
  console.log(namaUMKM, alamat, pemilik, gambar, nomor);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-0">
        <img
          src={gambar}
          alt="Logo UMKM"
          className="w-45 m-auto md:w-52 md:mb-0 mb-5"
          loading="lazy"
        />
        <div className="align-center my-auto">
          <p className="text-2xl md:text-3xl font-bold md:font-semibold">
            {namaUMKM}
          </p>
          <p className="text-md md:text-xl font-semibold my-5">{pemilik}</p>
          <p className="text-sm md:text-xl">{alamat}</p>
          <p className="text-sm md:text-xl">{nomor}</p>
        </div>
      </div>
    </>
  );
};

export default CardDetailUMKM;
