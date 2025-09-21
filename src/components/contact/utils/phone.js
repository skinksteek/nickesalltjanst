// Tillåt +46XXXXXXXXX eller 0XXXXXXXXX (7–12 siffror efter prefixet)
export const PHONE_REGEX = /^(?:\+46\d{7,12}|0\d{7,12})$/;

export const normalizePhone = (v) => {
  if (!v) return "";
  let s = v.replace(/[^\d+]/g, ""); // behåll siffror + ev. +
  s = s.replace(/\+(?=.)/g, ""); // ta bort alla + utom ev. första
  if (v.trim().startsWith("+")) s = "+" + s.replace(/\+/g, "");
  return s;
};
