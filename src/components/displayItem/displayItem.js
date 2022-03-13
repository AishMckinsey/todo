
import './displayItem.css'
import DisplaySubTask  from '../displaySubTask/displaySubTask';
import {useState} from 'react'; 

const Item = (props) => {
    const [isSubTaskVisible, setIsSubTaskVisible] = useState(false);

    const showSubTask = (event) => {
        event.preventDefault();
        if(props.item === 'Add Task'){
            setIsSubTaskVisible(true);
           // props.savePageValue(2);
        }
        else{
            console.log(props);
            props.savePageValue(2);
            console.log(props);
        }
    }; 


    return (
        <div className='list-item'>
            <button onClick={showSubTask}>
                <h1>{props.task}</h1>
            </button>
             
            { isSubTaskVisible ? (
                <DisplaySubTask saveSubTaskValue={props.saveSubTaskValue} savePageValue={props.savePageValue} setIsSubTaskVisible={props.setIsSubTaskVisible} subTask = {props.subTask}></DisplaySubTask>
            ): (
                ""
            )}
        </div>
        
    );
    
    
}

export default Item;
