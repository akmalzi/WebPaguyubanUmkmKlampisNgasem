import { Link } from "react-router-dom";

const CardUMKM = ({ namaUMKM, alamat, pemilik, gambar, nomor, katalog }) => {
  // console.log(katalog.gambar);
  return (
    <>
      <Link
        to="/detail"
        state={{ namaUMKM, pemilik, alamat, gambar, nomor, katalog }}
      >
        <div className="grid grid-cols-2 hover:opacity-70">
          <img src={gambar} alt="" className="w-52" loading="lazy" />
          <div className="align-center my-auto p-2">
            <p className="text-[16px] md:text-3xl font-bold">{namaUMKM}</p>
            <p className="text-sm md:text-xl font-semibold my-2 md:my-5 line-clamp-2">
              {pemilik}
            </p>
            <p className="text-sm md:text-xl">{alamat}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardUMKM;
