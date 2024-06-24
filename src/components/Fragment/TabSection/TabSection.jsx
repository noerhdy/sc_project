import CardProduct from "@/components/Elements/card/card product/CardProduct";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if screen width is less than 768px
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // 1 item per page on mobile
      } else {
        setItemsPerPage(2); // Example: 3 items per page on larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setCurrentPage(1); // Reset to first page when tab changes
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const cardData = [
    { id: 1, imgUrl: "./img/1.jpg", text: "Text 1", name: "Name 1" },
    { id: 2, imgUrl: "./img/2.jpg", text: "Text 2", name: "Name 2" },
    { id: 3, imgUrl: "./img/3.jpg", text: "Text 3", name: "Name 3" },
    { id: 4, imgUrl: "./img/4.jpg", text: "Text 4", name: "Name 4" },
    { id: 5, imgUrl: "./img/5.jpg", text: "Text 5", name: "Name 5" },
    { id: 6, imgUrl: "./img/6.jpg", text: "Text 6", name: "Name 6" },
    { id: 7, imgUrl: "./img/7.jpg", text: "Text 7", name: "Name 7" },
    { id: 8, imgUrl: "./img/8.jpg", text: "Text 8", name: "Name 8" },
    { id: 9, imgUrl: "./img/9.jpg", text: "Text 9", name: "Name 9" },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = cardData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handleDropdownChange = (value) => {
    setActiveTab(parseInt(value, 10));
    setCurrentPage(1); // Reset to first page when tab changes
  };

  return (
    <>
      <section className="my-20 mx-12">
        <div className="flex w-full justify-center py-8">
          <h1 className="text-5xl">Explore</h1>
        </div>
        <div className="border-b border-gray-200  dark:border-neutral-700">
          {isMobile ? (
            // Dropdown for mobile view
            <div className="flex  justify-center mb-4 ">
              <div className=" w-[120px]">
                <Select
                  onChange={(e) => handleDropdownChange(e.target.value)}
                  className="w-[120px] "
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tabs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Item 1</SelectItem>
                    <SelectItem value="2">Item 2</SelectItem>
                    <SelectItem value="3">Item 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ) : (
            // Tabs for desktop view
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
                Item 1
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
                Item 2
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
                Item 3
              </button>
            </nav>
          )}
        </div>

        {/* Content */}
        <div className="my-6 ">
          <div
            id="horizontal-alignment-1"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-1"
            className={`${
              activeTab === 1 ? "" : "hidden"
            } flex gap-4 justify-center`}
          >
            {paginatedData.map((item) => (
              <CardProduct
                key={item.id}
                imgUrl={item.imgUrl}
                text={item.text}
                name={item.name}
              />
            ))}
          </div>
          <div
            id="horizontal-alignment-2"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-2"
            className={`${
              activeTab === 2 ? "" : "hidden"
            } flex  gap-4 justify-center `}
          >
            {paginatedData.map((item) => (
              <CardProduct
                key={item.id}
                imgUrl={item.imgUrl}
                text={item.text}
                name={item.name}
              />
            ))}
          </div>
          <div
            id="horizontal-alignment-3"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-3"
            className={`${
              activeTab === 3 ? "" : "hidden"
            } flex gap-4 m-4 justify-center `}
          >
            {paginatedData.map((item) => (
              <CardProduct
                key={item.id}
                imgUrl={item.imgUrl}
                text={item.text}
                name={item.name}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center my-4">
          <button
            className="px-4 py-2 mx-2 bg-gray-300 rounded-full disabled:opacity-50"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
          <button
            className="px-4 py-2 mx-2 bg-gray-300 rounded-full disabled:opacity-50"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default TabSection;
