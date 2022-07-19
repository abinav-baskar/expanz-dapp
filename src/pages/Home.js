import React from "react";

import { useTimer } from "./useTimer";
import { formatCurrency, formatNumber } from "./helper";

export const NextRebase = () => {
  return useTimer(1800 - (Math.floor(new Date().getTime() / 1000 - 1560) % 1800));
};

const Home = ({ data }) => {
  const RFV_Per = formatNumber((data.treasuryRFV - data.pastRFV) / data.pastRFV, 2);
  const Treasury_Per = formatNumber((data.treasury - data.pastTreasury) / data.pastTreasury, 2);
  const Pair_Per = formatNumber((data.pair - data.pastPair) / data.pastPair, 2);

  const datalist = [
    {
      text: "Market Cap",
      ans: formatCurrency(data.marketPrice * data.circulatingSupply, 2),
    },
    {
      text: "XPANZ Price",
      ans: formatCurrency(data.marketPrice, 4),
    },
    {
      text: "Your Balance",
      ans: formatNumber(data.balance, 2) + " XPANZ", 
    },
    // {
    //   text: "backed liquidity",
    //   ans: (isNaN(data.backedLiquidity) ? "0": formatNumber(data.backedLiquidity, 2)) + "%",
    // },
    {
      text: "Total Supply",
      ans: formatNumber(data.totalSupply, 2),
    },
    {
      text: "Circulating Supply",
      ans: formatNumber(data.circulatingSupply, 2),
    },
    {
      text: "Burned Amount",
      ans: formatNumber(data.burnedAmount, 2),
    },
    // {
    //   text: "next rebase",
    //   ans: NextRebase(),
    // },
    // {
    //   text: "Average XPANZ holding",
    //   ans: formatCurrency(data.averageHolding, 2),
    // },
  ];

  const cardData = [
    {
      title: "XPANZ Price",
      price: formatCurrency(data.marketPrice, 4),
      // per: (data.usd_24h_change < 0 ? "" : "+") + formatNumber(data.usd_24h_change, 2) + "%",
    },
    {
      title: "Market Value Of Treasury Assets",
      price: isNaN(data.treasury) ? "$0.00" : formatCurrency(data.treasury, 2),
      // per: (isNaN(Treasury_Per) ? "0" : Treasury_Per) + "%",
    },
    {
      title: "Liquidity Value",
      price: isNaN(data.pair) ? "$0.00" : formatCurrency(data.pair, 2),
      // per: (isNaN(Pair_Per) ? "0" : Pair_Per) + "%",
    },
    {
      title: "Trust Fund Value",
      price: isNaN(data.treasuryRFV) ? "$0.00" : formatCurrency(data.treasuryRFV, 2),
      // per: (isNaN(RFV_Per) ? "0" : RFV_Per) + "%",
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" bg-dark-400 rounded-xl bg-opacity-50 md:col-span-2">
          <div className="text-center p-4 py-8 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 text-base">
            {datalist.map((val, i) => (
              <div key={i}>
                <p className=" text-lightGray-400 text-sm">
                  {i == 1 ? "" : val.text}
                </p>
                <h6>
                <span className=" text-lightGray-400 text-sm" style={{'color': 'rgba(253, 61, 86)', 'backgroundClip':'text', 'fontWeight':'bold', 'textShadow':'rgba(255, 48, 48, 0.94) 1px 0px 10px', 'fontSize':'1.4rem'}}>{i == 1 ? "XPANZ " : ""}</span> <span className=" text-lightGray-400 text-sm" style={{'fontSize':'1.3rem'}}>{i == 1 ? "  price" : ""}</span>
                
                </h6>
                <p className=" font-bold text-3xl text-primary">{val.ans}</p>
              </div>
            ))}
          </div>
        </div>
        {cardData.map((val, i) => (
          <div className="bg-dark-400 rounded-xl bg-opacity-50   p-8" key={i}>
            <div className="text-center">
              <p className=" text-lightGray-400 text-sm mb-3">
                {val.title}
              </p>
              <p className=" text-2xl font-bold">
                <span className="text-primary">{val.price}</span>{" "}
                <span className="text-xl font-normal"> {val.per}</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


