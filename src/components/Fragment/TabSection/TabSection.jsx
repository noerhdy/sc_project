import CardIndex from "@/components/Elements/card/CardIndex";
import React, { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="flex w-full justify-center py-8">
        <h1 className="text-5xl">Looooorem Bro</h1>
      </div>
      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav
          className="-mb-0.5 flex justify-center space-x-8"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-xl whitespace-nowrap ${
              activeTab === 1
                ? "border-zinc-600 font-semibold text-zinc-600"
                : "border-transparent text-gray-500 hover:text-zinc-600"
            } focus:outline-none dark:text-neutral-400 dark:hover:text-zinc-500`}
            id="horizontal-alignment-item-1"
            onClick={() => handleTabClick(1)}
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            Tab 1
          </button>
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-xl whitespace-nowrap ${
              activeTab === 2
                ? "border-zinc-600 font-semibold text-zinc-600"
                : "border-transparent text-gray-500 hover:text-zinc-600"
            } focus:outline-none dark:text-neutral-400 dark:hover:text-zinc-500`}
            id="horizontal-alignment-item-2"
            onClick={() => handleTabClick(2)}
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            Tab 2
          </button>
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-xl whitespace-nowrap ${
              activeTab === 3
                ? "border-zinc-600 font-semibold text-zinc-600"
                : "border-transparent text-gray-500 hover:text-zinc-600"
            } focus:outline-none dark:text-neutral-400 dark:hover:text-zinc-500`}
            id="horizontal-alignment-item-3"
            onClick={() => handleTabClick(3)}
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            Tab 3
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          className={`${activeTab === 1 ? "" : "hidden"}`}
        >
          <p className="text-gray-500 dark:text-neutral-400">
            This is the item's tab body.
          </p>
        </div>
        <div
          id="horizontal-alignment-2"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
          className={`${activeTab === 2 ? "" : "hidden"} flex gap-4 m-4`}
        >
          <CardIndex
            name="Hello"
            imgUrl="./img/2.jpg"
            text="loremlorem lorem lorenm"
          />
        </div>
        <div
          id="horizontal-alignment-3"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-3"
          className={`${activeTab === 3 ? "" : "hidden"} flex gap-4 m-4`}
        ></div>
      </div>
    </>
  );
};

export default TabSection;
