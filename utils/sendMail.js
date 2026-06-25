import { selectOrderById } from "../db/queries/selectOrderById.js";
import getTransporter from "./nodemail.js";
import { validateNumber } from "./validation/validateNumber.js";
import { isValidEmail } from "./validation/validateOrderPayload.js";

async function sendMail(emailPayload) {
    let emailResponse = "";
    let emailToSeller = "";
    let isNewsLetter = false;

    const transporter = await getTransporter();
    console.log(transporter);

    if (!isValidEmail(emailPayload.email)) {
        return { error: "Email inserita non valida", result: null };
    }

    if (!emailPayload.orderId) {
        isNewsLetter = true;
    }

    if (!isNewsLetter) {
        const orderId = validateNumber(emailPayload.orderId);

        if (!orderId || orderId < 0) {
            return null;
        }

        const order = await selectOrderById(orderId);

        let productTable = `
        <table style="color: #e9e3d5;">
            <tr>
                <th>Immagine Prodotto</th>
                <th>Prodotto</th>
                <th>Quantità</th>
            </tr>
        `;

        for (const product of emailPayload.products) {
            productTable += `
            <tr>
                <td>
                    <img src="${process.env.PRODUCT_IMG_PATH}/${product.product_slug}.webp">
                </td>
                <td>${product.product_slug}</td>
                <td>${product.quantity}</td>
            </tr>
            `;
        }

        productTable += "</table>";

        let customerProductTable = `
        <table style="color: #e9e3d5; width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 1rem;">
            <tr>
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid rgba(200,155,60,0.35); color: #bfa56a;">
                    Prodotto
                </th>
                <th style="text-align: center; padding: 10px; border-bottom: 1px solid rgba(200,155,60,0.35); color: #bfa56a;">
                    Quantità
                </th>
                <th style="text-align: right; padding: 10px; border-bottom: 1px solid rgba(200,155,60,0.35); color: #bfa56a;">
                    Prezzo
                </th>
            </tr>
        `;

        for (const product of emailPayload.products) {
            customerProductTable += `
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.08);">
                    ${product.product_slug.replaceAll("-", " ")}
                </td>
                <td style="padding: 10px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08);">
                    ${product.quantity}
                </td>
                <td style="padding: 10px; text-align: right; border-bottom: 1px solid rgba(255,255,255,0.08);">
                    &euro; ${Number(product.product_price).toFixed(2)}
                </td>
            </tr>
            `;
        }

        customerProductTable += "</table>";

        emailToSeller = `
        <section style="background: #17120f; position:relative; padding:2rem; border:2px solid rgba(200,155,60,0.25); pointer-events:none;">
            <h1 style="color: #f3ecd7; font-size: 2rem;">
                Grazie per aver scelto "L'Alchimista Del Luppolo"
            </h1>

            <p style="color: #e9e3d5;">
                Un nostro utente ha acquistato dei prodotti dalla tua azienda!
            </p>

            <div>
                <table style="color: #f3ecd7; border:2px solid rgba(200,155,60,0.25);">
                    <tr>    
                        <th>Prezzo Totale</th>
                        <th>Prezzo dei Prodotti</th>
                        <th>Prezzo di Consegna</th>
                    </tr>
                    <tr>
                        <td>&euro; ${order.result.total_price}</td>
                        <td>&euro; ${order.result.products_price}</td>
                        <td>&euro; ${order.result.shipping_price}</td>
                    </tr>
                </table>

                ${productTable}
            </div>

            <table style="color: #f3ecd7; border:2px solid rgba(200,155,60,0.25);">
                <tr>
                    <th>Indirizzo email del cliente</th>
                    <th>Indirizzo di fatturazione</th>
                    <th>Numero di telefono del cliente</th>
                    <th>Nome Cliente</th>
                    <th>Cognome Cliente</th>
                </tr>
                <tr>    
                    <td>${order.result.email}</td>
                    <td>${order.result.address_line_1}</td>
                    <td>${order.result.phone}</td>
                    <td>${order.result.first_name}</td>
                    <td>${order.result.last_name}</td>
                </tr>
            </table>
        </section>
        `;

        emailResponse = `
        <section style="background: #17120f; position:relative; padding:2rem; border:2px solid rgba(200,155,60,0.25); pointer-events:none; font-family: Arial, Helvetica, sans-serif;">

            <h1 style="color: #f3ecd7; font-size: 2rem; margin-bottom: 1rem;">
                Grazie per aver scelto "L'Alchimista Del Luppolo"
            </h1>

            <p style="color: #e9e3d5; margin-bottom: 2rem;">
                Grazie per aver comprato da noi, ecco qui il riepilogo del tuo ordine.
            </p>

            <div>
                <h2 style="color: #f3ecd7; font-size: 1.3rem; margin-bottom: 1rem;">
                    Riepilogo ordine
                </h2>

                <table style="color: #f3ecd7; border:2px solid rgba(200,155,60,0.25); border-collapse: collapse; width: 100%; max-width: 600px; margin-bottom: 2rem;">
                    <tr>
                        <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                            Prezzo dei prodotti
                        </td>
                        <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); text-align: right;">
                            &euro; ${order.result.products_price}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                            Prezzo di consegna
                        </td>
                        <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); text-align: right;">
                            &euro; ${order.result.shipping_price}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 14px 12px; border:1px solid rgba(200,155,60,0.35); background: rgba(200,155,60,0.08); color: #bfa56a; font-weight: bold;">
                            Prezzo totale
                        </td>
                        <td style="padding: 14px 12px; border:1px solid rgba(200,155,60,0.35); background: rgba(200,155,60,0.08); color: #f3ecd7; font-weight: bold; text-align: right; font-size: 1.2rem;">
                            &euro; ${order.result.total_price}
                        </td>
                    </tr>
                </table>

                <h2 style="color: #f3ecd7; font-size: 1.3rem; margin-bottom: 1rem;">
                    Prodotti acquistati
                </h2>

                ${customerProductTable}
            </div>

            <p style="color: #f3ecd7; margin-top: 2rem;"> 
                Se pensi che ci sia un errore, rispondi pure a questa mail.
            </p>

        </section>
        `;
    } else {
        emailResponse = `
        <section style="background: #17120f; position:relative; padding:2rem; border:2px solid rgba(200,155,60,0.25); pointer-events:none;">
            <h1 style="color: #f3ecd7; font-size: 2rem;">
                Grazie per aver scelto "L'Alchimista Del Luppolo"
            </h1>

            <p style="color: #e9e3d5;">
                Grazie per esserti unito alla nostra newsletter. Riceverai aggiornamenti sulle ultime birre, e sugli ultimi processi innovativi di fermentazione!
            </p>
        </section>
        `;
    }

    try {
        if (!isNewsLetter) {
            await transporter.sendMail({
                from: process.env.NODEMAILER_USER,
                to: process.env.NODEMAILER_USER,
                subject: "You have an order!",
                html: emailToSeller
            });
        }

        const info = await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: emailPayload.email,
            subject: "Thank you!",
            html: emailResponse
        });

        console.log(info);

        return { error: null, result: "Tutto Okay" };
    } catch (error) {
        console.error("Errore nel mandare la email: ", error);
        return { error: "Impossibile mandare la mail", result: null };
    }
}

export default sendMail;