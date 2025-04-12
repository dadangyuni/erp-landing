import topLeft from "../assets/images/top-left-ill.svg";
import bottomLeft from "../assets/images/bottom-right-ill.svg";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative isolate px-6 pt-14 lg:px-8 min-h-[55dvh] md:min-h-[80dvh] bg-slate-50/70"
    >
      <div className="absolute inset-x-0 -top-14 -z-10 transform-gpu overflow-hidden">
        <img src={topLeft} alt="Background" className="h-32 md:h-56" />
      </div>
      <div className="absolute right-20 top-10 pt-14 md:pt-32 pb-12">
        <p className="text-center text-sm px-2 md:text-xl tracking-tight sm:text-lg">
          Kelola bisnis Anda lebih mudah dan efisien dengan sistem ERP
          terintegrasi.
        </p>
        <p className="text-center text-sm px-2 md:text-xl tracking-tight sm:text-lg">
          Tingkatkan produktivitas dan ambil keputusan lebih cepat bersama
          solusi ERP terpercaya.
        </p>
      </div>
      <div className="absolute left-20 top-1/3 pt-14 md:pt-32 pb-12">
        <p className="text-center p-2 text-lg md:text-xl tracking-tight sm:text-xl italic">
          "Ide besar dimulai dengan langkah pertama yang berani."
        </p>
      </div>
      <div className="absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden">
        <img src={bottomLeft} alt="Background" className="h-46 md:h-[45dvh]" />
      </div>
    </section>
  );
};
export default HeroSection;
