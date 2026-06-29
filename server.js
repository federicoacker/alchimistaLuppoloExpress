import express from 'express';
import cors from 'cors';

// Importazione middlewares
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

// Importazione dei router
import categoryRouter from './routers/categories.js';
import ordersRouter from './routers/orders.js';
import productRouter from './routers/products.js';
import paymentsRouter from "./routers/payments.js";
import sendMail from './utils/sendMail.js';


const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.static(`public`));
app.use(express.json());

app.post("/mail", async (request, response) => {
    const resultObject = await sendMail(request.body);
    const {result, error} = await resultObject;
    if(error){
        return response.status(500).json({
            result:null,
            error:error
        });
    }
    return response.json({
        result:"Tutto Okay",
        error:null
    })
})

app.use('/orders', ordersRouter);

app.use("/products", productRouter);

app.use("/categories", categoryRouter)

app.use("/payments", paymentsRouter);

app.use(notFound);
app.use(errorHandler);


app.listen(port, error => {
    if(error){
        console.error(error.message);
        return;
    }
    console.log("Server in ascolto sulla porta: ", port);
})
