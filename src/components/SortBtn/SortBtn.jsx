import React, { useContext } from "react";
import { Context } from "../../contextapi/contextapi";

export default function SortBtn() {
  const { tasks, setTasks } = useContext(Context);

  const sortByPriority = (a, b) => {
    if (
      (a.priority === "High" &&
        (b.priority === "Medium" || b.priority === "Low")) ||
      (a.priority === "Medium" && b.priority === "Low")
    ) {
      return -1;
    }

    return 1;
  };

  const sortByStatus = (a, b) => {
    if (a.status === "Completed" && b.status === "Pending") return -1;
    return 1;
  };

  const handleSorting = (e) => {
    let value = e.target.value;
    if (value === "Sort") return;
    if (value === "Priority") {
      const sortedTasks = [...tasks].sort((a, b) => sortByPriority(a, b));
      setTasks(sortedTasks);
    }
    if (value === "Status") {
      const sortedTasks = [...tasks].sort((a, b) => sortByStatus(a, b));
      setTasks(sortedTasks);
    }
    console.log("clicked");
  };
  return (
    <>
      {tasks?.length > 1 && (
        <select
          className="bg-white text-black rounded-md font-semibold p-2 text-sm outline-none border-0"
          onChange={(e) => handleSorting(e)}
        >
          <option>Sort</option>
          <option>Priority</option>
          <option>Status</option>
        </select>
      )}
    </>
  );
}
