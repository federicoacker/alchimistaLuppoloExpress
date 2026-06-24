import Stripe from "stripe";
import connection from '../db/db.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent(request, response, next) {
    try {
        const { cartItems } = request.body;

        //Validazione carrello
        if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
            return response.status(400).json({
                message: "Carrello non valido",
            });
        }

        //Totale da inviare a Stripe, espresso in centesimi
        let amount = 0;

        for (const item of cartItems) {
            const { slug, quantity } = item;


            //Controllo che prodotto e quantità siano validi
            if (!slug || !quantity || quantity <= 0) {
                return response.status(400).json({
                    message: "Prodotto o quantità non validi",
                });
            }

            //Recupero il prezzo dal database, non dal frontend
            const [products] = await connection.query(
                "SELECT id, price FROM products WHERE slug = ?",
                [slug]
            );

            //Se il prodotto non esiste, blocco il pagamento
            if (products.length === 0) {
                return response.status(404).json({
                    message: `Prodotto con slug ${slug} non trovato`,
                });
            }

            const product = products[0];

            //Converto il prezzo in centesimi e lo sommo al totale
            amount += (Number(product.price) * 100) * quantity;
        }

        //Controllo finale sul totale calcolato
        if (!amount || amount <= 0) {
            return response.status(400).json({
                message: "Importo ordine non valido",
            });
        }

        //Crea un pagamento
        //Importo: amount
        //Valuta: euro
        //Metodi di pagamento: gestiti automaticamente da Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "eur",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        response.json({
            clientSecret: paymentIntent.client_secret,
            totalPrice: (amount / 100).toFixed(2),
        });
    } catch (error) {
        next(error);
    }
}

export { createPaymentIntent };