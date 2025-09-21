import Button from "../components/Button";

const MessageSuccess = ({ setMessageSent }) => (
  <div className="message-box">
    <p>Meddelande skickat, jag hör av mig snarast</p>
    <Button
      text="Tillbaka till Hem"
      href="/hem"
      onClick={() => setMessageSent?.(false)}
    />
  </div>
);

export default MessageSuccess;
