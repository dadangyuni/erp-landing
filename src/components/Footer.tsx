const Footer = () => {
  return (
    <footer className="bg-white pt-2 pb-0">
      <div className="container mx-auto">
        <div className="px-4 py-2 pb-10 md:py-10 md:pb-16 mx-auto max-w-4xl grid grid-cols-3 md:grid-cols-5 gap-10  md:gap-4">
          <div className="col-span-3 md:col-span-2 md:gap-4">
            <img
              alt="Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600"
              className="h-8 md:h-16 w-auto"
            />
            <div>
              <h2 className="text-base font-bold md:text-lg">ERP Miracle</h2>
              <p className="text-gray-400 text-base">
                Your one-stop solution for all ERP needs.
              </p>
              <p className="text-gray-400 text-base mt-4">
                Jl. Pahlawan No. 123, Jakarta, Indonesia
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-base font-bold md:font-medium mb-2 text-[var(--color-primary)]">
              Navigation
            </h1>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="text-base font-bold md:font-medium mb-2 text-[var(--color-primary)]">
              Support
            </h1>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-black">
                  FAQS
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-black">
                  Live chat
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold md:font-medium mb-2 text-[var(--color-primary)] ">
              Social Media
            </h1>
            <div className="flex items-center gap-3 md:gap-6">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 text-xl hover:text-gray-500"
              >
                <i className="ti ti-brand-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 text-xl hover:text-gray-500"
              >
                <i className="ti ti-brand-x"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 text-xl hover:text-gray-500"
              >
                <i className="ti ti-brand-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white p-4 items-center mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ERP Miracle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
