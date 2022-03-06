import React, { useState, useEffect } from "react";
import styles from "./TaskList.module.css";
import axios from "axios";

function TaskList(){
    const [toDo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);
    
    const onChange = (e) => setToDo(e.target.value);

    const getTaskList = () =>{  // 이건맞아 일단
        axios.get('http://localhost:8000/todos')
        .then((response) => response.data)
        .then(response => setToDoList(response)); 
    };

    const onDeleteClick = (todoid) => {
        // console.log('inside delete');
        axios.delete(`http://localhost:8000/deleteTodo/${todoid}`);
        getTaskList();
    };

    const onSubmitClick = () => {
        axios.post('http://localhost:8000/addTodo', {
            toDo: toDo
        });
        getTaskList();
    };

    useEffect(() => {
        getTaskList();
      },[]);

    return(
        <div className={styles.title}>
            <h3>TaskList</h3>
            <div className="ui input">
                <input value={toDo} onChange={onChange} placeholder="오늘의 할일은.." />
            </div>
            <button className="ui primary button basic" onClick={onSubmitClick} >확인</button>
            <hr/>
            <div className={styles.task__detail}>
                <div className="ui cards">
                    {
                        toDoList.map((todos, index) => (
                            <div className="card">
                                <div className="content">
                                    <div className="meta" key={index}>{todos.todo}</div>
                                    <div class="extra content">
                                        <div class="ui two buttons">
                                            <div class="ui basic green button">Done</div>
                                            <div class="ui basic red button" onClick={() => onDeleteClick(todos.todoid)}>Delete</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default TaskList;