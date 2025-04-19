import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    totalQuantity: 0,  //default 0
    totalPrice: 0,  //default 0
}

const cartSlice = createSlice ({
name:'cart',
initialState,
reducers: {
addtocart(state, action){
    const newItem = action.payload;
    const itemIndex = state.products.find((item)=>item.id === newItem.id) 
    console.log(itemIndex,"Itemindex from cartslice")
    if(itemIndex) {   ///this code is used to if there is product in the cart and if we want to add the same it will multiply.
        itemIndex.quantity ++;
        itemIndex.totalPrice += newItem.price;
    } else {  //this code is used to add the new item in the cart.
        state.products.push({
            id:newItem.id,
            name: newItem.name,
            price:newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            image:newItem.image
        })
    }

    state.totalPrice += newItem.price;
    state.totalQuantity++

},
removeFromcart(state, action) {
    const remove_id = action.payload;
    const findItem = state.products.find((item)=>item.id === remove_id) 
    if(findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.totalQuantity;
        state.products = state.products.filter(item => item.id !== remove_id)
    }
},
increaseQuantity (state, action) {
    const id =  action.payload;
    const findItem = state.products.find((item)=>item.id === id);
    if(findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
    }
},

decreaseQuantity (state, action) {
    const id =  action.payload;
    const findItem = state.products.find((item)=>item.id === id);
    if(findItem.quantity > 1) {
    if(findItem) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
    }
}
}
}
})


export const {addtocart, removeFromcart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;