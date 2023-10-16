import React, { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";

const TableData = ({
  expensesData,
  onEditItem,
  onDeleteItem,
  filterDate,filterText
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const renderData = filteredData ? filteredData : expensesData;

  useEffect(() => {
    if (filterDate && filterText) {
      // Filter data by both date and text
      const filterByText = renderData.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
      });
      const filterByDate = filterByText.filter(item => item.date === filterDate);
     
      setFilteredData(filterByDate);
    } else if (filterDate && (!filterText)) {
      // Only filter by date
      const filterByDate = expensesData.filter(item => item.date === filterDate);
      setFilteredData(filterByDate);
    } else if (filterText && (!filterDate)) {
      // Only filter by text
      const filterByText = expensesData.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
      });
      setFilteredData(filterByText);
    } else {
      // No filters, display full data
      setFilteredData(null);
    }
  }, [filterDate, expensesData, filterText]);
  

  const entriesPerPage = 6;

 

  const totalEntries = filteredData ? filteredData.length : expensesData.length;

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  };

  const handleDeleteData = (id) => {
    setShowDeleteModal(true);
    setDeleteId(id);
  };

  const handleEditData = (id) => {
    onEditItem(id);
  };

  return (
    <>
      <table className="w-full mt-10 border border-[#1b8381]">
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
            <th className="py-4 px-1 border-2 border-black w-[150px]">Date</th>
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
        <tbody>
          {renderData.length > 0 ? (
            renderData.slice(startIndex, endIndex).map((item, index) => {
              return (
                <tr
                  className="text-center border border-[#1b8381]"
                  key={item.id}
                >
                  <td className="py-3 px-1 border-2 border-[#1b8381] w-[50px]">
                    {startIndex + index + 1}
                  </td>
                  <td className="py-3 px-1 border-2 border-[#1b8381] w-[200px]">
                    {item.title}
                  </td>
                  <td className="py-3 px-1 border-2 border-[#1b8381] w-[150px]">
                    {item.selectedCategory}
                  </td>
                  <td className="py-3 px-1 border-2 border-[#1b8381] w-[300px]">
                    {item.description}
                  </td>
                  <td className="py-3 px-1 border-2 border-[#1b8381] w-[150px] ">
                    {formatDate(item.date)}
                  </td>
                  <td className="py-3 px-1 border-2 border-[#1b8381] w-[100px]">
                    {item.expenseAmount}
                  </td>
                  <td className="py-3 px-1 border-2 border-[#1b8381] w-[150px]">
                    {formatDate(item.updatedAt)}
                  </td>
                  <td className="py-3 px-1 border-2 border-[#1b8381] w-[100px] ">
                    <div className="w-full flex gap-2 items-center justify-center">
                      <span
                        className="material-symbols-rounded cursor-pointer text-[#1b8381]"
                        onClick={() => handleEditData(item.id)}
                      >
                        edit_square
                      </span>
                      <span
                        className="material-symbols-rounded cursor-pointer text-red-500"
                        onClick={() => handleDeleteData(item.id)}
                      >
                        delete
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="text-center border border-[#1b8381]">
              <td className="py-6 px-1 border-2 border-[#1b8381]" colSpan="8">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Code */}
      <div className="mt-8 flex justify-center gap-2 pb-[40px]">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            className={`w-[35px] h-[35px] rounded-[50px] border-2 border-[#1b8381] text-[#1b8381] ${
              currentPage === i + 1 ? "bg-[#1b8381] text-white" : ""
            }  `}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          deleteId={deleteId}
          onDeleteItem={onDeleteItem}
        />
      )}
    </>
  );
};

export default TableData;
