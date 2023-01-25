import React from "react";

const cardData = [
  {
    heading: "Insurance App",
    name: "Verti",
    budget: {
      heading: "Total Budget",
      amount: 20000,
    },
    profitability: {
      heading: "Profitability",
      amount: -2000,
    },
    time: {
      actual: "Actual hours 1hr",
      slip: "100 hours over budget",
    },
  },
  {
    heading: "Insurance App",
    name: "Verti",
    budget: {
      heading: "Total Budget",
      amount: 20000,
    },
    profitability: {
      heading: "Profitability",
      amount: -2000,
    },
    time: {
      actual: "Actual hours 1hr",
      slip: "100 hours over budget",
    },
  },
  {
    heading: "Insurance App",
    name: "Verti",
    budget: {
      heading: "Total Budget",
      amount: 20000,
    },
    profitability: {
      heading: "Profitability",
      amount: -2000,
    },
    time: {
      actual: "Actual hours 1hr",
      slip: "100 hours over budget",
    },
  },
  {
    heading: "Insurance App",
    name: "Verti",
    budget: {
      heading: "Total Budget",
      amount: 20000,
    },
    profitability: {
      heading: "Profitability",
      amount: -2000,
    },
    time: {
      actual: "Actual hours 1hr",
      slip: "100 hours over budget",
    },
  },
];

function ProductCards() {
  return (
    <div className="flex">
      {cardData.map((card) => (
        <div className="block max-w-sm m-4 ml-12 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <div className="flex justify-between">
            <h5 class="text-2xl font-bold tracking-tight text-gray-900">
              {card.heading}
            </h5>
            <img
              class="w-10 h-10 rounded-full"
              src="https://i.pravatar.cc/150?img=3"
              alt="Rounded avatar"
            ></img>
          </div>
          <p className="text-stone-400 pb-4 pt-0">{card.name}</p>
          <div className="flex">
            <p className="text-stone-400">{card.budget.heading}</p>
            <p className="ml-4 text-stone-500">{card.budget.amount}</p>
          </div>
          <div className="flex">
            <p className="text-stone-400">{card.profitability.heading}</p>
            <p className="ml-4 text-stone-500">{card.profitability.amount}</p>
          </div>

          <div className="w-full bg-gray-200 my-4 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full"></div>
          </div>
          <div className="flex justify-between text-stone-500">
            <p>{card.time.actual}</p>
            <p>{card.time.slip}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
