import * as actionTypes from './actionTypes'

export function getProductsSuccess(products)//getProducts() fonksiyonu burayı çalıştırır.
{
    return {type:actionTypes.GET_PRODUCTS_SUCCESS, payload:products}//bir obje dönüyor obje payload ve type taşıyor
}
export function createProductsSuccess(products)//getProducts() fonksiyonu burayı çalıştırır.
{
    return {type:actionTypes.CREATE_PRODUCT_SUCCESS, payload:products}//bir obje dönüyor obje payload ve type taşıyor
}
export function updateProductsSuccess(products)//getProducts() fonksiyonu burayı çalıştırır.
{
    return {type:actionTypes.UPDATE_PRODUCT_SUCCESS, payload:products}//bir obje dönüyor obje payload ve type taşıyor
}

export function saveProduct(product){//reducer devreye alındı id varsa güncelle yoksa ekle
return function(dispatch){
    return saveProductApi(product).then(savedProduct=>{//işlem yapıldıktan sonra işlemin türüne göre cevap dön
        product.id
        ? dispatch(updateProductsSuccess(savedProduct))
        : dispatch(createProductsSuccess(savedProduct));
    })
    .catch(error=>{
        throw error;
    });
}
}
export function saveProductApi(product){              
    return fetch("http://localhost:3000/products"+(product.id||""),//varsa id değerini yolla yoksa yollama
    {method:product.id?"PUT":"POST",//varsa put ile güncelle yoksa post ile ekle
    headers:{"content-type":"application/json"},//default zaten böyle gerek yok yazmaya
    body:JSON.stringify(product)},
    ).then(handleResponse).catch(handleError);//response'a girer başarısız olursa Error döner bu Error catch ile işlenir. Adım adım ilerler
}
export async function handleResponse(response){
    if(response.ok)
    {
        return response.json()
    }
    const error = await response.text()
    throw new Error(error);//hata var ise catche düşecek
}
export function handleError(error){
    throw error;
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
