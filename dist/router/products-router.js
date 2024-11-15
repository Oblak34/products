"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_respository_1 = require("../respository/product-respository");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/', (req, res) => {
    var _a;
    let foundProducts = product_respository_1.productRespository.findProduct((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProducts);
});
exports.productRouter.post('/', (req, res) => {
    const newProduct = product_respository_1.productRespository.createProduct(req.body.title);
    res.send(201).send(newProduct);
});
exports.productRouter.get('/:id', (req, res) => {
    let product = product_respository_1.productRespository.getProducById(+req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productRouter.put('/:id', (req, res) => {
    const updating = product_respository_1.productRespository.updateProduct(+req.params.id, req.body.title);
    if (updating) {
        const product = product_respository_1.productRespository.findProduct(req.params.id);
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productRouter.delete('/:id', (req, res) => {
    const isDeleted = product_respository_1.productRespository.deleteProduct(+req.params.id);
    if (isDeleted) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
