import Button from "./Button";

const Header = ({title,onToggle,showAddTask}) => {

  return (
    <div className="card__header">
      <h1>{title}</h1>
      <Button color={showAddTask ? '#E33434':'green'} onClick={onToggle}>
        {showAddTask ? 'Close':'Add'}
      </Button>
    </div>
  )
}

Header.defaultProps = {
  title : "Task Traker"
}



export default Header