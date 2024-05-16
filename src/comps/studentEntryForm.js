import { enqueueSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  showForm,
  setshowForm,
  setStudentData,
  isEdit,
  setIsEdit,
  editData,
  editedData,
}) => {
  const initialFormValues = {
    name: "",
    subject: "",
    marks: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
    "gray",
  ];

  const avatarBgColors = {
    red: "bg-red-500/100",
    orange: "bg-orange-500/10",
    yellow: "bg-yellow-500/10",
    green: "bg-green-500/10",
    blue: "bg-blue-500/10",
    indigo: "bg-indigo-500/10",
    purple: "bg-purple-500/10",
    pink: "bg-pink-500/10",
    gray: "bg-gray-500/10",
  };

  const avatarTextColors = {
    red: "text-red-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
    blue: "text-blue-500",
    indigo: "text-indigo-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
    gray: "text-gray-500",
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    if (isEdit && editData) {
      setFormValues({
        name: editData.name,
        subject: editData.subject,
        marks: editData.marks,
        updatedAt: new Date().toISOString().slice(0, 10),
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
    const random = getRandomColor();

    if (isEdit) {
      editedData(formValues);
      enqueueSnackbar("Successfully modified record", {
        variant: "success",
        autoHideDuration: 1500,
        style: {
          backgroundColor: "#00CA60",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
        },
      });
    } else {
      const Student = {
        id: uuidv4(),
        ...formValues,
        updatedAt: new Date().toISOString().slice(0, 10),
        avatarColor: {
          bgColor: avatarBgColors[random],
          textColor: avatarTextColors[random],
        },
      };

      enqueueSnackbar("Successfully added record", {
        variant: "success",
        autoHideDuration: 1500,
        style: {
          backgroundColor: "#00CA60",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
        },
      });
      setStudentData((prevStudent) => [...prevStudent, Student]);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[500px] bg-white p-5 rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] "
            style={{ maxHeight: "85vh", overflowY: "auto" }}
          >
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
                  stroke="#00a6fb"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>

            <h2 className="text-xl font-semibold mb-4">
              {isEdit ? "Edit Student" : "Add Student"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2 h-[42px]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-600">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2 h-[42px]"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Mark" className="block text-gray-600">
                  Marks
                </label>
                <input
                  type="number"
                  id="marks"
                  name="marks"
                  value={formValues.marks}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2  h-[42px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-[45px] font-medium sm:font-semibold  text-white mt-2 py-2 px-4 rounded bg-[#00a6fb]  "
              >
                {isEdit ? "Save Changes" : "Add Student"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
