import React, { useState } from 'react';
import styles from './ToDoLists.module.css';
import ToDoItem from '../ToDo_Item/ToDoItem'
import ToDoFooter from '../ToDo_Footer/ToDoFooter';


const ToDoLists = (props) =>{
     const [filterTasks , setFilterTasks] = useState([...props.todo])
     const [showAllTask , setshowAllTask] = useState(true)
     const [showActiveTask , setshowActiveTask] = useState(false)
     const [showCompleteTask , setshowCompleteTask] = useState(false)


    
    const removeTask = (id) =>{
        props.deleteItem(id);
    }
    const checkTaskStatus = (id , status) =>{
        props.statusChecker(id, status);
    }

    const showAllTasks = () =>{
        setshowActiveTask(false)
        setshowCompleteTask(false)
        setshowAllTask(true)
    }   
    
    const showActiveTasks = () =>{
        setshowAllTask(false)
        setshowCompleteTask(false)
        setshowActiveTask(true)
       setFilterTasks(props.todo.filter(task => task.status === false))
    }
    const showCompleteTasks = () =>{
        setshowAllTask(false)
        setshowCompleteTask(false)
        setshowActiveTask(true)
        setFilterTasks(props.todo.filter(task => task.status === true))
    }
   const clearAll = () => {
       props.deleteTasks();
   }

    return(
        <div className={styles.todo_container }>
            {props.todo.length === 0 && <p>Please Enter New To Do</p>}
            {showAllTask && props.todo.map( tasks =>(
                <ToDoItem 
                checkTaskStatus={checkTaskStatus} 
                deleteTask={removeTask} 
                name={tasks.task}
                status={tasks.status} 
                itemId={tasks.id} 
                key={tasks.id}/>
                ))}

                {showActiveTask  && filterTasks.map( tasks =>(
                    <ToDoItem 
                    checkTaskStatus={checkTaskStatus} 
                    deleteTask={removeTask} 
                    name={tasks.task}
                    status={tasks.status} 
                    itemId={tasks.id} 
                    key={tasks.id}/>
                    ))}

                    {showCompleteTask  && filterTasks.map( tasks =>(
                        <ToDoItem 
                        checkTaskStatus={checkTaskStatus} 
                        deleteTask={removeTask} 
                        name={tasks.task}
                        status={tasks.status} 
                        itemId={tasks.id} 
                        key={tasks.id}/>
                        ))}

        <ToDoFooter clearTasks={clearAll} showAll={showAllTasks} showActive={showActiveTasks} showComplete={showCompleteTasks} tasks={props.todo} />

        </div>

    );
}

export default ToDoLists;