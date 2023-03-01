import { createSlice } from "@reduxjs/toolkit";


const initState = {
     cart:[],
}




const cartSlice = createSlice({
     name:'cart',
     initialState:initState,
     reducers: {
          addItemToCart(state,action){
               const product = {...action.payload,count:1}
               state.cart.push(product)
          },
          removeFromCart(state,action){},
     }
})


export default cartSlice.reducer

export const {addItemToCart} = cartSlice.actions