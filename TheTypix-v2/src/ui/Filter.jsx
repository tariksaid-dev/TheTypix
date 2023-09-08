import Button from "./Button";

function Filter({ options, onClick }) {
  return (
    <div className=" border-solid flex gap-2 justify-end">
      {options.map((option) => (
        <Button type="primary" key={option.label} onClick={onClick}>
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
