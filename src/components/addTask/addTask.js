
import AddCard from "../addCard/addCard";
const AddTask = (props) => {
    return (
        <AddCard  savePageValue={props.savePageValue} onSaveTask={props.onSaveTask} value={"Task"}></AddCard>
    )
};
 
export default AddTask;