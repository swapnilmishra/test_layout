/**
 * Data store stores the data and trigger a render as soon as its data changes
 */
import productData from "api/products";

const dataStore = {
    products : productData.products, // list of products, used for data after filters too
    originalData : productData.products, // immutable list of product, used for filters
    filters  : productData.filters, // list of filters to show in UI
    cartData : [], // cart data
    productPageData : {},
    cbArray : [], // subscriber callback array to be called when data changes in store
    currentPage : 'productlisting', // keeps track of currentPage for re-render
    subscribe(cb){
        this.cbArray.push(cb)
    },
    setStore(key,data){
        this[key] = data
        this.cbArray.forEach((cb) => {
            cb()
        })
    },
    getStore(){
        return this
    }
}

export default dataStore;