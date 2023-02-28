import React, {useEffect, useState} from 'react';
import {supabase} from "../App";
import {useAppDispatch} from "./redux/redux";
import {addTask, fetchTasks} from "./redux/sphereSlice";



// type TaskPropsType = {
//     goal_id: number
// }

const Task = (props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTasks(props.main_task_id))
    }, [])


    const [inputField, setInputField] = useState('')
    const addTaskHandler = () => {
        dispatch(addTask({main_task_id: props.main_task_id, task_title: inputField}))
    }

    return (
        <div style={{marginLeft: '66px'}}>
            <input value={inputField} onChange={e => setInputField(e.currentTarget.value)}/>
            <button onClick={addTaskHandler}>add new task</button>
            {props.tasks?.map(a => <div key={a.task_id}>

                {a.task_title}</div>)}
        </div>
    );
};

export default Task;