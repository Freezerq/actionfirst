import React, {useEffect, useState} from 'react';
import {supabase} from "../App";
import MainTasks from "./MainTasks";

const Goals = (props) => {
    const [input1, setInput1] = useState('')
    const [goals, setGoals] = useState([])


    useEffect(() => {

    }, [])

    const buttonGetGoals = () => {
        supabase.from('main_goal')
            .select()
            .eq('sphere_id', props.sphere_id)
            .then(r => {
                let arr = []
                if(r.data?.map(a => arr.push({main_goal_title: a.main_goal_title, goal_id: a.goal_id}))) {
                    setGoals(arr)
                }
            })
    }

    const onClickButtonHandler = () => {
        supabase.from('main_goal').insert({'main_goal_title': input1, sphere_id: props.sphere_id}).then(r => {
                if (r.data) {
                    setGoals(r.data)
                    buttonGetGoals()
                }
            }
        )
    }

    const inputHandler = (e) => {
        setInput1(e.currentTarget.value)
    }

    return (
        <div>
            <input type="text" value={input1} onChange={inputHandler}/>
            <button onClick={onClickButtonHandler}>add goal</button>
            <div>my goals</div>
            <button onClick={buttonGetGoals}>get goals</button>
            <div>{goals?.map(g =>
                <div>
                {g.main_goal_title}
                <MainTasks goal_id={g.goal_id}/>
                </div>)}
            </div>
        </div>
    )
}

export default Goals