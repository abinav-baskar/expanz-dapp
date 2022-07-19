import React from "react";
import tick from "../assets/tick2.svg";
import cross from "../assets/cross.svg";
const Competetive = () => {
  const data = [
    {
      feature: "APY",
      XPANZ: "101,034%",
      titano: "102,483.58%",
      libero: "158,893.59%",
      icon: false,
    },
    {
      feature: "Fees",
      XPANZ: "14% / 16%",
      titano: "13% / 18%",
      libero: "15% / 25%",
      icon: false,
    },
    {
      feature: "Automatic Burn",
      XPANZ: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Sustainable Rebasing",
      XPANZ: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Insurance Fund",
      XPANZ: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Auto-Liquidity",
      XPANZ: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Auto-Staking",
      XPANZ: "YES",
      titano: "YES",
      libero: "YES",
      icon: true,
    },
    {
      feature: "Fees Hard Coded",
      XPANZ: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Auto-Staking Hard Coded",
      XPANZ: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Rug-Proof: No Minting Code",
      XPANZ: "YES",
      titano: "No",
      libero: "YES",
      icon: true,
    },
    {
      feature: "Rug-Proof: No Manual",
      XPANZ: "YES",
      titano: "No",
      libero: "NO",
      icon: true,
    },
    {
      feature: "Adjusting",
      XPANZ: "YES",
      titano: "YES",
      libero: "NO",
      icon: true,
    },
    {
      feature: "Rug-Proof: Fixed Rebase Time",
      XPANZ: "YES",
      titano: "YES",
      libero: "YES",
      icon: true,
    },
    {
      feature: "Rug-Proof: Liquidity Locked",
      XPANZ: "YES",
      titano: "YES",
      libero: "YES",
      icon: true,
    },
  ];

  return (
    <div className="py-20">
      <div className="px-8 sm:container">
        <div className="custom-container">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold text-center"
          >
            Competitive Advantages
          </h2>
          <div data-aos="fade-up" style={{ overflowX: "auto" }}>
            <div style={{ minWidth: 800 }}>
              <div className="grid grid-cols-12 mt-10">
                <div className="col-span-4">
                  <p className="text-3xl sm:text-4xl font-bold mb-6">
                    Features
                  </p>
                </div>
                <div className="col-span-8 grid grid-cols-3">
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold mb-6">XPANZ</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold mb-6">
                      Titano
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold mb-6">
                      Libero
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {data.map((val, i) => (
                  <div className="grid grid-cols-12 mb-2 gap-8" key={i}>
                    <div className=" col-span-4">
                      <p className="text-lg font-bold leading-relaxed">
                        {val.feature}
                      </p>
                    </div>
                    <div className="col-span-8 grid grid-cols-3">
                      <div className=" ">
                        <p className=" font-bold leading-relaxed grid grid-flow-col items-center justify-start gap-x-2">
                          {val.icon && (
                            <span>
                              <img
                                src={val.XPANZ === "YES" ? tick : cross}
                                alt=""
                              />
                            </span>
                          )}
                          {val.XPANZ}
                        </p>
                      </div>
                      <div className="">
                        <p className=" font-bold leading-relaxed grid grid-flow-col items-center justify-start gap-x-2">
                          {val.icon && (
                            <span>
                              <img
                                src={val.titano === "YES" ? tick : cross}
                                alt=""
                              />
                            </span>
                          )}
                          <span className="uppercase">{val.titano}</span>
                        </p>
                      </div>
                      <div className="">
                        <p className=" font-bold leading-relaxed grid grid-flow-col items-center justify-start gap-x-2">
                          {val.icon && (
                            <span>
                              <img
                                src={val.libero === "YES" ? tick : cross}
                                alt=""
                              />
                            </span>
                          )}
                          <span className="uppercase">{val.libero}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competetive;
