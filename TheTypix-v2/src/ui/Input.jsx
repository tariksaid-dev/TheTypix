function Input({ type, id, autoComplete, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      className="border border-solid border-gray-600 py-3 px-5 bg-gray-950 font-bold"
    />
  );
}

export default Input;

// border: 1px solid var(--color-grey-300);
// background-color: var(--color-grey-0);
// border-radius: var(--border-radius-sm);
// box-shadow: var(--shadow-sm);
// padding: 0.8rem 1.2rem;
