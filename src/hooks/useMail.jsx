import emailjs from "@emailjs/browser"

const servID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function useMail() {

    async function sendConfirmation(email) {
        await emailjs.send(servID, templID, {to_email: email}, { publicKey: publicKey})
    }

    return {
        sendConfirmation
    }

}