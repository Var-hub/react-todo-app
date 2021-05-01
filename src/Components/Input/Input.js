import React,{useState} from 'react';
import styles from './Input.module.css';
const Input = (props) =>{
    const [userInput , setUserInput] = useState('');
    const [isValid ,  setIsValid] = useState(true);

    const userInputHandler = event =>{
        setUserInput(event.target.value)

        if(event.target.value.trim().length > 0){
            setIsValid(true)
        }
    }


    const inputSubmitHandler = (event) =>{
        event.preventDefault();
        if(userInput.trim().length === 0){
            setIsValid(false);
        }
        props.task(userInput);
        setUserInput('');
        
    }
    return(
        <form className={`${styles.form_group} ${!isValid && styles.invalid}`} onSubmit={inputSubmitHandler}>
            <input type="text" onChange={userInputHandler} value={userInput} placeholder="Enter A To Do" />
            <button type="submit" >Add</button>
        </form>
    );
}

export default Input;