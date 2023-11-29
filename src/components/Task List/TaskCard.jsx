import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Context } from "../../contextapi/contextapi";
import { useNavigate } from "react-router";

export default function TaskCard({ task, position }) {
  const {
    tasks,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setSelectedTask,
    setTasks,
  } = useContext(Context);

  const navigate = useNavigate();

  const openEditModal = () => {
    setTitle(tasks[position].title);
    setDescription(tasks[position].description);
    setDueDate(tasks[position].due_date);
    setPriority(tasks[position].priority);
    setSelectedTask(position);
    navigate("/edit");
  };

  const deleteTask = () => {
    tasks.splice(position, 1);
    setTasks([...tasks]);
    localStorage.setItem("tasks",JSON.stringify([...tasks]))
  };

  const updateStatus = () => {
    if (task.status === "Pending") {
      const updatedTask = { ...task, status: "Completed" };
      const updatedTaskArr = tasks.map((task, index) => {
        return index === position ? updatedTask : task;
      });
      setTasks(updatedTaskArr);
      localStorage.setItem("tasks",JSON.stringify(updatedTaskArr))
    } else {
      const updatedTask = { ...task, status: "Pending" };
      const updatedTaskArr = tasks.map((task, index) => {
        return index === position ? updatedTask : task;
      });
      setTasks(updatedTaskArr);
      localStorage.setItem("tasks",JSON.stringify(updatedTaskArr))
    }
  };

  return (
    <div
      className={`flex flex-col ${task.priority === "High" ? "bg-red-500" : task.priority === "Medium" ? "bg-yellow-500" : "bg-green-500"} text-white rounded-md gap-2 px-2 py-4 w-full mx-auto md:mx-0 md:max-w-[350px]`}
      data-testid={`task-${position}`}
    >
      <h3 className="text-2xl font-bold border-b-[1px] border-white pb-2">
        {task.title}
      </h3>
      <p className="h-[90px]">{task.description}</p>
      <p className="text-sm">
        <strong>Due Date </strong>: {task.due_date || "--/--/----"}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" onChange={updateStatus} checked={task.status === "Completed" || ""}/>
          <p
            className={`${
              task.status === "Pending" ? "bg-red-600" : "bg-green-600"
            } font-semibold rounded-md p-1 text-[12px]`}
          >
            {task.status}
          </p>
        </div>
        <div className="flex gap-2">
          <IconContext.Provider value={{ className: "edit-icon" }}>
            <button onClick={openEditModal}>
              <FaRegEdit />
            </button>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "delete-icon" }}>
            <button onClick={deleteTask}>
              <AiFillDelete />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
