import express from 'express';
import cors from 'cors';

// Importazione dei router
import categoryRouter from './routers/categories.js';
import ordersRouter from './routers/orders.js';
import productRouter from './routers/products.js';
import paymentsRouter from "./routers/payments.js";

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.static(`public`));
app.use(express.json());

app.use('/orders', ordersRouter);

app.use("/products", productRouter);

app.use("/categories", categoryRouter)

app.use("/payments", paymentsRouter);


app.listen(port, error => {
    if(error){
        console.error(error.message);
        return;
    }
    console.log("Server in ascolto sulla porta: ", port);
})
