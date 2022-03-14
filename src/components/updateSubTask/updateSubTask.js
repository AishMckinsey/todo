import {useState} from "react";

const UpdateTask = (props) => {

    const [enteredTask, setEnteredTask] = useState(props.selectedTask);

    const submitHandler =(event) =>{
        event.preventDefault();
        props.onUpdateTask(enteredTask);
    }

    const taskHandler = (event) => {
        setEnteredTask(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>UPDATE SUBTASK</label>
                <input value={enteredTask} onChange={taskHandler} type="text"></input>
            </div>
            <button type="submit">SUBMIT</button> 
            <button type="reset"> CANCEL </button> 
        </form>
    );
};

export default UpdateTask;