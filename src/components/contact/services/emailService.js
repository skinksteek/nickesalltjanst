import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
console.log("SERVICE_ID:", SERVICE_ID);
console.log("TEMPLATE_ID:", TEMPLATE_ID);
console.log("PUBLIC_KEY:", PUBLIC_KEY);

export async function sendContact(formData) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
}
