import React, {useEffect, useState} from 'react';
import Goals from "./Goals";
import {supabase} from "../App";

const Sphere = () => {
    // const [userId, setUserId] = useState('')
    const userId = '5619f0e3-9a89-4dcd-b3c0-db9da839db1d'
    const [spheres, setSpheres] = useState([])
    const getSpheres = async () => {
        supabase.from('sphere')
            .select()
            .eq('uuid', userId)
            .then(r => {
                // debugger
                let arr = []
                if (r.data?.map(a => arr.push({sphere_id: a.sphere_id, sphere_title: a.sphere_title}))) {
                    setSpheres(arr)
                }
            })
    }

    console.log(spheres)
    return (
        <div>
            <button onClick={getSpheres}>get</button>
            {spheres.map(sp =>
                <div>сфера - {sp.sphere_title}
                    <Goals sphere_id={sp.sphere_id}/>
                </div>)}
            {/*{spheres.map(sp => <div>{sp.sphere_title}</div>)}*/}
            {/**/}
        </div>
    );
};

export default Sphere;