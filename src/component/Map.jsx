const Map = () => {
  return (
    <>
      <p className="text-center text-3xl md:text-5xl font-bold py-20">
        Lokasi Kami
      </p>
      <section
        className="flex justify-center px-5 lg:px-[72px]
      "
      >
        <iframe
          className="w-7/10 h-[450px] shadow-lg rounded-xl mb-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.312850242755!2d112.766852629185!3d-7.288735549033344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa465c938b7d%3A0xb8e39762e56076a9!2sKlampis%20Ngasem%2C%20Kec.%20Sukolilo%2C%20Surabaya%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1752943764004!5m2!1sid!2sid"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Map;
