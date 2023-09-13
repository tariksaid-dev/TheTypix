function FormRowHorizontal({ label, error, children }) {
  return (
    <div className="grid gap-3 py-5 text-green-500 items-center grid-cols-[12rem_1fr] ">
      {label && (
        <label className="font-medium " htmlFor={children.props.id}>
          {label}
        </label>
      )}
      <span className="text-2xl">{children}</span>
      {error && <span className="text-sm">{error}</span>}
    </div>
  );
}

export default FormRowHorizontal;
