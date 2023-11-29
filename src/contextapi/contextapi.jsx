import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [selectedTask, setSelectedTask] = useState(0);
  
  return (
    <Context.Provider
      value={{
        tasks,
        title,
        description,
        dueDate,
        priority,
        selectedTask,
        setTasks,
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        setSelectedTask,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
