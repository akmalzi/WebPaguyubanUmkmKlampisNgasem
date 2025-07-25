const CardKatalog = ({ gambar, namaProduk, harga }) => {
  return (
    <div className="mx-auto rounded-3xl shadow-xl w-auto">
      <img
        src={gambar}
        alt=""
        className="rounded-t-3xl min-w-30 max-w-30 md:min-w-90 md:max-w-30"
        loading="lazy"
      />
      <div className="p-5">
        <p className="text-md md:text-2xl font-bold">{namaProduk}</p>
        <p className="text-sm md:text-xl font-normal mt-5">{harga}</p>
      </div>
    </div>
  );
};

export default CardKatalog;
