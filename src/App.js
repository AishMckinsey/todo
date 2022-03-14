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
  };

  const [pageValue, setPageValue] = useState(0);
  const savePageValue = (newPageValue) => {
    setPageValue(newPageValue);
  }

 const [selectedTask, setSelectedTask] = useState("");
 const onEditTask = (task) => {
   setSelectedTask(task);
   savePageValue(2);
 }


  // selected task
  const [indexTask, setIndexTask] = useState(-1);
  const saveIndexTask = (newValue) => {
    setIndexTask(newValue);
    
  }

  // selected sub task
  const [indexSubTask, setIndexSubTask] = useState(-1);
  const saveIndexSubTask = (newValue) => {
    setIndexSubTask(newValue);
  }

 // updated value
 const [newValue, setNewValue] = useState("");
 const saveNewValue = (task) => {
   setNewValue(task);
 }
 
//  const onSave = () => {
//   initialTask[indexTask].subTask[indexSubTask] = 
//  }
 //const [newUpdate, setNewUpdate] = useState();
 //console.log(initialTask[indexTask].subTask[indexSubTask]);
  
 return (
    <div className="App">
      { 
        (pageValue === 0) ?<TaskList onEditTask={onEditTask} taskList={initialTask} savePageValue={savePageValue} saveIndexTask={saveIndexTask} saveIndexSubTask={saveIndexSubTask} ></TaskList>
        :(pageValue === 1)?<AddTask savePageValue={savePageValue} onSaveTask={onSaveTask} value={"Task"}></AddTask>
        :(pageValue===2)?<UpdateSubTask taskList={initialTask} selectedTask={selectedTask} savePageValue={savePageValue} saveNewValue={saveNewValue} ></UpdateSubTask>
        :<AddTask savePageValue={savePageValue} onSaveTask={onSaveTask} value={"Sub Task"} ></AddTask>
      }
    </div>
  );

}

export default App;
