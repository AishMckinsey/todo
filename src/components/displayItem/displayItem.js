
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
             console.log("Heh")
        }
    }; 


    return (
        <div className='list-item'>
            <button onClick={showSubTask} ><h1>{props.task}</h1></button>
             
            { isSubTaskVisible ? (
                <DisplaySubTask setIsSubTaskVisible={setIsSubTaskVisible} subTask = {props.subTask}></DisplaySubTask>
            ): (
                ""
            )}
        </div>
        
    );
    
    
}

export default Item;
