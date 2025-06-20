export default function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      className={`bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
