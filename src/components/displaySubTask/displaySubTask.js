import Item from '../displayItem/displayItem'

const DisplaySubTask = (props) => {
    return (
        <div> 
                {
                    props.subTask.map( (details) => (
                        console.log(details)
                    //  <Item value = {details}></Item>
                    ))
                }
        </div>
    );
};


// always use caps 
export default DisplaySubTask;
