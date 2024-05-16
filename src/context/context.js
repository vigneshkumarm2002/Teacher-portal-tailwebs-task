import React, { createContext, useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const initialStudentData = [
    {
      id: uuidv4(),
      name: "Arjun",
      subject: "Mathematics",
      marks: 85,
      updatedAt: "2023-11-01",
      avatarColor: {
        bgColor: "bg-blue-500/10",
        textColor: "text-blue-500",
      },
    },
    {
      id: uuidv4(),
      name: "Deepika",
      subject: "Physics",
      marks: 90,
      updatedAt: "2023-11-02",
      avatarColor: {
        bgColor: "bg-purple-500/10",
        textColor: "text-purple-500",
      },
    },
    {
      id: uuidv4(),
      name: "Ganesh",
      subject: "Chemistry",
      marks: 75,
      updatedAt: "2023-11-03",
      avatarColor: {
        bgColor: "bg-green-500/10",
        textColor: "text-green-500",
      },
    },
    {
      id: uuidv4(),
      name: "Karthik",
      subject: "English",
      marks: 80,
      updatedAt: "2023-11-04",
      avatarColor: {
        bgColor: "bg-yellow-500/10",
        textColor: "text-yellow-500",
      },
    },
    {
      id: uuidv4(),
      name: "Lakshmi",
      subject: "Computer Science",
      marks: 88,
      updatedAt: "2023-11-05",
      avatarColor: {
        bgColor: "bg-red-500/10",
        textColor: "text-red-500",
      },
    },
    {
      id: uuidv4(),
      name: "Manoj",
      subject: "Mathematics",
      marks: 95,
      updatedAt: "2023-11-06",
      avatarColor: {
        bgColor: "bg-pink-500/10",
        textColor: "text-pink-500",
      },
    },
    {
      id: uuidv4(),
      name: "Nandini",
      subject: "Physics",
      marks: 70,
      updatedAt: "2023-11-07",
      avatarColor: {
        bgColor: "bg-blue-700/10",
        textColor: "text-blue-700",
      },
    },
    {
      id: uuidv4(),
      name: "Prakash",
      subject: "Chemistry",
      marks: 82,
      updatedAt: "2023-11-08",
      avatarColor: {
        bgColor: "bg-green-600/10",
        textColor: "text-green-600",
      },
    },
    {
      id: uuidv4(),
      name: "Rajesh",
      subject: "English",
      marks: 91,
      updatedAt: "2023-11-09",
      avatarColor: {
        bgColor: "bg-yellow-600/10",
        textColor: "text-yellow-600",
      },
    },
    {
      id: uuidv4(),
      name: "Saranya",
      subject: "Computer Science",
      marks: 78,
      updatedAt: "2023-11-10",
      avatarColor: {
        bgColor: "bg-red-600/10",
        textColor: "text-red-600",
      },
    },
    {
      id: uuidv4(),
      name: "Shankar",
      subject: "Mathematics",
      marks: 84,
      updatedAt: "2023-11-11",
      avatarColor: {
        bgColor: "bg-pink-600/10",
        textColor: "text-pink-600",
      },
    },
    {
      id: uuidv4(),
      name: "Sridevi",
      subject: "Physics",
      marks: 92,
      updatedAt: "2023-11-12",
      avatarColor: {
        bgColor: "bg-blue-800/10",
        textColor: "text-blue-800",
      },
    },
    {
      id: uuidv4(),
      name: "Surya",
      subject: "Chemistry",
      marks: 77,
      updatedAt: "2023-11-13",
      avatarColor: {
        bgColor: "bg-green-700/10",
        textColor: "text-green-700",
      },
    },
    {
      id: uuidv4(),
      name: "Vidya",
      subject: "English",
      marks: 86,
      updatedAt: "2023-11-14",
      avatarColor: {
        bgColor: "bg-yellow-700/10",
        textColor: "text-yellow-700",
      },
    },
    {
      id: uuidv4(),
      name: "Vijay",
      subject: "Computer Science",
      marks: 89,
      updatedAt: "2023-11-15",
      avatarColor: {
        bgColor: "bg-red-700/10",
        textColor: "text-red-700",
      },
    },
  ];

  const [studentData, setStudentData] = useState(initialStudentData);
  const [User, setUser] = useState("");

  return (
    <MyContext.Provider value={{ User, setUser, studentData, setStudentData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
