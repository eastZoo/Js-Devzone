import React, { useState, useEffect } from "react";
import styles from "./TaskList.module.css";
import axios from "axios";

function TaskList(){
    const [toDo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const onChange = (e) => setToDo(e.target.value);

    const getTaskList = () =>{
        axios.get('http://localhost:8000/todos')
        .then((response) => response.data)
        .then(response => setToDoList(response));
    };

    const onDeleteClick = (todoid) => {
        // console.log('inside delete');
        axios.delete(`http://localhost:8000/deleteTodo/${todoid}`);
    };

    const onSubmitClick = () => {
        axios.post('http://localhost:8000/addTodo', {
            toDo: toDo
        });
        getTaskList();
    };

    useEffect(() => {
        getTaskList();
      }, []);

    console.log(toDo);
    return(
        <div className={styles.title}>
            <h3>TaskList</h3>
            <div className="ui input">
                <input value={toDo} onChange={onChange} placeholder="오늘의 할일은.." />
            </div>
            <button className="ui primary button basic" onClick={onSubmitClick} >확인</button>
            <hr/>
            <div className="ui card">
                {
                    toDoList.map((todo) => (
                        <div className="card">
                            <div className="content">
                                <div className="meta">{todo.todo}</div>
                                <div class="extra content">
                                    <div class="ui two buttons">
                                        <div class="ui basic green button">Done</div>
                                        <div class="ui basic red button" onClick={onDeleteClick(todo.todoid)}>Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
        
    )
}

export default TaskList;