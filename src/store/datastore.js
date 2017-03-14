import productData from "api/products";

const dataStore = {
    productData : productData,
    cartData : {},
    productPageData : {}
}

function getStore(){
    return dataStore
}

function setStore(key,data){
    dataStore[key] = data
}

export default {
    setStore,
    getStore
}