import React, {useEffect, useState} from 'react';
import {supabase} from "../App";



// type TaskPropsType = {
//     goal_id: number
// }

const MiniTask = (props) => {

    const [state, setState] = useState([])
    // debugger
    useEffect(() => {
        supabase.from('tasks')
            .select()
            .eq('main_task_id', props.main_task_id)
            .then(r => {
                let arr = []
                if(r.data?.map(a => arr.push({task_id: a.task_id, title: a.task_title}))) {
                    setState(arr)
                }
            })
    }, [])

    // arr.map(a => {
    //     // debugger
    //     console.log(a)
    // })
    console.log(state)
    return (
        <div style={{marginLeft: '66px'}}>
            {state.map(a => <div>{a.title}</div>)}
        </div>
    );
};

export default MiniTask;