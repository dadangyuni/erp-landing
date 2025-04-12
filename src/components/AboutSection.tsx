import aboutUs1 from "../assets/images/illus-about-us-1.jpg";
import aboutUs3 from "../assets/images/illus-about-us-3.jpg";
import aboutUs4 from "../assets/images/illus-about-us-4.jpg";
import pieChart from "../assets/images/illus-about-pie-chart.svg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative pt-20 pb-12 lg:pt-40 lg:pb-[50px] bg-white"
    >
      <div className="container mx-auto">
        <div className="isolate relative mx-auto p-4 md:px-8 mb-12 md:mb-32">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="mx-auto aspect-1155/678 w-[45rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-40 md:gap-20">
            <div className="relative flex-1/3 text-right">
              <img
                className="h-[250px] md:h-[400px] rounded-2xl shadow-2xl aspect-square object-cover"
                src={aboutUs3}
                width={"auto"}
                height={"auto"}
                alt="about-us"
              />
              <div className="absolute -top-10 -left-10 bg-white rounded-lg p-2 shadow-lg  animate-[float_5s_ease-in-out_infinite]">
                <img
                  className="h-[100px] md:h-[100px] w-auto rounded-sm"
                  src={aboutUs1}
                  alt="about-us"
                />
              </div>
              <div className="absolute -bottom-20 -right-10 bg-white rounded-lg p-2 shadow-lg animate-[float_2s_ease-in-out_infinite]">
                <img
                  className="h-[80px] md:h-[120px] w-auto rounded-sm"
                  src={aboutUs4}
                  alt="about-us"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-2 shadow-lg  animate-[float_4s_ease-in-out_infinite]">
                <img
                  className="h-[60px] md:h-[80px] w-auto rounded-sm"
                  src={pieChart}
                  alt="about-us"
                />
              </div>
            </div>
            <div className="flex-1/2">
              <h2 className="text-base md:text-lg mt-2 text-slate-500">Tentang Kami</h2>
              <h1 className="text-2xl md:text-4xl text-[var(--color-primary)] font-bold tracking-wide">
                Kami adalah tim yang menghadirkan solusi ERP terbaik untuk
                bisnis Anda.
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Kami percaya bahwa setiap bisnis memiliki kebutuhan unik. Oleh
                karena itu, kami menawarkan solusi yang dapat disesuaikan dengan
                kebutuhan spesifik Anda.
              </p>
              <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-4xl">
                Get More Info
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="group border border-gray-300 bg-slate-50 p-4 py-8 rounded-xl hover:bg-[var(--color-primary)] transition duration-300 hover:shadow-[0_0px_45px_rgba(52,152,219,0.55)]">
            <h1 className="text-4xl font-bold group-hover:text-white">05+</h1>
            <p className="text-lg mt-2 text-slate-500 group-hover:text-white">
              Tahun pengalaman
            </p>
          </div>
          <div className="group border border-gray-300 bg-slate-50 p-4 py-8 rounded-xl hover:bg-[var(--color-primary)] transition duration-300 hover:shadow-[0_0px_45px_rgba(52,152,219,0.55)]">
            <h1 className="text-4xl font-bold group-hover:text-white">105+</h1>
            <p className="text-lg mt-2 text-slate-500 group-hover:text-white">
              Pelanggan Aktif
            </p>
          </div>
          <div className="group border border-gray-300 bg-slate-50 p-4 py-8 rounded-xl hover:bg-[var(--color-primary)] transition duration-300 hover:shadow-[0_0px_45px_rgba(52,152,219,0.55)]">
            <h1 className="text-4xl font-bold group-hover:text-white">98%</h1>
            <p className="text-lg mt-2 text-slate-500 group-hover:text-white">
              Tingkat kepuasan support
            </p>
          </div>
          <div className="group border border-gray-300 bg-slate-50 p-4 py-8 rounded-xl hover:bg-[var(--color-primary)] transition duration-300 hover:shadow-[0_0px_45px_rgba(52,152,219,0.55)]">
            <h1 className="text-4xl font-bold group-hover:text-white">4.8/5</h1>
            <p className="text-lg mt-2 text-slate-500 group-hover:text-white">
              Rating dari pengguna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
