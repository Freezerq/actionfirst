import React, {useEffect, useState} from 'react';
import {supabase} from "../App";
import MiniTask from "./MiniTask";



// type TaskPropsType = {
//     goal_id: number
// }

const MainTasks = (props) => {

    const [state, setState] = useState([])
    // debugger
    useEffect(() => {
        supabase.from('main_tasks')
            .select()
            .eq('goal_id', props.goal_id)
            .then(r => {
                let arr = []
                if(r.data?.map(a => arr.push({main_task_id: a.main_task_id, title: a.main_tasks_title}))) {
                    setState(arr)
                }
            })
    }, [])

    // arr.map(a => {
    //     // debugger
    //     console.log(a)
    // })
    return (

        <div style={{marginLeft: '30px'}}>
            {state.map(a => <div>{a.title}
            <MiniTask main_task_id={a.main_task_id}/>
            </div>)}
        </div>
    );
};

export default MainTasks;