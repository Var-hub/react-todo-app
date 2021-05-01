import React from 'react';
import styles from './ToDoFooter.module.css';

const ToDoFooter = (props) =>{
    const showAllHandler = () =>{
        props.showAll();
    }
    const showActiveHandler = () =>{
        props.showActive();
    }
    const showCompleteHandler = () =>{
        props.showComplete();
    }
    const clearHandler = () =>{
        props.clearTasks();
    }
    return(
        <div className={styles.todo_footer}>
            <div>{  `${props.tasks.filter(task => task.status === false).length} items remains`}</div>
                <div><button type="button" onClick={clearHandler}>clear all</button></div>
            <div>
                <button onClick={showAllHandler} type="button">all</button>
                <button onClick={showActiveHandler} type="button">active</button>
                <button onClick={showCompleteHandler} type="button">complete</button>
            </div>
        </div>
    );
}

export default ToDoFooter;