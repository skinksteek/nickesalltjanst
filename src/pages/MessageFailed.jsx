import Button from "../components/Button";

const MessageFailed = ({ setMessageSent }) => (
  <div className="message-box">
    <p>Något gick fel, skicka meddelande misslyckat</p>
    <Button
      text="Försök igen"
      href="/kontakt"
      onClick={() => setMessageSent?.(false)}
    />
  </div>
);

export default MessageFailed;
