import React from "react";

const BlockParty = () => {
  return (
    <div
      id="block-party"
      className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto py-10 px-4 gap-10 md:gap-16"
    >
      {/* Left Content */}
      <div
        className="flex flex-col items-start justify-center w-full md:w-1/2 gap-6 md:gap-9 md:h-[500px]"
        style={{ opacity: 1, transform: "none" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-neue-wide">
          Nibiru Block Party Campaign
        </h2>

        {/* Light Mode Logos */}
        <div className="hidden dark:flex flex-row items-center gap-5">
          <img
            src="https://nibiru.fi/_astro/merkl-dark.CYdhpzGM.svg"
            alt="Merkl"
            className="h-6"
          />
          <img
            src="https://nibiru.fi/_astro/logo-dark.C4rn8-cZ.svg"
            alt="Nibiru"
            className="h-6"
          />
          <img
            src="https://nibiru.fi/_astro/galxe-dark.DOH0qHW9.svg"
            alt="Galxe"
            className="h-6 -ml-2"
          />
        </div>

   

        <p className="font-ethos font-normal text-base">
          Nibiru Block Party is a points program that rewards users with Aura
          for actively participating in Nibiru’s ecosystem. Nibiru Aura reflects
          each user’s contributions, whether through swaps, liquidity provision,
          lending, or completing quests, and help fuel the network’s growth with
          productive capital.
        </p>

        <a
          className="font-ethos flex justify-center rounded-md px-6 py-4 transition-[filter] duration-500 hidden md:flex hover:scale-105 hover:cursor-pointer min-h-14 bg-Main text-gray-50 dark:text-white min-w-[160px]"
          href="https://app.nibiru.fi/aura"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Block Party
        </a>
      </div>

      {/* Right Image */}
      <a
        href="https://app.nibiru.fi/aura"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-1/2 flex flex-col justify-center md:justify-end md:items-end group"
        style={{ opacity: 1, transform: "none" }}
      >
        <img
          src="https://nibiru.fi/_astro/block-party.FGkKI2vA.png"
          alt="Nibiru Block Party"
          className="max-w-full scale-[115%] pb-4 h-auto max-h-[500px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-125"
        />
        <a
          className="font-ethos flex justify-center rounded-md px-6 py-4 transition-[filter] duration-500 flex md:hidden w-full mx-auto hover:scale-105 hover:cursor-pointer min-h-14 bg-Main text-gray-50 dark:text-white min-w-[unset]"
          href="https://app.nibiru.fi/aura"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Campaign
        </a>
      </a>
    </div>
  );
};

export default BlockParty;
