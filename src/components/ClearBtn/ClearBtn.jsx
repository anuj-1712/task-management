import React, { useContext } from 'react'
import { Context } from '../../contextapi/contextapi';

export default function ClearBtn() {
    const {tasks,setTasks} = useContext(Context)
  return (
    <>
     {tasks?.length > 1 && (
          <button
            className="bg-white text-black h-[40px] font-semibold px-2 rounded-md ml-4"
            onClick={() => {
              setTasks([]);
              localStorage.clear();
            }}
          >
            Clear
          </button>
        )} 
    </>
  )
}
