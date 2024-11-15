import express  from 'express';
import bodyParser from 'body-parser';
import { productRouter } from './router/products-router';
import { addressesRouter } from './router/addresses-router';


const app = express()
const port = 3000

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)



app.use('/products', productRouter)
app.use('/addresses', addressesRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
