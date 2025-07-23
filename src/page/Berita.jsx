import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import HeroSection from "../component/HeroSection.jsx";

import heroImage from "../asset/heroImage.png";
import CardBerita from "../component/CardBerita.jsx";

import dataBerita from "../json/dataBerita.json";
const Berita = () => {
  return (
    <>
      <Navbar />
      <div className="h-auto mx-[30px] md:mx-[125px] mb-21">
        <HeroSection
          heroImage={heroImage}
          title="Berita UMKM"
          subTitle="berita berita umkm klampis ngasem"
        />

        <div className="my-18">
          <p className="font-bold text-2xl md:text-4xl">
            Berita UMKM di Klampis Ngasem
          </p>
          <p className="font-semibold text-xl md:text-xl mt-3">
            berita terbaru tentang UMKM Klampis Ngasem
          </p>
        </div>

        {dataBerita.map((berita, index) => (
          <CardBerita
            key={index}
            gambar={berita.gambar}
            judul={berita.judul}
            tanggal={berita.tanggal}
            penerbit={berita.penerbit}
            link={berita.link}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Berita;
