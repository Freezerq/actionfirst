import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "./redux/redux";
import {fetchSpheres} from "./redux/sphereSlice";
import MainGoal from "./MainGoal";


const Sphere = () => {

    const spheres = useAppSelector(state => state.sphere)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchSpheres())
    }, [])

    return (
        <div>
            {/*<button onClick={() => dispatch(fetchSpheres())}>get</button>*/}
            {spheres.map(sp =>
                <div>сфера - {sp.sphere_title}
                    <MainGoal sphere_id={sp.sphere_id} key={sp.sphere_id} goals={sp.mainGoals}/>
                </div>)}
        </div>
    );
};

export default Sphere;