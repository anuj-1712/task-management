import React from "react";
import { useContext } from "react";
import { Context } from "../../contextapi/contextapi";
import { useNavigate } from "react-router";

export default function AddModal() {
  const {
    title,
    description,
    dueDate,
    priority,
    tasks,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setTasks,
  } = useContext(Context);
  const navigate = useNavigate();

  const resetToInitialValues = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("High");
    navigate("/");
  };

  const storeTask = () => {
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        ...tasks,
        {
          title: title,
          description: description,
          due_date: dueDate,
          priority: priority,
          status: "Pending",
        },
      ])
    );
  };
  const addTask = () => {
    if (!title) {
      alert("Title field can't be empty");
      return;
    }
    setTasks((arr) => {
      return [
        ...arr,
        {
          title: title,
          description: description,
          due_date: dueDate,
          priority: priority,
          status: "Pending",
        },
      ];
    });
    storeTask();
    resetToInitialValues();
  };
  return (
    <div className="flex flex-col gap-4 rounded-md bg-blue-800 absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[40%] px-4 py-6 w-10/12 max-w-[450px] z-10" data-testid="addModal">
      <h2 className="text-2xl text-white font-serif font-medium text-center">
        Add New Task
      </h2>
      <input
        type="text"
        placeholder="Dentist Appointment"
        className="h-[40px] w-full p-1 outline-none rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="desc . . ."
        className="h-[150px] w-full p-1 outline-none rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="date"
        className="rounded-md h-[35px]"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <div className="flex justify-between items-center w-full">
        <p className="text-white">Priority Level</p>
        <select
          className="h-[30px] rounded-md bg-yellow-600 text-white outline-none hover:cursor-pointer"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div className="flex w-full gap-4 justify-end">
        <button
          className="rounded-lg p-2 text-white font-semibold bg-red-700"
          onClick={resetToInitialValues}
        >
          Cancel
        </button>
        <button
          className="rounded-lg p-2 text-white font-semibold bg-green-700"
          onClick={addTask}
        >
          Add
        </button>
      </div>
    </div>
  );
}
