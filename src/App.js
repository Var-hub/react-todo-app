
import './App.css';
import React ,{useState} from 'react';
import Body from './Components/App_Body/Body';
import Container from './Components/App_Body/Container';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input'
import ToDoLists from './Components/Todo_Container/ToDo_Lists/ToDoLists'
const tasks = [
  
];
const App = () => {
  const [addTask, setAddTask] = useState(tasks);
  const [taskId , setTaskId] = useState(0);

  
  const taskreceiver = (task ) =>{
    if(task.trim().length > 0){
      setTaskId(taskId +1)
      setAddTask((prevState)=>{
        const updateTasks = [...prevState];
        updateTasks.unshift({id:`d${taskId}` , task: task , status:false})  
        return updateTasks;
      })
    }

  }
 
  const removeItem = (id) =>{
    setAddTask((prevState)=>{
      const updateTasks = prevState.filter(task => task.id !== id);
      return updateTasks;
    })
  }

  const statusHandler = (id , status) =>{
    const taskId = addTask.findIndex(task => task.id === id);
    setAddTask(prevState =>{
      const updateTasks = [...prevState];
      updateTasks[taskId].status = status;
      return updateTasks;
    }); 
  } 

  const deleteAllTasks = () =>{
    setAddTask([])
  }



  return (
    <Body>
        <Container>
              <Header></Header>
              <Input task={taskreceiver}></Input>
              <ToDoLists deleteTasks={deleteAllTasks}  statusChecker={statusHandler} deleteItem={removeItem} todo={addTask}></ToDoLists>
             
        </Container>
    </Body>
  ) ;

}

export default App;
