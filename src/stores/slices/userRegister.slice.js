import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const findAllUsers = createAsyncThunk(
    "findAllUsers",
    async () => {
        let res = await axios.get(process.env.REACT_APP_SERVER_JSON + 'users');
        return res.data
    }
)

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
        name: "register",
        initialState: {
            counter: 0,
            loading: false,
            users: []
        },
        extraReducers: (builder) => {
            // find all users
            builder.addCase(findAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = [...action.payload]
            });
            // create new user
            builder.addCase(createNewUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload)
            });
            
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
    createNewUsers,
    findAllUsers
    

    
}
export default registerSlice.reducer;
