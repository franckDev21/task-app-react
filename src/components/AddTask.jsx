import {useState} from "react";

const AddTask = ({ onAdd }) => {

  const [task,setTask] = useState("")
  const [date,setDate] = useState("")
  const [reminder,setReminder] = useState(false)

  function onSubmit(e) {

    e.preventDefault()

    if (!task || !date){
      alert("Please add all field")
      return null
    }

    onAdd({
      id : (new Date()).getTime(),
      text : task,
      day : date,
      reminder : reminder
    })

    setTask("")
    setDate("")
    setReminder(false)

  }

  return <>
    <form  className="card__form" onSubmit={onSubmit}>
      <div className="card__field">
        <label htmlFor="task">Task</label>
        <input value={task} onChange={e => setTask(e.target.value)} type="text" id="task" placeholder="Add task"/>
      </div>
      <div className="card__field">
        <label htmlFor="date">Date & Time</label>
        <input value={date} onChange={e => setDate(e.target.value)} type="text" id="date" placeholder="Add date and time"/>
      </div>
      <div className=" card__field card__field--flex">
        <label htmlFor="reminder">Set reminder</label>
        <input value={reminder} onChange={e => setReminder(e.currentTarget.checked)} type="checkbox" id="reminder" />
      </div>
      <button className="btn btn--full">Save task</button>
    </form>
  </>
}

export  default  AddTask