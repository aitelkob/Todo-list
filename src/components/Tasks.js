
import Task from './Task'

const Tasks = ({task,onDelete, onToggle}) => {
    return (
        <>
         {task.map((item,index) => (
         <Task 
         key = {index}
         task ={item}
         onDelete = {onDelete}
         onToggle = {onToggle}/>))}
        </> 
    )
}

export default Tasks
