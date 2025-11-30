import React, { useState } from "react";

const AppDemo = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const wallets = [
    { title: "Metamask", light: "https://nibiru.fi/_astro/metamask.DDHI-IYV.svg", dark: "/_astro/metamask.DDHI-IYV.svg" },
    { title: "WalletConnect", light: "https://nibiru.fi/_astro/metamask.DDHI-IYV.svg", dark: "/_astro/wallet-connect.BY591k38.svg" },
    { title: "Coinbase", light: "/_astro/coinbase.CwBJXf4T.svg", dark: "/_astro/coinbase.CwBJXf4T.svg" },
    { title: "Keplr", light: "/_astro/keplr.BamDLtIx.svg", dark: "/_astro/keplr.BamDLtIx.svg" },
    { title: "Leap", light: "/_astro/leap.CpWHLBee.svg", dark: "/_astro/leap.CpWHLBee.svg" },
    { title: "Google", light: "/_astro/light-google.CaBRlLOP.svg", dark: "/_astro/dark-google.DXdzXsFw.svg" },
    { title: "X", light: "/_astro/light-x.C8sK3Ll9.svg", dark: "/_astro/dark-x.CeCWgKqF.svg" },
    { title: "Apple", light: "/_astro/light-apple.nzxmp9R9.svg", dark: "/_astro/dark-apple.D812Z1JR.svg" },
    { title: "Discord", light: "/_astro/light-discord.BhPsUfo2.svg", dark: "/_astro/dark-discord.DbKVXQCh.svg" },
    { title: "Facebook", light: "/_astro/light-facebook.BZueU_hL.svg", dark: "/_astro/dark-facebook.nUMFRqD2.svg" },
  ];

  const features = [
    {
      title: "Liquid Staking",
      description: "Stake NIBI to earn yield and get liquid tokens usable across EVM and Wasm dApps.",
      img: "https://nibiru.fi/_astro/web-app-portfolio.b8UXbvvC.png",
      link: "https://app.nibiru.fi/stake",
      color: "text-Sage",
    },
    {
      title: "Bridge Assets",
      description: "Transfer tokens easily across EVM, Wasm, and IBC chains via LayerZero-powered bridging.",
      img: "https://nibiru.fi/_astro/web-app-portfolio.b8UXbvvC.png",
      link: "https://app.nibiru.fi/bridge",
      color: "text-Sage",
    },
    {
      title: "View and Send Money",
      description: "View balances, send tokens, and wrap assets for use across Nibiru’s EVM and Wasm apps.",
      img: "https://nibiru.fi/_astro/web-app-portfolio.b8UXbvvC.png",
      link: "https://app.nibiru.fi/portfolio",
      color: "text-neo-blue",
    },
  ];

  return (
    <div id="app-demo" className="flex flex-col items-start w-full max-w-7xl mx-auto px-4 py-10 md:py-20 gap-6">
      <h2 className="text-4xl sm:text-5xl font-bold font-neue-wide" style={{ opacity: 1, transform: "none" }}>
        Our App is User Friendly
      </h2>

      {/* Wallets Section */}
      <div className="flex flex-col xl:flex-row items-start xl:items-center gap-3 w-full" style={{ opacity: 1 }}>
        <h3 className="text-base font-semibold font-neue-wide">Supported Wallets and Logins:</h3>
        <div className="flex flex-wrap gap-1.5">
          {wallets.map((wallet) => (
            <div
              key={wallet.title}
              className="border border-neo-blue rounded-2xl py-1 px-6 hover:shadow-lg transition"
              title={wallet.title}
            >
              <img src={wallet.light} alt={`${wallet.title} logo-light`} className="flex dark:hidden h-4 w-4 sm:h-6 sm:w-6" />
              <img src={wallet.dark} alt={`${wallet.title} logo-dark`} className="hidden dark:flex h-4 w-4 sm:h-6 sm:w-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="hidden md:flex flex-row md:items-center w-full gap-14 py-10 h-full">
        <div className="w-5/6 lp:w-1/2 h-full" style={{ transform: "none" }}>
          <a
            href="https://app.nibiru.fi/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              src="https://nibiru.fi/_astro/web-app-portfolio.b8UXbvvC.png"
              alt="View and Send Money"
              className="w-full h-full object-cover rounded-xl"
            />
          </a>
        </div>

        <div className="flex flex-col items-start gap-[23px] w-5/6 lp:w-1/2 h-full md:h-[393.383px] md:max-h-[393.383px]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start cursor-pointer hover:scale-105 gap-1.5"
              style={{ opacity: 1, transform: "none" }}
              onClick={() => setActiveFeature(feature.title)}
            >
              <h3
                className={`font-semibold font-neue text-2xl ${
                  activeFeature === feature.title ? "text-[#17a0bf]" : "text-[#a5b6b6]"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base h-12 text-lightGrey2">{feature.description}</p>
            </div>
          ))}
          <div className="w-[200px] rounded- bg-[#17a0bf]" style={{ opacity: 1 }}>
            <a
              className="font-ethos flex justify-center rounded-md px-6 py-4 transition-[filter] duration-500 w-full lp:w-1/2 hover:scale-105 hover:cursor-pointer min-h-14 bg-Main text-gray-50 dark:text-white min-w-[160px]"
              href="https://app.nibiru.fi"
              target="_blank"
            >
              Launch Nibiru App
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Features */}
      <div className="flex md:hidden flex-col items-start w-full gap-8 py-5">
        <div className="flex flex-col items-start gap-10 w-full">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start transition gap-4"
              style={{ opacity: 1, transform: "none" }}
              onClick={() => setActiveFeature(feature.title)}
            >
              <a href={feature.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                <img src={feature.img} alt={feature.title} className="w-full rounded-xl" />
              </a>
              <h3
                className={`font-semibold font-neue-wide text-2xl sm:text-3xl ${
                  activeFeature === feature.title ? "text-[#17a0bf]" : "text-neo-blue"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-dark text-white">{feature.description}</p>
            </div>
          ))}
          <div className="w-full rounded-3xl text-white bg-[#17a0bf]">
            <a
              className="font-ethos flex justify-center bg-[#17a0bf] rounded-md px-6 py-4 transition-[filter] duration-500 w-full hover:scale-105 hover:cursor-pointer min-h-14 bg-Main min-w-[160px]"
              href="https://app.nibiru.fi"
              target="_blank"
            >
              Launch Nibiru App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
