import {useState} from "react";
import './addCard.css'
const AddCard = (props) => {

    const [enteredItem, setEnteredItem] = useState("");

    const submitHandler = (event) =>{
        event.preventDefault();
        
        let item;
        if(props.value === 'Task'){
            item = {
                task: enteredItem, 
                subTask: [],
            }
            props.savePageValue(0);
        }
        else{
            item = {
                // have to write passed down task 
                // have to write new subtask
            }
        }
        props.onSaveTask(item);
    }

    const ItemHandler = (event) => {
        setEnteredItem(event.target.value);
    }

    const returnBack = () => {
        if(props.value === 'Task'){
            props.savePageValue(0);
        }
    }

    return (
        <div className="item">
            <form  onSubmit={submitHandler}>
                <div className="item-header">
                    <label className="item-title">{ "Add " + props.value}</label>
                    <input className="item-input" onChange={ItemHandler} type="text"></input>
                </div>
                <button className="item-button" type="submit">SUBMIT</button> 
                <button className="item-button" type="reset" onClick={returnBack}> CANCEL </button> 
            </form>
        </div>
        
    );
};

export default AddCard;