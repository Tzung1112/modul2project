import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/* const findAllProducts = createAsyncThunk(
    "findAllProducts",
    async () => {
        let res = await axios.get(process.env.REACT_APP_SERVER_JSON + 'product');
        return res.data
    }
) */
const FillDetail = createAsyncThunk(
    "FillDetail",
    async (productId) => {
        //http://localhost:4000/users/1
        let res = await axios.get(process.env.REACT_APP_SERVER_JSON + 'product/' + productId.id);
        return productId
    }
)
const addProduct = createAsyncThunk(
    "addProduct",
    async (newProduct) => {
        console.log("🚀 ~ file: product.slice.js:14 ~ newProduct:", newProduct)
        //http://localhost:4000/users
        let res = await axios.patch(process.env.REACT_APP_SERVER_JSON + 'users/' + newProduct.usersId, newProduct.data);
        return res.data

    }
)

const detailSlice = createSlice(
    {
        name: "counter",
        initialState: {
            listProducts: [],
           users: [],
            detailcart: []
          
        },
        extraReducers: (builder) => {
           /*  builder.addCase(findAllProducts.fulfilled, (state, action) => {

                state.listProducts = [...action.payload]
            }); */
           /*  builder.addCase(FillDetail.fulfilled, (state, action) => {
                state.listProducts = state.listProducts.map(product => {
                    if (product.id == action.payload.id) {
                        console.log("🚀 ~ file: detail.slice.js:37 ~ builder.addCase ~ action.payload:", action.payload)
                        state.detailcart.push(action.payload)
                       
                    }
                })
            }); */
           /*  builder.addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.cart.push(action.payload)
            }); */
        }
    }
)
export const detailActions = {
    ...detailSlice.actions,
    FillDetail,
    /* findAllProducts, */
    addProduct
   
}
export default detailSlice.reducer;