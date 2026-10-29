import emailjs from "@emailjs/browser"

const servID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const ConTemplID = import.meta.env.VITE_EMAILJS_CON_TEMPLATE_ID;
const NewTemplID = import.meta.env.VITE_EMAILJS_NEW_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function useMail() {

    async function sendConfirmation(email) {
        await emailjs.send(servID, ConTemplID, {to_email: email}, { publicKey: publicKey})
    }

    async function sendNewBlogMail(email) {
        await emailjs.send(servID, NewTemplID, {to_email: email}, {publicKey: publicKey})
    }

    return {
        sendConfirmation,
        sendNewBlogMail
    }

}