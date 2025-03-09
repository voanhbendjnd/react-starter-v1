import './components/todo/todo.css';
import ToDoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
// () => { }


const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
    <TodoNew/>
      <ToDoData />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'></img>
      </div>
    </div>
  )
}

export default App
