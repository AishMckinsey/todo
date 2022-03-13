
import './displayItem.css'
import DisplaySubTask  from '../displaySubTask/displaySubTask';
 
const Item = (props) => {
    const showSubTask = (event) => {
        event.preventDefault();
        if(props.item === 'Add Task'){
            <DisplaySubTask subTask = {props.subTask}></DisplaySubTask>
            console.log("hello")
        }
        else{
             console.log("Heh")
        }
    }; 

    return (
        <div className='list-item'>
            <button onClick={showSubTask} ><h1>{props.task}</h1></button>
        </div>
    );
    
    
}

export default Item;
