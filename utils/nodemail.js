import nodemailer from "nodemailer";


async function getTransporter() {
    const transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: process.env.NODEMAILER_PORT,
        secure: false,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    try {
        await transporter.verify();
        console.log("Il server di mail funziona correttamente");
        return transporter;
    }
    catch (error) {
        console.error("Il server di mail non ha risposto: ", error);
        return null;
    }


}

export default getTransporter;

