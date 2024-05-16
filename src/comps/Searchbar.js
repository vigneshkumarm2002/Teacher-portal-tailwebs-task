import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function formatDateToYYYYMMDD(date) {
  return format(date, "yyyy-MM-dd");
}

const SearchBar = ({ onSearch, onFilterDate }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
      onFilterDate(formatDateToYYYYMMDD(date));
    }
    // Send an empty string when the date is cleared
  };

  const clearDate = () => {
    setSelectedDate(""); // Send an empty string when the date is cleared
    onFilterDate("");
  };

  return (
    <div className="flex gap-4 flex-col md:flex-row md:items-center">
      <div className="relative w-full  sm:w-[200px] md:w-[280px] text-gray-600">
        <input
          type="search"
          name="search"
          placeholder="Filter by name"
          className=" w-full h-[40px]  px-5 pr-10  rounded-md text-md font-medium border-2 border-[#00a6fb] text-[14px] xs:text-[16px] placeholder-[#00a6fb] outline-none flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
          autoComplete="off"
          value={searchText}
          onChange={handleInputChange}
        />
        <button className="absolute right-[12px] top-[10px]">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#00a6fb"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
            />
          </svg>
        </button>
      </div>

      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Filter by Date"
          dateFormat="dd-MM-yyyy"
          className=" w-[150px] h-[40px]  px-3 font-medium rounded-md border-2 border-[#00a6fb] placeholder-[#00a6fb] text-[14px] xs:text-[16px] text-center text-md outline-none shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer"
        />
        {selectedDate && (
          <button
            className="absolute right-[12px] top-[12px] text-gray-800"
            onClick={clearDate}
          >
            <svg className="w-4 h-4 " fill="none" viewBox="0 0 24 24">
              <path
                stroke="#00a6fb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
