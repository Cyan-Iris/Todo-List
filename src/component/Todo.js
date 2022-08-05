import {React} from "react";
import {useState} from "react";
import Items from './Items';
import shortid from "shortid";


import styles from './formStyle.module.css';
function Todo(){
    const [todo,setToDo]=useState("");
    const [toDoList,setToDoList]=useState([]);

    function changeTodo(event){
        setToDo(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();

        toDoList.push({id:shortid.generate(),text:todo});
        setToDo("");
        setToDoList(toDoList);
       
    }
    const printList=toDoList.map((each,index)=><Items key={index} id={each.id} text={each.text} list={toDoList} update={setToDoList}></Items>)

   return(
        <div>
            <form onSubmit={handleSubmit}>
            <input value={todo} className={styles.formT} onChange={changeTodo} type="text" placeholder="Add your todo item"></input>
            <button type="submit" className={styles.buttonB}>Add</button>
        </form>
        {printList}

        </div>

    );

}
export default Todo;