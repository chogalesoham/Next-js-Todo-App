"use client";

import { useEffect, useState } from "react";
import Todo from "./componects/Todo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    dsccription: "",
  });

  //get Todos

  const [todoData, setTodoData] = useState([]);

  const getAllTodos = async () => {
    const Response = await axios("/api");
    setTodoData(Response.data.Todos);
  };

  // delete Todo
  const deleteTodo = async (id) => {
    const response = await axios.delete("/api", {
      params: {
        mongoId: id,
      },
    });
    getAllTodos();
    toast.success(response.data.msg);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const HandalOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((form) => ({ ...form, [name]: value }));
  };

  const HandalSubmit = async (e) => {
    e.preventDefault();

    try {
      // API Code
      //Create Todos
      const respons = await axios.post("/api", formData);
      toast.success(respons.data.msg);
      setFormData({
        title: "",
        dsccription: "",
      });
      getAllTodos();
    } catch (error) {
      toast.error("something went wrong 🚫");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <div className=" flex width-full flex-col gap-10 items-center text-black">
        <h1 className=" text-3xl mt-5 my-5 font-bold text-white">
          ✍️Write Your Todo Here...
        </h1>
        <form
          onSubmit={HandalSubmit}
          className="  lg:w-[50%] w-[90]  flex flex-col gap-8 p-5 border-2 rounded-xl px-10 py-10 border-1"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={HandalOnchange}
            placeholder="Enter Your Todo"
            className=" py-4 px-8 bottom-1 w-full bg-slate-200"
          />
          <textarea
            name="dsccription"
            value={formData.dsccription}
            onChange={HandalOnchange}
            placeholder="Enter Your Message"
            className=" w-full bg-slate-200 py-4 px-8"
          ></textarea>
          <button className=" bg-orange-600 text-white text-lg border-none py-4 px-10">
            Add Todo
          </button>
        </form>
      </div>

      <div className="overflow-x-auto lg:w-[60%] w-[95%] my-10 mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className=" bg-orange-500 text-white text-center">
              <th>ID</th>
              <th>Titel</th>
              <th>dsccription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  id={index}
                  title={item.title}
                  description={item.dsccription}
                  iscomplited={item.isComplit}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  key={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
