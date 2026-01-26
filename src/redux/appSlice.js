import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        fullName: "Guest",
        email: "guest@gmail.com",
        token:"",
        todo:[],
        id:''
    },

    reducers:{
        updateName:(state, actions) => {
            state.fullName=actions.payload
        },

        updateEmail:(state, actions) => {
            state.email=actions.payload
        },

        storeTodo:(state, actions)=>{
            state.todo.push(actions.payload)
        },
    }
})


export default appSlice.reducer;

export const {updateName, updateEmail, storeTodo} = appSlice.actions;