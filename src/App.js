import "./App.css";
import AddModal from "./components/Modals/AddModal";
import EditModal from "./components/Modals/EditModal";
import TaskList from "./components/Task List/TaskList";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./contextapi/contextapi";
import Header from "./components/Header/Header";
import ClearBtn from "./components/ClearBtn/ClearBtn";
import SortBtn from "./components/SortBtn/SortBtn";

function App() {
  const { setTasks, tasks } = useContext(Context);

  useEffect(() => {
    let tasks = localStorage.getItem("tasks");

    if (tasks?.length > 0) {
      setTasks(JSON.parse(tasks));
    }
  }, [setTasks]);

  return (
    <main className="p-4 sm:p-8 bg-black h-screen">
      <div
        className={`p-2 bg-slate-900 rounded-md border-[1px] border-slate-900 h-full `}
      >
        <Header />
        {tasks?.length === 0 && (
          <p className="text-white bg-green-600 font-semibold text-sm opacity-80 mx-4 rounded-sm px-2 py-1">
            Start managing your day to day tasks in most efficient way by adding
            your first task using + button.
          </p>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <TaskList />
                <div className="flex gap-4 items-center ml-4">
                  <SortBtn />
                  <ClearBtn />
                </div>
              </>
            }
          />
          <Route path="/add" element={<AddModal />} />
          <Route path="/edit" element={<EditModal />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
