import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const createNewUsers = createAsyncThunk(
    "createNewUsers",
    async (newUser) => {
        //http://localhost:4000/users
        let res = await axios.post(process.env.REACT_APP_SERVER_JSON + 'users', newUser);
        return res.data
    }
)

const registerSlice = createSlice(
    {
        name: "counter",
        initialState: {
            counter: 0,
            loading: false,
            users: []
        },
        extraReducers: (builder) => {
            // find all users
           
            // create new user
            builder.addCase(createNewUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload)
            });
            // delete user
           
            // set status user
            
            // xử lý các pending và rejected
            builder.addMatcher(
                (action) => {
                    if (action.meta) {
                        return action
                    }
                },
                (state, action) => {
                    if (action.meta) {
                        if (action.meta.requestStatus == "pending") {
                            console.log("đã vào pending của api: ", action.type)
                            state.loading = false;
                        }
                        if (action.meta.requestStatus == "rejected") {
                            console.log("đã vào rejected của api: ", action.type)
                            state.loading = false;
                        }
                    }
                }
            );
        }
    }
)
export const registerActions = {
    ...registerSlice.actions,
    createNewUsers

    
}
export default registerSlice.reducer;
