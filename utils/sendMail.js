import { selectOrderById } from "../db/queries/selectOrderById.js";
import getTransporter from "./nodemail.js";
import { validateNumber } from "./validation/validateNumber.js";
import { isValidEmail } from "./validation/validateOrderPayload.js";

async function sendMail(emailPayload) {
    let emailResponse = "";
    let emailToSeller = "";
    let isNewsLetter = false;

    const transporter = await getTransporter();

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
                <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.08); text-transform:capitalize;">
                    ${product.name}
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
        <section style="background: #17120f; position:relative; padding:32px; border:2px solid rgba(200,155,60,0.25); pointer-events:none; font-family: Arial, Helvetica, sans-serif;">

            <h1 style="color: #f3ecd7; font-size: 28px; margin: 0 0 16px;">
                Nuovo ordine ricevuto
            </h1>

            <p style="color: #e9e3d5; margin: 0 0 32px;">
                Un cliente ha completato un nuovo ordine su "L'Alchimista Del Luppolo".
            </p>

            <h2 style="color: #f3ecd7; font-size: 20px; margin: 0 0 16px;">
                Dati cliente
            </h2>

            <table style="color: #f3ecd7; border:2px solid rgba(200,155,60,0.25); border-collapse: collapse; width: 100%; max-width: 800px; margin-bottom: 32px;">
                <tr>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); color: #bfa56a; font-weight: bold;">
                        Nome
                    </td>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                        ${order.result.first_name}
                    </td>
                </tr>

                <tr>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); color: #bfa56a; font-weight: bold;">
                        Cognome
                    </td>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                        ${order.result.last_name}
                    </td>
                </tr>

                <tr>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); color: #bfa56a; font-weight: bold;">
                        Email
                    </td>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                        ${order.result.email}
                    </td>
                </tr>

                <tr>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); color: #bfa56a; font-weight: bold;">
                        Telefono
                    </td>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                        ${order.result.phone}
                    </td>
                </tr>

                <tr>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); color: #bfa56a; font-weight: bold;">
                        Indirizzo
                    </td>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                        ${order.result.address_line_1}
                    </td>
                </tr>

                <tr>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); color: #bfa56a; font-weight: bold;">
                        Città
                    </td>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                        ${order.result.city}
                    </td>
                </tr>

                <tr>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25); color: #bfa56a; font-weight: bold;">
                        CAP
                    </td>
                    <td style="padding: 12px; border:1px solid rgba(200,155,60,0.25);">
                        ${order.result.postal_code}
                    </td>
                </tr>
            </table>

            <h2 style="color: #f3ecd7; font-size: 20px; margin: 0 0 16px;">
                Riepilogo ordine
            </h2>

            <table style="color: #f3ecd7; border:2px solid rgba(200,155,60,0.25); border-collapse: collapse; width: 100%; max-width: 800px; margin-bottom: 32px;">
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
                    <td style="padding: 14px 12px; border:1px solid rgba(200,155,60,0.35); background: rgba(200,155,60,0.08); color: #f3ecd7; font-weight: bold; text-align: right; font-size: 18px;">
                        &euro; ${order.result.total_price}
                    </td>
                </tr>
            </table>

            <h2 style="color: #f3ecd7; font-size: 20px; margin: 0 0 16px;">
                Prodotti ordinati
            </h2>

            ${customerProductTable}

        </section>
        `;

        emailResponse = `
        <section style="background: #17120f; position:relative; padding:32px; border:2px solid rgba(200,155,60,0.25); pointer-events:none; font-family: Arial, Helvetica, sans-serif;">

            <h1 style="color: #f3ecd7; font-size: 28px; margin: 0 0 16px;">
                Grazie per aver scelto "L'Alchimista Del Luppolo"
            </h1>

            <p style="color: #e9e3d5; margin: 0 0 32px;">
                Grazie per aver comprato da noi, ecco qui il riepilogo del tuo ordine.
            </p>

            <div>
                <h2 style="color: #f3ecd7; font-size: 20px; margin: 0 0 16px;">
                    Riepilogo ordine
                </h2>

                <table style="color: #f3ecd7; border:2px solid rgba(200,155,60,0.25); border-collapse: collapse; width: 100%; max-width: 600px; margin-bottom: 32px;">
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
                        <td style="padding: 14px 12px; border:1px solid rgba(200,155,60,0.35); background: rgba(200,155,60,0.08); color: #f3ecd7; font-weight: bold; text-align: right; font-size: 18px;">
                            &euro; ${order.result.total_price}
                        </td>
                    </tr>
                </table>

                <h2 style="color: #f3ecd7; font-size: 20px; margin: 0 0 16px;">
                    Prodotti acquistati
                </h2>

                ${customerProductTable}
            </div>

            <p style="color: #f3ecd7; margin-top: 32px;"> 
                Se pensi che ci sia un errore, rispondi pure a questa mail.
            </p>

        </section>
        `;
    } else {
        emailResponse = `
        <section style="background: #17120f; position:relative; padding:32px; border:2px solid rgba(200,155,60,0.25); pointer-events:none; font-family: Arial, Helvetica, sans-serif;">
            <h1 style="color: #f3ecd7; font-size: 28px; margin: 0 0 16px;">
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
                subject: "Nuovo ordine ricevuto - L'Alchimista Del Luppolo",
                html: emailToSeller
            });
        }

        const info = await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: emailPayload.email,
            subject: "Thank you!",
            html: emailResponse
        });

        return { error: null, result: "Tutto Okay" };
    } catch (error) {
        console.error("Errore nel mandare la email: ", error);
        return { error: "Impossibile mandare la mail", result: null };
    }
}

export default sendMail;