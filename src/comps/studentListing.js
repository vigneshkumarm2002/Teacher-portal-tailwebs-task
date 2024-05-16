import React from "react";

import { useState } from "react";
import StudentEntryForm from "./studentEntryForm";
import SearchBar from "./Searchbar";
import TableData from "./TableData";
import { useEffect } from "react";
import { useMyContext } from "../context/context";

const StudentListing = () => {
  const { studentData, setStudentData } = useMyContext();

  const [showForm, setshowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, seteditData] = useState(null);

  const [filterText, setFilterText] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const handleSearchInput = (searchText) => {
    setFilterText(searchText);
  };

  useEffect(() => {
    console.log(studentData);
  }, [studentData]);

  const handleFilterDate = (date) => {
    setFilterDate(date);
  };
  // useEffect(() => {
  //   const filterByText = studentData.filter((item) => {
  //     return item.title.toLowerCase().includes(filterText.toLowerCase());
  //   });
  //   setFilteredData(filterByText);
  // }, [studentData, filterText]);

  const handleAddStudentBtn = () => {
    setIsEdit(false);
    setshowForm(true);
  };

  const handleEditItem = (id) => {
    const findData = studentData.find((item) => item.id === id);
    if (findData) {
      seteditData(findData);
      setshowForm(true);
      setIsEdit(true);
    }
  };

  const editedData = (values) => {
    const updatedData = studentData.map((item) => {
      if (item.id === editData.id) {
        return {
          ...item,
          ...values,
        };
      }
      return item;
    });
    setStudentData(updatedData);
    setIsEdit(false);
    seteditData(null);
  };

  const handleDeleteItem = (id) => {
    const updatedData = studentData.filter((item) => {
      return item.id !== id;
    });
    setStudentData(updatedData);
    setIsEdit(false);
    seteditData(null);
  };

  return (
    <div className=" relative   ">
      <div className="max-w-7xl mx-auto  px-6 sm:px-8 ">
        <div className="flex flex-col-reverse sm:flex-row justify-between xs:items-center mt-8 mb-6 gap-5  ">
          <SearchBar
            onSearch={handleSearchInput}
            onFilterDate={handleFilterDate}
          />
          <button
            className="bg-[#00a6fb] text-white font-medium sm:font-semibold h-[40px] py-2 px-5 rounded "
            onClick={handleAddStudentBtn}
          >
            Add Student
          </button>
        </div>
        <StudentEntryForm
          showForm={showForm}
          setshowForm={setshowForm}
          setStudentData={setStudentData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editData={editData}
          editedData={editedData}
        />
        <TableData
          studentData={studentData}
          onEditItem={handleEditItem}
          onDeleteItem={handleDeleteItem}
          filterDate={filterDate}
          filterText={filterText}
        />
      </div>
    </div>
  );
};

export default StudentListing;
