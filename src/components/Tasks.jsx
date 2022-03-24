import Task from "./Task";

const Tasks = ({tasks,onDelete,onToggle}) => {

  return <>
    {
      tasks.map(task => <Task onToggle={onToggle} onDeleteTask={onDelete} key={task.id} task={task} />)
    }
  </>
}
export default Tasks