"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRespository = void 0;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productRespository = {
    findProduct(title) {
        if (title) {
            let filterProducts = products.filter(p => p.title.indexOf(title) > -1);
            return filterProducts;
        }
        else {
            return products;
        }
    },
    createProduct(title) {
        let newProduct = {
            id: +(new Date()),
            title: title
        };
        products.push(newProduct);
        return newProduct;
    },
    getProducById(id) {
        const filterProducts = products.find(p => p.id == id);
        return filterProducts;
    },
    updateProduct(id, title) {
        let product = products.find(p => p.id === id);
        if (product) {
            product.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteProduct(id) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === +id) {
                products.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
