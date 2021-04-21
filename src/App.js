
import { useState , useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/Add'
 
function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
    //Add Task
  const addTask =  async(task) => {
    const res = await fetch(`http://localhost:5000/tasks`,{
      method: 'POST',
      headers: 
      {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks,data])
    // const id = Math.floor(Math.random() * 10000)+ 1
    // const NewTask = {id,...task}
    // setTasks([...tasks,NewTask]);
    // console.log(id);
  }
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer);
    }
   
    getTasks()
    },[])
    /// fetche data
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return (data)      
    }
      //Delete task
  const deletTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
  }

//  Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task,reminder : !tasks.reminder}:task))
}

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      { showAddTask && <Add OnAdd = {addTask}/>}
      {tasks.length > 0 ? (<Tasks  task = {tasks}
      onDelete = {deletTask} onToggle = {toggleReminder}/>) : ("no task to show")}
    </div>
  );
}

export default App;
