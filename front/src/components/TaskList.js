import React, { useState } from "react";
import styles from "./TaskList.module.css"
import axios from "axios";

function TaskList(){
    const [toDo, setToDo] = useState("");

    const onChange = (e) => setToDo(e.target.value);

    const onDeleteClick = () => {
        console.log('inside delete');
    };

    const onSubmitClick = () => {
        axios.post('http://localhost:8000/addTodo', {
            toDo: toDo
        });
    };

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
                <div className="card">
                    <div className="content">
                        <div className="meta">
                            Friend of Veronika
                        </div>
                        <div class="extra content">
                            <div class="ui two buttons">
                                <div class="ui basic green button">Done</div>
                                <div class="ui basic red button" onClick={onDeleteClick}>Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TaskList;