// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {supabase, userId} from "../../App";
// import {fetchMainTasks, MainTaskType} from "./mainTaskSlice";
// import {MainGoalType} from "./sphereSlice";
//
//
//
//
//
// type initialStateType = Array<MainGoalType>
// const initialState: initialStateType = []
//
// const mainGoalSlice = createSlice({
//     name: 'mainGoal',
//     initialState,
//     reducers: {
//
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchMainTasks.fulfilled, (state: initialStateType, action) => {
//
//             const mainGoal = state.find(mainGoal => action.payload[0].goal_id === mainGoal.goal_id)
//             console.log(state.map(a => console.log(a)))
//             console.log(mainGoal)
//             if (mainGoal) {
//                 mainGoal.mainTasks = action.payload
//             }
//         })
//     },
// })
//
// //thunks

//
// // types
//
export default 1
