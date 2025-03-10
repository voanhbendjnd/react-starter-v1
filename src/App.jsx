import './components/todo/todo.css';
import ToDoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from "react";

// () => { }


const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Vo anh ben"
    },
    {
      id: 2,
      name:"Anh Ben Say Hi"
    }
  ])
  const djnd = "Ben ten";
  const age = 20;
  const data = {
    address: "Can tho",
    country: "Viet Nam"
  }
  const addNewTodo = (name) => {
    alert(`Call me ${name}`)
  }
  // [key:value]
  //  () = this
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
    <TodoNew thisFunc={addNewTodo}/>
      <ToDoData
        name={djnd}
        age={age}
        data={data}
        todoList = {todoList}
         />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'></img>
      </div>
    </div>
  )
}

export default App
