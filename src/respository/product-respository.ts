const products = [{id: 1, title: 'tomato'}, {id:2, title:'orange'}]

export const productRespository = {

    findProduct(title: string | null | undefined) {
        if(title) {
            let filterProducts = products.filter(p => p.title.indexOf(title) > -1)
            return filterProducts
        }else{
            return products;
        }
    },

    createProduct(title: string) {

        let newProduct = {
            id: +(new Date()),
            title: title
        }
        products.push(newProduct)
        return newProduct;
    },

    getProducById(id: number) {
        const filterProducts = products.find(p => p.id == id)
        return filterProducts
    },

    updateProduct(id: number, title: string) {
        let product = products.find(p => p.id === id)
        if(product) {
            product.title = title
            return true
        }else{
            return false
        } 
    },

    deleteProduct(id: number) {
        for( let i = 0; i < products.length; i++){
            if(products[i].id === +id){
                products.splice(i, 1)
                return true;
            }
        }
        return false;
         
    }
}