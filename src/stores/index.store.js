import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './slices/counter.slice'
import productReducer from './slices/product.slice'
import userLoginReducer from './slices/userLogin.slice'
import userRegisterRedicer from './slices/userRegister.slice'



const store = configureStore(
    {
        reducer: {
            counterStore: counterReducer,
            productStore: productReducer,
            userLoginStore: userLoginReducer,
            userRegisterStore: userRegisterRedicer
        }
    }
)

export default store