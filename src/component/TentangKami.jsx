const TentangKami = ({ tentangKami }) => {
  return (
    <section className="h-auto bg-[#94B4C180] px-[30px] md:px-[125px]">
      <div className="my-0 md:my-20 pt-13">
        <p className="text-center text-3xl md:text-5xl font-bold">
          Tentang Kami
        </p>
        <p className="text-center text-md md:text-xl font-semibold mt-4">
          Mengenal Lebih Dekat Paguyuban UMKM Klampis Ngasem
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full pb-20">
        <div className="m-auto md:p-2 bg-amber-200 my-10 md:my-0">
          <img
            src={tentangKami}
            alt="profile"
            className="w-50 md:w-80 my-auto align-center rounded-4xl"
          />
        </div>
        <div className="m-auto">
          <p className="text-xl md:text-3xl font-bold mt-5 md:mt-0">
            Paguyuban UMKM Klampis Ngasem
          </p>
          <p className="text-sm md:text-xl font-normal mt-10">
            Paguyuban UMKM Klampis Ngasem adalah sebuah organisasi atau kelompok
            yang mewadahi Usaha Mikro, Kecil, dan Menengah (UMKM) di daerah
            Klampis Ngasem, Surabaya. Kelompok ini bertujuan untuk mengembangkan
            dan memberdayakan UMKM di wilayah tersebut, terutama yang bergerak
            di bidang makanan dan minuman (food & beverage). Kelurahan Klampis
            Ngasem sendiri dikenal sebagai daerah yang memiliki potensi UMKM
            yang cukup baik di Surabaya. Paguyuban ini berperan penting dalam
            mewujudkan potensi tersebut dengan memberikan wadah dan dukungan
            bagi para pelaku UMKM di wilayahnya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
