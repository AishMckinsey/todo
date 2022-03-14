import './App.css';
import {useState} from "react";
import AddTask from './components/addTask/addTask';
import TaskList from './components/displayTask/displayTask';
import UpdateSubTask from './components/updateSubTask/updateSubTask'

const INPUT_DUMMY_DATA = [
  { task:'Learn',  subTask:['Homework','ClassWork']}, 
  { task:'Finance', subTask:['make monthly budjet', 'make weekly budjet']},
  { task: 'HouseHold', subTask: ['Clean room', 'Clean Workspace' ] } 
];

function App() {
  
  const [initialTask, setInitialTask]  = useState(INPUT_DUMMY_DATA);
  const onSaveTask = (newTaskItem) => {
    setInitialTask((prevState)=>[...prevState,newTaskItem])
    // console.log(initialTask);
  };

  const [indexTask, setIndexTask] = useState(-1);
  const saveIndexTask = (newValue) => {
    setIndexTask(newValue);
    
  }

  const [indexSubTask, setIndexSubTask] = useState(-1);
  const saveIndexSubTask = (newValue) => {
    setIndexSubTask(newValue);
  }

  const [pageValue, setPageValue] = useState(0);
  const savePageValue = (newPageValue) => {
    setPageValue(newPageValue);
  }

 const [selectedTask, setSelectedTask] = useState("");
 const onEditTask = (task) => {
   setSelectedTask(task);
   savePageValue(2);
 }

  return (
    <div className="App">
      { (pageValue === 0) ?<TaskList onEditTask={onEditTask} taskList={initialTask} savePageValue={savePageValue} saveIndexTask={saveIndexTask} saveIndexSubTask={saveIndexSubTask} ></TaskList>
      :(pageValue === 1)?<AddTask savePageValue={savePageValue} onSaveTask={onSaveTask} ></AddTask>
      :<UpdateSubTask taskList={initialTask} selectedTask={selectedTask} savePageValue={savePageValue} indexTask={indexTask} indexSubTask={indexSubTask} ></UpdateSubTask>}
    </div>
  );

}

export default App;
