import React, {useEffect} from 'react';

import MainTask from "./MainTask";
import {useAppDispatch} from "./redux/redux";
import {fetchMainGoals, fetchSpheres} from "./redux/sphereSlice";


const MainGoal = (props) => {
    // const mainGoals = useAppSelector(state => state.mainGoal)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchMainGoals(props.sphere_id))
    }, [])


    return (
        <div>
            <div>{props.goals.map(g =>
                <div>
                    {g.main_goal_title}
                    <MainTask goal_id={g.goal_id} key={g.goal_id} mainTasks={g.mainTasks}/>
                </div>)}
            </div>
        </div>
    )
}

export default MainGoal