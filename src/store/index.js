
import { createSlice, createAsyncThunk, configureStore, combineReducers } from "@reduxjs/toolkit"
import axios from "../axios"
import cartReducer from "./cartSlice";


export const getProducts = createAsyncThunk('goods/getProducts', async() => {
     const res = await axios.get('/products')
     console.log(res);
     return res.data
})

const initState = {
     goods: [],
     status:null,
     error: null

}


const goodsSlice  = createSlice({
     name: "goods",
     initialState: initState,
    reducer:{},
    extraReducers:{
     [getProducts.pending]:( state, action) =>{
          state.status= "pending";
          state.error= null;
     },
     [getProducts.fulfilled]:( state, action) =>{
          state.status="success";
          state.goods= action.payload; // [20]
     
     },
     [getProducts.rejected]:( state, action) =>{
          state.status=  "rejected";
          state.error= action.payload;
     },

    },
})

const rootReducer = combineReducers({
     products:goodsSlice.reducer,
     cart: cartReducer,


})

const store = configureStore({
     reducer: rootReducer
})
export default store