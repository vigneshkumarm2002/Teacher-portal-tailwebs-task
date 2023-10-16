import React from "react";

import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import SearchBar from "./Searchbar";
import Nav from "./Nav";
import TableData from "./TableData";

import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const initialData = [
  {
    id: uuidv4(),
    title: "Grocery Shopping",
    description: "Purchased groceries for the week",
    selectedCategory: "Groceries",
    date: "2023-11-08",
    expenseAmount: 50,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Internet Bill",
    description: "Paid monthly internet bill",
    selectedCategory: "Utilities",
    date: "2023-11-10",
    expenseAmount: 75,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Rent Payment",
    description: "Monthly rent for the apartment",
    selectedCategory: "Rent",
    date: "2023-11-15",
    expenseAmount: 1000,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Gasoline Purchase",
    description: "Filled up the car's gas tank",
    selectedCategory: "Transportation",
    date: "2023-11-20",
    expenseAmount: 40,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Movie Night",
    description: "Bought tickets for a movie night out",
    selectedCategory: "Entertainment",
    date: "2023-11-25",
    expenseAmount: 30,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Dinner at Restaurant",
    description: "Dined out at a local restaurant",
    selectedCategory: "Dining Out",
    date: "2023-11-28",
    expenseAmount: 50,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Online Shopping",
    description: "Purchased miscellaneous items online",
    selectedCategory: "Other",
    date: "2023-11-30",
    expenseAmount: 75,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Metro Pass Renewal",
    description: "Renewed monthly metro pass",
    selectedCategory: "Transportation",
    date: "2023-12-02",
    expenseAmount: 60,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Concert Tickets",
    description: "Purchased tickets for a concert",
    selectedCategory: "Entertainment",
    date: "2023-12-05",
    expenseAmount: 100,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
  {
    id: uuidv4(),
    title: "Electricity Bill",
    description: "Paid monthly electricity bill",
    selectedCategory: "Utilities",
    date: "2023-12-10",
    expenseAmount: 65,
    updatedAt: new Date().toISOString().slice(0, 10),
  },
];

const Expenses = () => {
  const [showForm, setshowForm] = useState(false);
  const [expensesData, setExpensesData] = useState(initialData);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, seteditData] = useState(null);

  const [filterText, setFilterText] = useState("");
  const [filterDate,setFilterDate]=useState("")

  const handleSearchInput = (searchText) => {
    setFilterText(searchText);
  };

  const handleFilterDate=(date)=>{
    setFilterDate(date)
  }
  // useEffect(() => {
  //   const filterByText = expensesData.filter((item) => {
  //     return item.title.toLowerCase().includes(filterText.toLowerCase());
  //   });
  //   setFilteredData(filterByText);
  // }, [expensesData, filterText]);

  const handleAddExpenseBtn = () => {
    setIsEdit(false);
    setshowForm(true);
  };

  const handleEditItem = (id) => {
    const findData = expensesData.find((item) => item.id === id);
    if (findData) {
      seteditData(findData);
      setshowForm(true);
      setIsEdit(true);
    }
  };

  const editedData = (values) => {
    const updatedData = expensesData.map((item) => {
      if (item.id === editData.id) {
        return {
          ...item,
          ...values,
        };
      }
      return item;
    });
    setExpensesData(updatedData);
    setIsEdit(false);
    seteditData(null);
  };

  const handleDeleteItem = (id) => {
    const updatedData = expensesData.filter((item) => {
      return item.id !== id;
    });
    setExpensesData(updatedData);
    setIsEdit(false);
    seteditData(null);
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col-reverse sm:flex-row justify-between xs:items-center mt-20 gap-5 ">
        <SearchBar onSearch={handleSearchInput} onFilterDate={handleFilterDate}/>
        <button
          className="bg-[#1b8381] text-white h-[46px] py-2 px-5 rounded sm:hover:bg-[#125957]"
          onClick={handleAddExpenseBtn}
        >
          Add new expense
        </button>
      </div>
      <ExpenseForm
        showForm={showForm}
        setshowForm={setshowForm}
        setExpensesData={setExpensesData}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        editData={editData}
        editedData={editedData}
      />
      <TableData
        expensesData={expensesData}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
        filterDate={filterDate}
        filterText={filterText}
      />
    </>
  );
};

export default Expenses;
