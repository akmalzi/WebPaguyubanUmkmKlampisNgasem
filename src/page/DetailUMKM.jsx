import Navbar from "../component/Navbar.jsx";
import CardDetailUMKM from "../component/CardDetailUMKM.jsx";
import CardKatalog from "../component/CardKatalogl.jsx";

import { useLocation } from "react-router-dom";

const DetailUMKM = () => {
  const location = useLocation();
  const { namaUMKM, gambar, alamat, pemilik, nomor, katalog } =
    location.state || {};
  console.log("akmal katalog:", JSON.stringify(katalog, null, 2));
  return (
    <>
      <section>
        <Navbar />
        <div className="mx-[30px] md:mx-[125px] h-auto mb-21">
          <div className="text-center my-21 ">
            <p className="font-bold text-4xl">Detail UMKM</p>
            <p className="font-semibold text-xl mt-4">
              Informasi lengkap tentang UMKM Klampis Ngasem
            </p>
          </div>
          <div className="w-9/10 md:w-6/10 bg-[#ecefca] mx-auto md:p-15">
            <CardDetailUMKM
              namaUMKM={namaUMKM}
              gambar={gambar}
              pemilik={pemilik}
              alamat={alamat}
              nomor={nomor}
              katalog={katalog}
            />
          </div>
          <div className="text-center my-21">
            <p className="font-bold text-4xl">Katalog Produk</p>
            <p className="font-semibold text-xl mt-4">
              Penasaran ada produk apa aja? Cek di bawah ya!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-25 w-8/10 md:w-7/10 mx-auto">
            {katalog.map((item, index) => (
              <CardKatalog
                key={index}
                gambar={item.gambar}
                namaProduk={item.nama_produk}
                harga={item.harga}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailUMKM;
