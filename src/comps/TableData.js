import React, { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import TableHeader from "./TableHeader";

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
      <table className="w-full mt-10 ">
        <TableHeader/>
        <tbody>
          {renderData.length > 0 ? (
            renderData.slice(startIndex, endIndex).map((item, index) => {
              return (
                <tr 
                  className="text-center border-2 md:border border-[#1b8381] "
                  key={item.id}
                >
                  <td data-label="S No" className="py-3 px-1  md:border-2 border-[#1b8381]  md:w-[50px]">
                    {startIndex + index + 1}
                  </td>
                  <td data-label="Title" className="py-3 px-1  md:border-2 border-[#1b8381]  md:w-[200px]">
                    {item.title}
                  </td>
                  <td data-label="Category" className="py-3 px-1  md:border-2 border-[#1b8381]  md:w-[150px]">
                    {item.selectedCategory}
                  </td>
                  <td data-label="Description" className="py-3 px-1  md:border-2 border-[#1b8381]  md:w-[300px]">
                    {item.description}
                  </td>
                  <td data-label="Expense Date" className="py-3 px-1 md:border-2 border-[#1b8381]  md:w-[150px] ">
                    {formatDate(item.date)}
                  </td>
                  <td data-label="Amount" className="py-3 px-1 md:border-2 border-[#1b8381]  md:w-[100px]">
                    {item.expenseAmount}
                  </td>
                  <td data-label="Updated At" className="py-3 px-1  md:border-2 border-[#1b8381]  md:w-[150px]">
                    {formatDate(item.updatedAt)}
                  </td>
                  <td data-label="Action" className="py-3 px-1  md:border-2 border-[#1b8381]  md:w-[100px] ">
                    <div className="w-full flex gap-2 items-center justify-end md:justify-center">
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
          <button key={i}
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
