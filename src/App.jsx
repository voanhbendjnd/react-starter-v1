import './components/todo/todo.css';
import ToDoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
// () => { }


const App = () => {
  const djnd = "Ben ten";
  const age = 20;
  const data = {
    address: "Can tho",
    country: "Viet Nam"
  }
  // [key:value]
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
    <TodoNew/>
      <ToDoData
        name={djnd}
        age={age}
        data={data} />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'></img>
      </div>
    </div>
  )
}

export default App
