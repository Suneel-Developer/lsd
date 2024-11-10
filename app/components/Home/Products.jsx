import React from "react";

const productsdata = [
  {
    image: "/assets/lsd-150-mcg-blotter_online.webp",
    name: "BLOTTER",
    quantity: "150mcg",
  },

  {
    image: "/assets/lsd-10mcg-pellets_online.webp",
    name: "pELLETS",
    quantity: "225mcg",
  },

  {
    image: "/assets/lsd-225mcg-pellets_online.webp",
    name: "pELLETS",
    quantity: "10mcg",
  },
];

const Products = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto pt-20">
      <div>
        <h2 className="text-white text-5xl md:text-[66px] md:leading-[60px] font-normal bowlbyonesc mb-1 text-center md:text-start">
          1S-LSD
        </h2>

        <p className="text-[#717CC0] text-3xl sm:text-4xl font-normal md:ml-4 text-center md:text-start">
          BLOTTER & PELLETS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:px-4 mt-10">
        {productsdata.map((product, index) => (
          <div
            key={index}
            className="flex md:items-end gap-0 md:gap-8 cursor-pointer flex-col md:flex-row"
          >
            <div className="w-full md:w-[192px] transform hover:-translate-y-2 transition duration-300">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pb-6">
              <div className="flex flex-row md:flex-col items-end md:items-start gap-1 flex-wrap mb-4">
                <h2 className="text-white text-[32px] md:text-[22px] leading-[24px] md:leading-[20px] font-normal bowlbyonesc">
                  {product.quantity}
                </h2>

                <p className="text-[#717CC0] text-lg leading-[16px] font-normal">
                  {product.name}
                </p>
              </div>

              <button className="px-3 py-1 flex justify-center items-center text-white font-normal text-[15px] text-center rounded-[30px] bg-[#717cc0] transition-opacity duration-300 hover:opacity-90">
                <span className="mt-1 whitespace-nowrap">Mehr erfahren</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-20 md:px-4">
        <h1 className="text-white text-3xl md:text-[66px] md:leading-[60px] font-normal bowlbyonesc mb-5 md:mb-10">
          DEINE VORTEILE
        </h1>

        <ul className="max-w-[780px] w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <li className="tracking-[0.7px] text-xl md:text-3xl text-white">
            🔬 LaborgeprüftE QUALITÄT
          </li>

          <li className="tracking-[0.7px] text-xl md:text-3xl text-white">
            🚀 Express Versand
          </li>

          <li className="tracking-[0.7px] text-xl md:text-3xl text-white">
          🔒 Sichere Kartenzahlung
          </li>

          <li className="tracking-[0.7px] text-xl md:text-3xl text-white">
            📦 Diskrete Verpackung
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
