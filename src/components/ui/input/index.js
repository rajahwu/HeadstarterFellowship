export default function input({ inputText }) {
  return (
    <input
      type="text"
      placeholder={inputText}
      className="input w-full max-w-xs"
    />
  );
}
