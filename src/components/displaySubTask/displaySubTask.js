
import Item from '../displayItem/displayItem'
const DisplaySubTask = (props) => {
    const returnBack = () => {
        props.setIsSubTaskVisible(false);
    }

    return (
        <div>  
            <button className="item-button" type="reset" onClick={returnBack}> CANCEL </button>
            {
                props.subTask.map( (details,index) => (
                    <Item onEditTask={props.onEditTask} savePageValue={props.savePageValue} task={details}></Item>
                ))
            }
        </div>
    );
};


// always use caps 
export default DisplaySubTask;