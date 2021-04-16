import React from 'react'
import {useState} from 'react'

const Add = ({onAdd}) => {
    const [text, setText] = useState('')
    const [Day, setDay] = useState('')
    const [Reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text){
            alert('Please add a task')
            return
        }
        onAdd(text,Day,Reminder)
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <from className = 'add-form' onSubmit = {onSubmit}>
        <div className = 'form-control'>
            <label>Task</label>
            <input type= 'text' placeholder = 'addtask'
            value ={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className = 'form-control '>
            <label>Day & Time</label>
            <input type= 'text' placeholder = 'Day & Time'
            value ={Day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className = 'form-control form-control-check'>
            <label>set Reminder</label>
            <input type= 'checkbox'
            checked = {Reminder}
            value ={Reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type = 'submit' value = 'Save Task' className ='btn btn-block'/>
        </from>
    )
}

export default Add
