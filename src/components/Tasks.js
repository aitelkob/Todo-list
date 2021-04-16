
import Task from './Task'

const Tasks = ({task,onDelete, onToggle}) => {
    return (
        <>
         {task.map((item) => (
         <Task key = {item.id} task ={item} onDelete = {onDelete} onToggle = {onToggle}/>))}
        </> 
    )
}

export default Tasks
