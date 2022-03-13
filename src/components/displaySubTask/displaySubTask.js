
import Item from '../displayItem/displayItem'
const DisplaySubTask = (props) => {
    const returnBack = () => {
        props.setIsSubTaskVisible(false);
    }

    return (
        <div>  
            <button className="item-button" type="reset" onClick={returnBack}> CANCEL </button>
            {
                props.subTask.map( (details) => (
                    <Item task={details}></Item>
                    // console.log(details)
                ))
            }
        </div>
    );
};


// always use caps 
export default DisplaySubTask;
