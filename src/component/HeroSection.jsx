const HeroSection = ({ heroImage, title, subTitle }) => {
  return (
    <>
      <section className="relative w-full h-auto">
        <img
          src={heroImage}
          alt=""
          className="w-full h-auto object-cover rounded-3xl"
        />

        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <p className="text-2xl mb-3 md:text-6xl font-bold">{title}</p>
          <p className="text-2xl md:text-6xl font-bold">Klampis Ngasem</p>
          <p className="text-[10px] md:text-2xl  max-w-4xl mt-4">{subTitle}</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
