import {Action, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {supabase, userId} from "../../App";
import sphere from "../Sphere";
import {retry} from "@reduxjs/toolkit/query";


type initialStateType = Array<SphereType>
const initialState: initialStateType = []

const sphereSlice = createSlice({
    name: 'sphere',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSpheres.fulfilled, (state: initialStateType, action) => {
            state = action.payload
            state.map(sphere => sphere.mainGoals = [])
            return state
        })
        builder.addCase(fetchMainGoals.fulfilled, (state: initialStateType, action) => {
            const sphere = state.find(sp => action.payload[0].sphere_id === sp.sphere_id)
            if (sphere) {
                sphere.mainGoals = action.payload
            }
        })
        builder.addCase(fetchMainTasks.fulfilled, (state: initialStateType, action) => {
            state.map(s => s.mainGoals.map(g => {
                if (action.payload.length > 0) {
                    if (g.goal_id === action.payload[0].goal_id) {
                        g.mainTasks = action.payload
                    }
                    else {
                        g.mainTasks = []
                    }
                }
            }))
        })
        builder.addCase(fetchTasks.fulfilled, (state: initialStateType, action) => {
            state.map(s => s.mainGoals.map(g => g.mainTasks.map(mt => {
                if (action.payload.length > 0) {
                    if (mt.main_task_id === action.payload[0].main_task_id) {
                        mt.tasks = action.payload
                    }
                    else {
                        mt.tasks = []
                    }
                }
            })))
        })
    },

})

//thunks
export const fetchSpheres = createAsyncThunk(
    'sphere/getSpheres',
    async function () {
        const result = await supabase.from('sphere')
            .select('sphere_title, sphere_id',)
            .eq('uuid', userId)
            .then(r => {
                return r.data as Array<SphereType>
            })
        return result
    }
)

export const fetchMainTasks = createAsyncThunk(
    'sphere/getMainTasks',
    async function (goal_id: number) {
        const result = await supabase.from('main_tasks')
            .select('main_tasks_title, goal_id, main_task_id')
            .eq('goal_id', goal_id)
            .then(r => {
                return r.data as Array<MainTaskType>
            })
        return result
    }
)

export const fetchMainGoals = createAsyncThunk(
    'sphere/getMainGoals',
    async function (sphereId: number) {
        const result = await supabase.from('main_goal')
            .select('main_goal_title, goal_id, sphere_id')
            .eq('sphere_id', sphereId)
            .then(r => {
                return r.data as Array<MainGoalType>
            })
        return result
    }
)

export const fetchTasks = createAsyncThunk(
    'sphere/getTasks',
    async function (main_task_id: number) {
        const result = await supabase.from('tasks')
            .select('task_title, task_id, main_task_id')
            .eq('main_task_id', main_task_id)
            .then(r => {
                return r.data as Array<TaskType>
            })
        return result
    }
)

export const addTask = createAsyncThunk(
    'sphere/addTask',
    async function (obj: any) {
        await supabase.from('tasks')
            .insert({...obj})
    }
)
// 'sphere/addTask',
//     async function (taskTitle: string, main_task_id: number) {
//         const result = await supabase.from('tasks')
//             .insert({task_title: taskTitle, main_task_id: main_task_id})
//             .then( r => {
//                 return r
//             })
//         return result
//     }
// types
type SphereType = {
    sphere_title: string
    sphere_id: number
    mainGoals: Array<MainGoalType>
}

export type MainGoalType = {
    main_goal_title: string
    goal_id: number
    sphere_id: number
    mainTasks: Array<MainTaskType>
}

export type MainTaskType = {
    main_tasks_title: string
    goal_id: number
    main_task_id: number
    tasks: Array<TaskType>
}

export type TaskType = {
    task_title: string
    task_id: number
    main_task_id: number
}


// export const { setMainGoals } = sphereSlice.actions
export const sphereReducer = sphereSlice.reducer