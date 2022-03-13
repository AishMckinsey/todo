// ADDS BUTTON -> ADD TASK , ADD SUBTASK

import './addButton.css'

const AddButton = (props)=>{
    const setPageValue = (event) =>{
        event.preventDefault();
        if(props.displayString === 'Add Task')
            props.savePageValue(1);
    }
    return (
        <a href="">
            <button type="submit" class = "add-button" onClick={setPageValue}>
                {props.displayString}
            </button>
        </a>
        
    );
}
export default AddButton;