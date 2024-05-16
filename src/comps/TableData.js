import React, { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import TableHeader from "./TableHeader";

const TableData = ({
  studentData,
  onEditItem,
  onDeleteItem,
  filterDate,
  filterText,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const renderData = filteredData ? filteredData : studentData;

  useEffect(() => {
    if (filterDate && filterText) {
      // Filter data by both date and text
      const filterByText = renderData.filter((item) => {
        return item?.name?.toLowerCase().includes(filterText?.toLowerCase());
      });
      const filterByDate = filterByText.filter(
        (item) => item?.updatedAt === filterDate
      );

      setFilteredData(filterByDate);
    } else if (filterDate && !filterText) {
      // Only filter by date
      const filterByDate = studentData.filter(
        (item) => item?.updatedAt === filterDate
      );
      setFilteredData(filterByDate);
    } else if (filterText && !filterDate) {
      // Only filter by text
      const filterByText = studentData.filter((item) => {
        return item?.name?.toLowerCase().includes(filterText.toLowerCase());
      });
      setFilteredData(filterByText);
    } else {
      // No filters, display full data
      setFilteredData(null);
    }
  }, [filterDate, studentData, filterText]);

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

  const avatar = (name, color) => {
    console.log("col", color);
    return (
      <div
        className={`inline-flex items-center justify-center w-8 h-8 overflow-hidden ${
          color ? color?.bgColor : "bg-red-500/10"
        } rounded-full mr-2`}
      >
        <span
          className={`font-medium text-sm uppercase ${
            color ? color?.textColor : "text-red-500"
          } `}
        >
          {name.charAt(0)}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full md:max-h-[calc(100vh-190px)] md:overflow-y-auto customScroll pb-4">
      <table className="w-full h-full  ">
        <TableHeader />
        <tbody>
          {renderData.length > 0 ? (
            renderData.map((item, index) => {
              return (
                <tr
                  className=" border-2 md:border-0 border-[#00a6fb] "
                  key={item.id}
                >
                  <td
                    data-label="S No"
                    className="py-[10px] pl-4 pr-2  md:border-b border-[#00a6fb]  "
                  >
                    {index + 1}
                  </td>
                  <td
                    data-label="Name"
                    className="py-[10px] px-2  md:border-b border-[#00a6fb]   text-left"
                  >
                    <div className="flex  items-center">
                      {avatar(item?.name, item?.avatarColor)}
                      <div> {item?.name}</div>
                    </div>
                  </td>
                  <td
                    data-label="Subject"
                    className="py-[10px] px-2  md:border-b border-[#00a6fb]  "
                  >
                    {item?.subject}
                  </td>
                  <td
                    data-label="Marks"
                    className="py-[10px] px-2  md:border-b border-[#00a6fb]  "
                  >
                    {item?.marks}
                  </td>
                  <td
                    data-label="Updated At"
                    className="py-[10px] px-2 md:border-b border-[#00a6fb]   "
                  >
                    {formatDate(item?.updatedAt)}
                  </td>
                  <td
                    data-label="Action"
                    className="py-[10px] px-2  md:border-b border-[#00a6fb]  "
                  >
                    <div className="w-full flex gap-2 items-center md:justify-start justify-end">
                      <span
                        className="material-symbols-rounded cursor-pointer text-[#00a6fb]"
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
            <tr className="text-center border-b border-[#00a6fb]">
              <td
                className="py-6 px-1 text-center  md:border-b-2 border-[#00a6fb]"
                colSpan="8"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          deleteId={deleteId}
          onDeleteItem={onDeleteItem}
        />
      )}
    </div>
  );
};

export default TableData;
