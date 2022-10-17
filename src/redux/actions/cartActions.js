import * as actionTypes from "./actionTypes"
//redux thunk işlemi yok api işi yok bu aşama sepet ile alakalı
export function addToCart(cartItem){
    return {type:actionTypes.ADD_TO_CART,payload:cartItem}
}
export function removeFromCart(product){
    return {type:actionTypes.REMOVE_FROM_CART,payload:product}
}