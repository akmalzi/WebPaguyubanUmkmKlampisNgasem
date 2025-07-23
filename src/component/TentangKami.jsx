const TentangKami = ({ kategoriUmkm }) => {
  return (
    <section className="h-auto bg-[#94B4C180] px-[30px] md:px-[125px]">
      <div className="my-20 pt-13">
        <p className="text-center text-3xl md:text-5xl font-bold">
          Tentang Kami
        </p>
        <p className="text-center text-md md:text-xl font-semibold mt-4">
          Mengenal Lebih Dekat Paguyuban UMKM Klampis Ngasem
        </p>
      </div>
      <div className="grid grid-cols-2 h-full pb-20">
        <div className="my-auto mx-auto p-2">
          <img
            src={kategoriUmkm}
            alt="profile"
            className="w-50 md:w-80 my-auto align-center rounded-4xl"
          />
        </div>
        <div className="m-auto">
          <p className="text-xl md:text-3xl font-bold ">
            Paguyuban UMKM Klampis Ngasem
          </p>
          <p className="text-md md:text-xl font-thin mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            commodi animi hic esse maxime, quae ex at omnis soluta atque
            aspernatur, tenetur numquam veniam blanditiis eius magni fugit natus
            necessitatibus quo. Magni aliquid illum quas maxime fuga odit
            maiores voluptatem!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
