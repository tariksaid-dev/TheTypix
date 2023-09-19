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
