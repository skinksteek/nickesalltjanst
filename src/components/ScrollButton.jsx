import Button from "./Button";

export default function ScrollButton({ targetId, text }) {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Button
      type="button"
      text={text}
      onClick={handleScroll}
      className="scroll-button"
    />
  );
}
