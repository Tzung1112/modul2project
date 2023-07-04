import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const findAllProducts = createAsyncThunk(
    "findAllProducts",
    async () => {
        let res = await axios.get(process.env.REACT_APP_SERVER_JSON + 'product');
        return res.data
    }
)
const productSlice = createSlice(
    {
        name: "counter",
        initialState: {
            listProducts: [],
            cart: [],
        },
        extraReducers: (builder) => {
            builder.addCase(findAllProducts.fulfilled, (state, action) => {

                state.listProducts = [...action.payload]
            });
        }
    }
)
export const productActions = {
    ...productSlice.actions,
    findAllProducts,

}
export default productSlice.reducer;