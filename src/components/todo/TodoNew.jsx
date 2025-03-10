import { useState } from "react";

const TodoNew = (props) => {
    // const valueInput = "";
    const [valueInput, setValueInput] = useState("Djnd")
    console.log(props);
    const {thisFunc} = props;
    // thisFunc("Ben");
    const handleClick = () => {
        console.log(">>> Check valueInput: ", valueInput);
    }
    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
            <div>My text input is = {valueInput}</div>
        </div>
    )
}
export default TodoNew;