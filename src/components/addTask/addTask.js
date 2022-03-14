
import AddCard from "../addCard/addCard";
const AddTask = (props) => {
    return (
        <AddCard  savePageValue={props.savePageValue} onSaveTask={props.onSaveTask} value={props.value}></AddCard>
    )
};
 
export default AddTask;