import { Response, Request, Router } from "express"
import { productRespository } from "../respository/product-respository"


export const productRouter = Router()

productRouter.get('/', (req: Request, res: Response) => { 
    let foundProducts = productRespository.findProduct(req.query.title?.toString())
    res.send(foundProducts)
})

productRouter.post('/', (req: Request, res: Response) => {   
    const newProduct = productRespository.createProduct(req.body.title)
    res.send(201).send(newProduct)
})

productRouter.get('/:id', (req: Request, res: Response) => {   
    let product = productRespository.getProducById(+req.params.id)
    if(product){
        res.send(product)
    }else{
        res.send(404)
    }
    
})

productRouter.put('/:id', (req: Request, res: Response) => {   
    const updating = productRespository.updateProduct(+req.params.id, req.body.title)  
    if(updating) {
        const product = productRespository.findProduct(req.params.id)
        res.send(product)
    }else{
        res.send(404)
    }
})

productRouter.delete('/:id', (req: Request, res: Response) => {   

  const isDeleted = productRespository.deleteProduct(+req.params.id)
     if(isDeleted){
         res.send(204)
     }else{
         res.send(404)
     }
})