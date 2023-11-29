import React, { useContext } from 'react'
import { Context } from '../../contextapi/contextapi'
import TaskCard from './TaskCard'

export default function TaskList() {
  const {tasks} = useContext(Context)
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 my-6' data-testid="taskList">
      {tasks?.map((task,index)=>{
        return(
          <TaskCard key={index} task={task} position={index}/>
        )
      })}
    </section>
  )
}
