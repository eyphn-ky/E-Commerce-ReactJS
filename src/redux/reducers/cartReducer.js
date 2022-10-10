import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state=initialState.cart,action){
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c=>c.product.id===action.payload.product.id);
            if(addedItem){
                var newState = state.map(cartItem=>{
                    if(cartItem.product.id===action.cartItem.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem;//hepsini tek tek return eder. Listeyi dolu halde newState'e atar.      
                })
                return newState;
            }
            else{
                return [...state,{...action.payload}] //state'in bir kopyasını alarak, action payload'unu ona ekle
            }
        default: return state;
    }

}