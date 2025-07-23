const CardKatalog = ({ gambar, namaProduk, harga }) => {
  return (
    <div className="mx-auto rounded-3xl shadow-xl">
      <img src={gambar} alt="" className="rounded-t-3xl" />
      <div className="p-5">
        <p className="text-xl md:text-2xl font-bold">{namaProduk}</p>
        <p className="text-md md:text-xl font-normal mt-5">{harga}</p>
      </div>
    </div>
  );
};

export default CardKatalog;
