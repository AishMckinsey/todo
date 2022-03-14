import {useState} from "react";

const UpdateTask = (props) => {

    const [enteredTask, setEnteredTask] = useState(props.selectedTask);

    const submitHandler =(event) =>{
        event.preventDefault();
        //props.onUpdateTask(enteredTask);
        console.log(props);
        //props.initialTask.task[props.indexTask].subTask[props.indexSubTask] = enteredTask;
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