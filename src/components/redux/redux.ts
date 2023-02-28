import {AnyAction, configureStore, createStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {sphereReducer} from "./sphereSlice";



export type AppStoreType = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: {
        sphere: sphereReducer,
        // mainGoal: mainGoalReducer,
        // mainTask: mainTaskReducer
    }
})

export type AppDispatch = ThunkDispatch<any, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector

export type AppActionTypes = AnyAction

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, any, unknown, AnyAction>
