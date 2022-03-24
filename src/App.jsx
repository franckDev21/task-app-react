import './scss/main.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      id : 1,
      text : "Learn Docker",
      day : "Feb 10th at 2:40pm",
      reminder : true
    },
    {
      id : 2,
      text : "Learn Nuxt JS",
      day : "Feb 5th at 2:40pm",
      reminder : false
    }
  ])

  const addTask = (task) => {
    setTasks([...tasks,task])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      task => task.id === id ?
      {...task,reminder : !task.reminder} : task)
    )
  }
  
  return (
    <div className="app">
      <div className="card container">
        <Header onToggle={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
        { showAddTask && <AddTask onAdd={addTask}/>}
        <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
