import multiply from "../multiply.svg"

const Task = ({task,onDeleteTask,onToggle}) => {

  return <div onDoubleClick={()=>onToggle(task.id)} className={task.reminder ? "card__task card__task--reminder":"card__task"}>
    <h3>{task.text}</h3>
    <p>{task.day}</p>
    <img onClick={() => onDeleteTask(task.id)} src={multiply} width="40px" height="40px" alt="close"/>
  </div>
}

export default Task