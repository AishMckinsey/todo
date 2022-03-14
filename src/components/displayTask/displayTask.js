import './displayTask.css'
import '../addButton/addButton'
import AddButton from '../addButton/addButton';
import Item from '../displayItem/displayItem';

const TaskList = (props) =>{
    const displayString = "Add Task";

    return (
        <div> 
            <header className='list-header'>
                <AddButton displayString={displayString} savePageValue={props.savePageValue} ></AddButton>
            </header>
            <div className='list-item-container'>
                {
                    props.taskList.map( (details,index) => (
                    <Item item={displayString} savePageValue={props.savePageValue} onEditTask={props.onEditTask} task={details.task} subTask={details.subTask} saveIndexTask={props.saveIndexTask} saveIndexSubTask={props.saveIndexSubTask}  indexTask={index}></Item>
                    ))
                }
            </div>
        </div>
        
    );
};
export default TaskList;