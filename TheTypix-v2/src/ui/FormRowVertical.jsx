function FormRowVertical({ label, error, children }) {
  console.log(children.props.id);
  return (
    <div className="flex flex-col gap-3 py-5 text-green-500">
      {label && (
        <label className="font-medium" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
