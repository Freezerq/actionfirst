import React, {useEffect} from 'react';
import {useAppDispatch} from "./redux/redux";
import {fetchMainGoals, fetchMainTasks} from "./redux/sphereSlice";
import Task from "./Task";




// type TaskPropsType = {
//     goal_id: number
// }

const MainTask = (props) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchMainTasks(props.goal_id))
    }, [])


    return (
        <div style={{marginLeft: '30px'}}>
            {props.mainTasks?.map(a => <div>{a.main_tasks_title}
            <Task main_task_id={a.main_task_id} key={a.main_task_id} tasks={a.tasks}/>
            </div>)}
        </div>
    );
};

export default MainTask;