const ToDoData = (props) => {
  console.log(">>> Check props: ", props)
  const { todoList } = props;
  // index la du lieu nhap vao
  // item = id
    return (
      <div className='todo-data'>
        {todoList.map((item, index) => {
          console.log(">>>>", item, index)
          return (
            <div>
              <div className="todo_item">
                {item.name}
                <button>Delete</button>
              </div>
          </div>);
        })}
        <div>
          {JSON.stringify(props.todoList)}
        </div>
      </div>
    );
}
export default ToDoData;