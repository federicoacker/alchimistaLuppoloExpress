import express from 'express';
import cors from 'cors';

// Importazione dei router
import ordersRouter from './routers/orders.js';

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.static(`public`));
app.use(express.json());

// Configurazione dei router
app.use('/orders', ordersRouter);

app.listen(port, error => {
    if(error){
        console.error(error.message);
        return;
    }
    console.log("Server in ascolto sulla porta: ", port);
})
