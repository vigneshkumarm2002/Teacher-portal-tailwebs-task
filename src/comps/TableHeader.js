import React from 'react'

const TableHeader = () => {
  return (
    <thead className="w-full bg-[#1b8381] text-white rounded-full">
          <tr>
            <th className="py-4 px-1 border-2 border-black w-[50px]">S No</th>
            <th className="py-4 px-1 border-2 border-black w-[200px]">Title</th>
            <th className="py-4 px-1 border-2 border-black w-[150px]">
              Category
            </th>
            <th className="py-4 px-1 border-2 border-black w-[300px]">
              Description
            </th>
            <th className="py-4 px-1 border-2 border-black w-[150px]">Expense Date</th>
            <th className="py-4 px-1 border-2 border-black w-[100px]">
              Amount
            </th>
            <th className="py-4 px-1 border-2 border-black w-[150px]">
              Updated At
            </th>
            <th className="py-4 px-1 border-2 border-black w-[100px]">
              Action
            </th>
          </tr>
        </thead>
  )
}

export default TableHeader