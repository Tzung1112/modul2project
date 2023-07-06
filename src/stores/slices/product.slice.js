import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const findAllProducts = createAsyncThunk(
    "findAllProducts",
    async () => {
        let res = await axios.get(process.env.REACT_APP_SERVER_JSON + 'product');
        return res.data
    }
)
const addProduct = createAsyncThunk(
    "addProduct",
    async (newProduct) => {
        //http://localhost:4000/users
        let res = await axios.patch(process.env.REACT_APP_SERVER_JSON + 'users/' + newProduct.usersId, newProduct.data);
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
            builder.addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                //state.cart.push(action.payload)
            });
        }
    }
)

export const productActions = {
    ...productSlice.actions,
    findAllProducts,
    addProduct

}
export default productSlice.reducer;