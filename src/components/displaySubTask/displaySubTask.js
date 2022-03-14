import Item from '../displayItem/displayItem'

const DisplaySubTask = (props) => {
    const returnBack = () => {
        props.setIsSubTaskVisible(false);
    }

    const addSubTask = (event) => {
        props.savePageValue(3);
    }
    
    return (
        <div>  
            <button className="item-button" onClick={addSubTask}>ADD</button>
            <button className="item-button" type="reset" onClick={returnBack}> CANCEL </button>
            {
                props.subTask.map( (details,index) => (
                    <Item onEditTask={props.onEditTask} savePageValue={props.savePageValue} saveIndex={props.saveIndex} task={details} indexSubTask={index} saveIndexSubTask={props.saveIndexSubTask}></Item>
                ))
            }
        </div>
    );
};


// always use caps 
export default DisplaySubTask;