
const TodoNew = (props) => {
    console.log(props);
    const {thisFunc} = props;
    // thisFunc("Ben");
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}
export default TodoNew;