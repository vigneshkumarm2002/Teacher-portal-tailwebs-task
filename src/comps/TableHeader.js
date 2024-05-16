import React from "react";

const TableHeader = () => {
  return (
    <thead className="w-full bg-[#00a6fb]  sticky h-[50px]  top-0 z-1 text-left font-medium text-white ">
      <tr>
        <th className="py-2 pl-4 pr-2  w-[6%]">S No</th>
        <th className="py-2 px-2  w-auto">Name</th>
        <th className="py-2 px-2  w-[20%]">Subject</th>
        <th className="py-2 px-2  w-[15%]">Marks</th>
        <th className="py-2 px-2  w-[15%]">Updated At</th>
        <th className="py-2 px-2  w-[10%]">Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
