
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/Add'
 
function App() { 
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Doctors ppointment',
            day: 'Feb 7th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: false,
        }
    ])
    //Add Task
  const addTask = (task) => {
    console.log(task);
  }
      //Delete task
  const deletTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

//  Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task,reminder : !tasks.reminder}:task))
}

  return (
    <div className="container">
      <Header title = {"youssef"}/>
      <Add onAdd = {addTask}/>
      {tasks.length > 0 ? (<Tasks  task = {tasks}
      onDelete = {deletTask} onToggle = {toggleReminder}/>) : ("no task to show")}
    </div>
  );
}

export default App;
