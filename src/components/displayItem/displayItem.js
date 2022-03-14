
import './displayItem.css'
import DisplaySubTask  from '../displaySubTask/displaySubTask';
import {useState} from 'react'; 

const Item = (props) => {
    const [isSubTaskVisible, setIsSubTaskVisible] = useState(false);

    const showSubTask = (event) => {
        
        if(props.item === 'Add Task'){
            event.preventDefault();
            setIsSubTaskVisible(true);
        }
        else{
            props.onEditTask(props.task)
        }
    }; 


    return (
        <div className='list-item'>
            <button onClick={showSubTask} ><h1>{props.task}</h1></button>
             
            { isSubTaskVisible ? (
                <DisplaySubTask onEditTask={props.onEditTask} setIsSubTaskVisible={setIsSubTaskVisible} subTask = {props.subTask} savePageValue={props.savePageValue} ></DisplaySubTask>
            ): (
                ""
            )}
        </div>
        
    );
    
    
}

export default Item;