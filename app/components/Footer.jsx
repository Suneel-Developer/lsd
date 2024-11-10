import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-[#717cc0]">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row gap-14">
        <div className="w-full md:w-[30%] flex flex-col items-center gap-5 md:border-r border-white">
          <Link href="/" className="text-white text-[28px] text-center font-normal bowlbyonesc mb-2">
            Sitemap
          </Link>

          <Link
            href="/cookiedirection"
            className="text-white text-base font-normal text-center transform hover:scale-125 transition duration-500 w-fit"
          >
            Cookie-Richtlinie (EU)
          </Link>
          <Link
            href="/paymentmethods"
            className="text-white text-base font-normal text-center transform hover:scale-125 transition duration-500 w-fit"
          >
            Zahlungsarten
          </Link>
          <Link
            href="/shippingmethods"
            className="text-white text-base font-normal text-center transform hover:scale-125 transition duration-500 w-fit"
          >
            Versandarten
          </Link>
          <Link
            href="/imprint"
            className="text-white text-base font-normal text-center transform hover:scale-125 transition duration-500 w-fit"
          >
            Impressum
          </Link>
        </div>

        <div className="w-full md:w-[70%] md:pt-16">
          <h2 className="text-white text-center md:text-start text-[28px] font-normal bowlbyonesc mb-5">
            Unsere Partner
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-between mb-7 flex-wrap">
            <Image
              src="/assets/DHL_logo.webp"
              alt="DHA Logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-auto md:h-4 m-auto"
            />

            <Image
              src="/assets/visa.webp"
              alt="visa Logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-auto md:h-10 m-auto"
            />

            <Image
              src="/assets/mastercard.webp"
              alt="mastercard Logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-auto md:h-[85px] m-auto"
            />

            <Image
              src="/assets/highappy.webp"
              alt="highappy Logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-auto md:h-[110px] m-auto"
            />

            <Image
              src="/assets/acid-trip.webp"
              alt="acid-trip Logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-auto md:h-20 m-auto"
            />

            <Image
              src="/assets/checmicals.webp"
              alt="checmicals Logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-auto md:h-14 m-auto"
            />
          </div>

          <button className="w-full px-3 py-[10px] text-[#717cc0] font-normal text-base text-center rounded-md bowlbyonesc bg-white transition-opacity duration-300 hover:opacity-90">
            ZUM ONLINESHOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
