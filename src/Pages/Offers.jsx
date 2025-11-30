export default function Offers() {
  return (
    <div
      id="offers"
      className="relative overflow-x-hidden  overflow-y-hidden  flex flex-col items-start px-4 sm:px-6 py-10 sm:py-20 gap-8 max-w-7xl w-full mx-auto"
    >
      <h2
        className="text-4xl xs:text-5xl font-bold px-6 sm:px-2 font-neue-wide"
        style={{ opacity: 1, transform: "none" }}
      >
        Nibiru Offers a Suite…
      </h2>

      <p
        className="max-w-5xl text-sm xxms:text-base sm:text-lg px-6 sm:px-2 font-ethos font-normal"
        style={{ opacity: 1, transform: "none" }}
      >
        of structured products that simplify complex DeFi strategies into easy to use one click vaults for users just starting
        their DeFi journey while enabling advanced DeFi natives with all the complex tools to create their own strategies.
        All of this is tied together with Nibiru VM, an execution layer combining different environments enabling developers
        with different focuses to build seamlessly on one platform.
      </p>

      {/* Background */}
      <div className="absolute h-full w-full flex flex-row items-center gap-0 -left-[600px]">
        {[1, 2, 3].map((_, i) => (
          <img
            key={i}
            src="https://nibiru.fi/_astro/nibiru-offering-bg.tnvit-bY.svg"
            alt=""
          />
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row items-center flex-wrap gap-6 sm:gap-8 w-full justify-center xl:justify-start">

        {/* Card 1 */}
        <OfferCard
          title="Structured Products"
          img="https://nibiru.fi/_astro/structured-products.mCEFVVaR.png"
          desc="All the DeFi building blocks in one place with a focus on compatibility and utilization across the network"
        />

        {/* Card 2 */}
        <OfferCard
          title="Built for Speed"
          img="https://nibiru.fi/_astro/built-for-speed.H-2o_o6I.png"
          desc="Rapid parallel execution with minimal latency even under extreme network demands"
        />

        {/* Card 3 */}
        <OfferCard
          title="Multi VM Base"
          img="https://nibiru.fi/_astro/multi-vm-base.CO13EFlt.png"
          desc="An execution environment for developers, no matter their specialty with tooling for cross chain compatibility built in"
        />

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-4 gap-4 w-full xms:w-[calc(90%-1rem)] xs:w-[calc(50%-1rem)] sm:w-full min-w-[280px] -mt-5 xs:mt-2 sm:mt-6">

        <Stat label="Transactions" value="40.0k TPS" tooltip="High-Performance EVM" />
        <Stat label="Block Time" value="~1.7s" tooltip="Block Times, Instant Finality" />
        <Stat label="dApps" value="100+" tooltip="Projects Building on Nibiru" />
        <Stat label="Contracts" value="2,000+" tooltip="Deployed Contracts on Nibiru" />

      </div>
    </div>
  );
}

/* ----------- Reusable Card Component ----------- */
function OfferCard({ title, img, desc }) {
  return (
    <div
      className="relative w-full xms:w-[calc(90%-1rem)] xxms:w-[calc(70%-1rem)] xs:w-[calc(50%-1rem)]
      xsm:w-[calc(40%-1rem)] sm:w-[calc(60%-1rem)] md:w-[calc(50%-1rem)] lp:w-[calc(40%-1rem)]
      lg:w-[380px] min-w-[280px]"
      style={{ opacity: 1, transform: "none" }}
    >
      <img
        src="https://nibiru.fi/_astro/card-frame.rfShMRuV.svg"
        alt="frame"
        className="w-full h-full object-cover rounded-lg opacity-50 bg-white"
      />
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-start gap-8 sm:gap-12 py-16 sm:py-20 rounded-lg">
        <img
          src={img}
          alt={title}
          className="min-w-24 min-h-24 sm:min-w-28 sm:min-h-28 rounded-full"
        />
        <div className="flex flex-col items-start gap-4 text-center sm:text-left text-dark">
          <h3 className="text-xl sm:text-2xl font-bold font-neue-wide whitespace-nowrap">
            {title}
          </h3>
          <p className="text-sm sm:text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ----------- Stat Component ----------- */
function Stat({ label, value, tooltip }) {
  return (
    <div className="relative group">
      <div
        className="h-full border-2 border-[#04d9d9] py-3 px-5 rounded-lg font-bold text-dark font-neue-wide flex items-center"
        style={{ opacity: 1, transform: "none" }}
      >
        <span className="h-full border-2 border-[#04d9d9] mr-3" />
        <div className="flex flex-row md:flex-col xl:flex-row items-center md:items-start xl:items-center gap-4">
          {label} <span className="whitespace-nowrap text-sm">{value}</span>
        </div>
      </div>

      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 font-bold text-sm  bg-[#101720] text-[#04d9d9] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
        {tooltip}
      </div>
    </div>
  );
}
