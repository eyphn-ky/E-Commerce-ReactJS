import * as actionTypes from './actionTypes'

export function getProductsSuccess(products)//getProducts() fonksiyonu burayı çalıştırır.
{
    return {type:actionTypes.GET_PRODUCTS_SUCCESS, payload:products}//bir obje dönüyor obje payload ve type taşıyor
}

export function getProducts(categoryId){ //bu fonksiyonu çağırırız //bu fonksiyonu redux thunk ile bağlarız

    return function(dispatch){
        let url="http://localhost:3000/products"
        if(categoryId)
        {
            url = url + "?categoryId="+categoryId;
        }
        return fetch(url).then(response=>response.json())
                         .then(result=>dispatch(getProductsSuccess(result)));
    }
}