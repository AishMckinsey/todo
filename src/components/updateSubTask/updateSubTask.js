import {useState} from "react";

const UpdateTask = (props) => {

    /* Have to set the value with initial value itself*/
    const [enteredTask, setEnteredTask] = useState("");

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
                <label>ADD SUBTASK</label>
                {/* if I set value here, I am unable to take the input  */}
                <input onClick={taskHandler} type="text"></input>
            </div>
            <button type="submit">SUBMIT</button> 
            <button type="reset"> CANCEL </button> 
        </form>
    );
};

export default UpdateTask;