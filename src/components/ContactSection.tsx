import contactUs from "../assets/images/illus-contact-us.svg";

const ContactSection = () => {
  return (
    <section id="contact" className="body-font relative bg-white text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="bg-slate-200 p-3 rounded-4xl shadow-lg">
          <div className="bg-white p-8 rounded-3xl md:flex gap-8">
            <div className="block md:flex md:flex-1/3 md:flex-col mb-8 md:mb-0">
              <img
                src={contactUs}
                className="h-[200px] object-cover border border-gray-300 mb-4 rounded-lg shadow-lg bg-[var(--color-primary)]"
                alt="contact-us"
                width={"100%"}
              />
              <h1 className="title-font mb-4 text-2xl font-medium sm:text-3xl">
                Hubungi{" "}
                <span className="text-[var(--color-primary)]">Kami</span>
              </h1>
              <p className="mx-auto text-base">
                Jangan ragu untuk menghubungi kami! Jika Anda memiliki
                pertanyaan, masukan, atau proposal kolaborasi, kami akan senang
                mendengarnya.
              </p>
              <div className="mt-8 w-full flex items-center gap-2">
                <i className="ti ti-mail text-[var(--color-primary)] text-2xl py-2"></i>
                <a
                  href="mailto:example@email.com"
                  className="text-[var(--color-primary)]"
                >
                  erp.miracle@mail.com
                </a>
              </div>
            </div>
            <div className="flex-2/3">
              <div className="flex flex-wrap gap-2">
                <div className="w-full py-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="peer rounded-lg w-full text-black border-3 border-gray-200 bg-white bg-opacity-40 py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-slate-100"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[var(--color-primary)] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                    >
                      Nama Lengkap
                    </label>
                  </div>
                </div>
                <div className="w-full py-2">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="peer w-full rounded-lg text-black border-3 border-gray-200 bg-white bg-opacity-40 py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-slate-100"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[var(--color-primary)] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                    >
                      Alamat Email
                    </label>
                  </div>
                </div>
                <div className="mt-2 w-full py-2">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      className="peer h-32  w-full text-black rounded-lg border-3 border-gray-200 bg-white bg-opacity-40 py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-slate-100"
                      placeholder="Message"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[var(--color-primary)] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                    >
                      Catatan
                    </label>
                  </div>
                </div>
                <div className="w-full py-2">
                  <button className="w-full text-center md:w-auto rounded border-0 bg-[var(--color-primary)] py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                    Kirim!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
