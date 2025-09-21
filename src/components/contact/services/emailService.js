import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.SERVICE_ID;
const TEMPLATE_ID = import.meta.env.TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;

export async function sendContact(formData) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
}
