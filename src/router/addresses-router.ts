import { Response, Request, Router } from "express"

const addresses = [{id: 1, value: 'Nezajegnasti 11'}, {id: 2, value: 'Selickogo 12'}]

export const addressesRouter = Router()

addressesRouter.get('/', (req: Request, res: Response) => {   
    res.send(addresses)
})

addressesRouter.get('/:id', (req: Request, res: Response) => {   
    let address = addresses.find(a => a.id === +req.params.id)
    if(address) {
        res.send(address)
    }else{
        res.send(404)
    }   
})