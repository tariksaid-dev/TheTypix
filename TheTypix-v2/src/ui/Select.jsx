function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      // className="text-xl py-3 px-5 border-solid border font-medium"
      className="border border-solid border-gray-600 py-3 px-5 bg-gray-950 font-bold"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
