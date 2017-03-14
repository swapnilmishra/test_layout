import productData from "api/products";

const dataStore = {
    products : productData.products,
    originalData : productData.products,
    filters  : productData.filters,
    cartData : {},
    productPageData : {},
    cbArray : [],
    subscribe(cb){
        this.cbArray.push(cb)
    },
    setStore(key,data){
        dataStore[key] = data
        this.cbArray.forEach((cb) => {
            cb()
        })
    },
    getStore(){
        return dataStore
    }
}

export default dataStore;