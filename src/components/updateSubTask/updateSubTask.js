import {useState} from "react";

const UpdateTask = (props) => {

    const [enteredTask, setEnteredTask] = useState(props.selectedTask);
    //const [initialList, setInitialList] = useState(props.taskList[props.indexTask].subTask[props.indexSubTask]);

    const submitHandler =(event) =>{
        event.preventDefault();
        console.log("hello");
        props.saveNewValue(props.selectedTask);
        props.savePageValue(0);
    }

    const taskHandler = (event) => {
        setEnteredTask(event.target.value);
    }

    const returnToHome = () => {
        props.savePageValue(0);
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>UPDATE SUBTASK</label>
                <input value={enteredTask} onChange={taskHandler} type="text"></input>
            </div>
            <button type="submit">SUBMIT</button> 
            <button type="reset" onClick={returnToHome}> CANCEL </button> 
        </form>
    );
};

export default UpdateTask;