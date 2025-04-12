const tiers = [
  {
    name: "Basic",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$5",
    description:
      "Paket yang sempurna jika Anda baru memulai menggunakan produk kami.",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
    ],
    featured: false,
  },
  {
    name: "Business",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$35",
    description:
      "Solusi khusus untuk mendukung operasi Anda yang sedang berkembang.",
    features: [
      "Semuat fitur dari basic",
      "Visualisasi data dalam bentuk grafik",
      "Support 7x24 Jam",
    ],
    featured: true,
  },
  {
    name: "Entrepreneur",
    id: "tier-entrepreneur",
    href: "#",
    priceMonthly: "$100",
    description:
      "Segala yang Anda butuhkan untuk membangun, mengelola, dan meningkatkan skala usaha Anda.",
    features: [
      "Semua fitur dari basic dan business",
      "Export data ke Excel",
      "AI Prediksi penghasilan",
    ],
    featured: false,
  },
];

function classNames(...classes: (string | false | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative isolate px-6 pt-14 lg:px-8 min-h-[30dvh] md:min-h-[40dvh] bg-white text-center"
    >
      <div className="container mx-auto relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl md:text-4xl font-bold tracking-wide text-[var(--color-primary)]">
            Harga
          </h2>
          <p className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Pilih paket yang ideal untuk bisnis Anda.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          Pilih solusi ERP hemat biaya yang dirancang untuk mengoptimalkan alur
          kerja, meningkatkan efisiensi tim, dan mengembangkan bisnis Anda.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60 sm:mx-8 lg:mx-0",
                tier.featured
                  ? "py-16"
                  : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                "relative rounded-3xl p-8 ring-1 ring-gray-900/10"
              )}
            >
              {tier.featured ? (
                <div className="absolute z-10 font-semibold bg-red-500 text-white px-4 py-2 -top-2 -right-2 rounded-full">
                  Populer
                </div>
              ) : null}
              <h3
                id={tier.id}
                className={classNames(
                  "text-[var(--color-primary)]",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-base/7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm/6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex text-left gap-x-2">
                    <i
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-6 w-5 flex-none ti ti-check py-1"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-[var(--color-primary)] text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                Mulai Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
