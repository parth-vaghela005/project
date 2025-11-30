import { useEffect, useState } from "react";

export default function Ecosystem() {

  const data = [     
    { name: "ABRACADABRA", img: "https://nibiru.fi/_astro/frame-abracadabra.66xhmJyO.png", link: "/ecosystem/apps/abracadabra" },
    { name: "AVALON FINANCE", img: "https://nibiru.fi/_astro/frame-avalon-finance.BWx1hNhE.png", link: "https://www.avalonfinance.xyz/" },
    { name: "LAYERBANK", img: "https://nibiru.fi/_astro/frame-layerbank.CxhCp_Bf.png", link: "/ecosystem/apps/layerbank" },
    { name: "OKU", img: "https://nibiru.fi/_astro/frame-oku.gWf4gnC6.png", link: "https://oku.trade/?inputChain=nibiru" },
    { name: "SAI", img: "https://nibiru.fi/_astro/frame-sai.fAsAlrif.png", link: "/ecosystem/apps/sai" }
  ];

  const [active, setActive] = useState(data[0]);
   const [animate, setAnimate] = useState(false);

  // Trigger animation on active change
  useEffect(() => {
    setAnimate(true);               // start animation
    const timeout = setTimeout(() => setAnimate(false), 1000); // remove after duration
    return () => clearTimeout(timeout);
  }, [active]);


  return (
    <section id="ecosystem" className="bg-[#0B121A] w-full min-h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto px-8 py-20 flex flex-col gap-12">

        {/* TITLE */}
        <h1 className="text-white font-black text-5xl sm:text-6xl md:text-7xl">
          NIBIRU'S <br />
          ECOSYSTEM
        </h1>

        {/* DESKTOP VIEW */}
        <div className="hidden md:grid grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE TEXT */}
          <div className="flex flex-col gap-4">
            {data.map((item, index) => (
              <h2
                key={index}
                onClick={() => setActive(item)}
                className={`
                  cursor-pointer uppercase font-black text-3xl md:text-4xl lg:text-5xl transition
                  ${
                    active.name === item.name
                      ? "text-cyan-400"
                      : "text-gray-500 hover:text-white"
                  }
                `}
              >
                {item.name}
              </h2>
            ))}
          </div>

          {/* RIGHT SIDE IMAGE */}
           <div className="flex justify-end">
        <a href={active.link} target="_blank" rel="noopener noreferrer">
          <img
            src={active.img}
            alt={active.name}
            className={`max-w-[420px] transition-opacity 
              ${animate ? "animate-fade-up animate-duration-1000 animate-ease-in" : ""}`}
          />
        </a>
      </div>

        </div>

        {/* MOBILE VIEW */}
        <div className="flex flex-col md:hidden gap-8">

          <div className="flex flex-col gap-3">
            {data.map((item, index) => (
              <h2
                key={index}
                onClick={() => setActive(item)}
                className={`
                  cursor-pointer uppercase font-black text-2xl transition
                  ${
                    active.name === item.name
                      ? "text-cyan-400"
                      : "text-gray-500 hover:text-white"
                  }
                `}
              >
                {item.name}
              </h2>
            ))}
          </div>

          <a href={active.link} target="_blank" rel="noopener noreferrer">
            <img src={active.img} alt={active.name} className="w-full max-w-md mx-auto" />
          </a>

        </div>
        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex flex-col gap-4 w-full text-white">
            <h4 className="font-semibold font-neue text-lg md:text-2xl">
              Nibiru Hosts a wide variety of ecosystem partners
            </h4>
            <p className="max-w-xl text-gray-400 text-base  font-normal">
              Nibiru has partnered with all of the dApps that make a modern Web3 experience complete with NFT marketplaces, bridges, prediction markets and memecoin launchpads:
            </p>
          </div>

          {/* LOGO SCROLLER */}
          <div className="flex flex-row items-center gap-2 w-full justify-between overflow-x-auto md:overflow-visible">
            {/* Example logos */}
            <div className="flex flex-col items-center gap-2 py-2 pb-4">
              <a href="/ecosystem/apps/element-nft-marketplace" target="_blank" rel="noopener noreferrer">
                <img src="/_astro/element.BNYahXnY.svg" alt="Element Marketplace" />
              </a>
              <span className="w-24 h-8 text-center text-white">Element Marketplace</span>
            </div>
            <div className="flex flex-col items-center gap-2 py-2 pb-4">
              <a href="https://stargate.finance/" target="_blank" rel="noopener noreferrer">
                <img src="/_astro/stargate.DCEf1nYd.svg" alt="Stargate" />
              </a>
              <span className="w-24 h-8 text-center text-white">Stargate</span>
            </div>
             <div className="flex flex-col items-center gap-2 py-2 pb-4">
              <a href="https://stargate.finance/" target="_blank" rel="noopener noreferrer">
                <img src="/_astro/stargate.DCEf1nYd.svg" alt="Stargate" />
              </a>
              <span className="w-24 h-8 text-center text-white">Stargate</span>
            </div>
             <div className="flex flex-col items-center gap-2 py-2 pb-4">
              <a href="https://stargate.finance/" target="_blank" rel="noopener noreferrer">
                <img src="/_astro/stargate.DCEf1nYd.svg" alt="Stargate" />
              </a>
              <span className="w-24 h-8 text-center text-white">Stargate</span>
            </div>
             <div className="flex flex-col items-center gap-2 py-2 pb-4">
              <a href="https://stargate.finance/" target="_blank" rel="noopener noreferrer">
                <img src="/_astro/stargate.DCEf1nYd.svg" alt="Stargate" />
              </a>
              <span className="w-24 h-8 text-center text-white">Stargate</span>
            </div>
             <div className="flex flex-col items-center gap-2 py-2 pb-4">
              <a href="https://stargate.finance/" target="_blank" rel="noopener noreferrer">
                <img src="/_astro/stargate.DCEf1nYd.svg" alt="Stargate" />
              </a>
              <span className="w-24 h-8 text-center text-white">Stargate</span>
            </div>
             <div className="flex flex-col items-center gap-2 py-2 pb-4">
              <a href="https://stargate.finance/" target="_blank" rel="noopener noreferrer">
                <img src="/_astro/stargate.DCEf1nYd.svg" alt="Stargate" />
              </a>
              <span className="w-24 h-8 text-center text-white">Stargate</span>
            </div>
            {/* Add other logos similarly */}
          </div>

          {/* Explore All Apps Button */}
          <div>
            <a
              href="/ecosystem"
              className="font-ethos flex justify-center rounded-md px-6 py-4 transition duration-500 hover:scale-105 hover:cursor-pointer min-h-14 bg-[#17a0bf] text-white min-w-[160px]"
            >
              Explore All Apps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
