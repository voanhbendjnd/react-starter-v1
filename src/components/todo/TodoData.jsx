const ToDoData = (props) => {
  console.log(">>> Check props: ", props)
  const { name, data, age } = props;
    return (
      <div className='todo-data'>
        <div>My name is {name}</div>
        <div>Learning React</div>
        <div>
          {JSON.stringify(props.todoList)}
        </div>
      </div>
    );
}
export default ToDoData;