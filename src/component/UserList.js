"use client";
import React from "react";
import User from "./User";
import axios from "axios";
import { addUser, deleteUsers } from "@/store/slices/userSlices";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleAddUser = async () => {
    try {
      const res = await axios.get("/api/users");
      const name = res.data;
      dispatch(addUser(name));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteAll = () => {
    dispatch(deleteUsers());
  };
  return (
    <div className="container mx-auto px-4 ">
      <div className="mb-6 mt-6">
        <h1 className="block w-full text-center text-gray-900 font-bold text-2xl ">
          Random Users Generator
        </h1>
        <h3 className="text-center text-gray-800 font-semibold text-sm">
          Learn Redux Toolkit with this simple project.
        </h3>
      </div>

      <div className="flex justify-between items-center p-2 mb-2">
        <h1 className="text-xl font-bold text-gray-800">List of Users</h1>
        <div className="bg-green-700 hover:bg-green-900  text-white px-4 py-2 text-sm rounded-md cursor-pointer">
          <button
            onClick={handleAddUser}
            className="font-semibold text-teal-100 text-sm cursor-pointer"
          >
            Add User
          </button>
        </div>
      </div>
      {users.map((user, i) => {
        return <User name={user} id={i} />;
      })}
      <button
        onClick={handleDeleteAll}
        className="font-semibold text-white bg-red-800 rounded-md px-4 py-2 text-sm cursor-pointer mt-4"
      >
        Delete All Users
      </button>
    </div>
  );
};

export default UserList;
