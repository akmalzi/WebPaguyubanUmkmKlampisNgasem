const CardDetailUMKM = ({ namaUMKM, alamat, pemilik, gambar, nomor }) => {
  console.log(namaUMKM, alamat, pemilik, gambar, nomor);
  return (
    <>
      <div className="grid grid-cols-2">
        <img src={gambar} alt="Logo UMKM" className="w-25 m-auto md:w-52" />
        <div className="align-center my-auto bg-emerald-200">
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
