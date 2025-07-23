import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Map from "../component/Map.jsx";
import JenisUmkm from "../component/JenisUmkm.jsx";
import TentangKami from "../component/TentangKami.jsx";

import heroImage from "../asset/heroImage.png";
import kategoriUmkm from "../asset/Frame 1.png";
import HeroSection from "../component/HeroSection.jsx";

const Beranda = () => {
  return (
    <div className="">
      <Navbar />
      <div className="h-auto mx-[30px] md:mx-[125px]">
        <HeroSection
          heroImage={heroImage}
          title="Paguyuban UMKM"
          subTitle="Kami hadir untuk memberdayakan para pelaku UMKM, menjadi bagian dari perubahan yang berdampak dan berkelanjutan."
        />
      </div>
      <TentangKami kategoriUmkm={kategoriUmkm} />
      <JenisUmkm kategoriUmkm={kategoriUmkm} />
      <Map />
      <Footer />
    </div>
  );
};

export default Beranda;
