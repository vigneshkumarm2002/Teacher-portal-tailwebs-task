import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const categories = [
  "Groceries",
  "Utilities",
  "Rent",
  "Transportation",
  "Entertainment",
  "Dining Out",
  "Other",
];

const Form=({
  showForm,
  setshowForm,
  setExpensesData,
  isEdit,
  setIsEdit,
  editData,
  editedData,
}) =>{
  const initialFormValues = {
    title: "",
    description: "",
    selectedCategory: categories[0],
    date: "",
    expenseAmount: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    if (isEdit && editData) {
      setFormValues({
        title: editData.title,
        description: editData.description,
        selectedCategory: editData.selectedCategory,
        date: editData.date,
        expenseAmount: editData.expenseAmount,
      });
    } else {
      setFormValues(initialFormValues);
    }
  }, [isEdit, editData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      editedData(formValues);
    } else {
      const newExpense = {
        id: uuidv4(),
        ...formValues,
        updatedAt: new Date().toISOString().slice(0, 10),
      };
      setExpensesData((prevExpenses) => [...prevExpenses, newExpense]);
    }

    // Clear the form fields
    setFormValues(initialFormValues);
    setshowForm(false);
    setIsEdit(false);
  };
  const handleFormClose = () => {
    setshowForm(false);
    setIsEdit(false);
  };

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[500px] bg-white p-5 rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] " style={{ maxHeight: '85vh', overflowY: 'auto' }}>
            <button
              className="absolute top-2 right-2 p-2"
              onClick={handleFormClose}
            >
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="#1b8381"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>

            <h2 className="text-xl font-semibold mb-4">
              {isEdit ? "Edit Expense" : "Add Expense"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 sm:grid grid-cols-2 gap-4 ">
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-600">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formValues.title}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2 h-[42px]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-600">
                    Category
                  </label>
                  <select
                    id="category"
                    name="selectedCategory" // Change "category" to "selectedCategory"
                    value={formValues.selectedCategory}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2 h-[42px]"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formValues.description}
                  onChange={handleInputChange}
                  maxlength="60"
                  className="w-full border rounded p-2 h-17 sm:h-16 overflow-y-auto resize-none"
                  rows="3"
                />
              </div>

              <div className="mb-4 sm:grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expenseAmount"
                    className="block text-gray-600"
                  >
                    Expense Amount
                  </label>
                  <input
                    type="number"
                    id="expenseAmount"
                    name="expenseAmount"
                    value={formValues.expenseAmount}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2  h-[42px]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-gray-600">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formValues.date}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2 h-[42px]"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-[45px] font-medium sm:font-semibold  text-white mt-2 py-2 px-4 rounded bg-[#1b8381] sm:hover:bg-[#125957] "
              >
                {isEdit ? "Save Changes" : "Add Expense"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
