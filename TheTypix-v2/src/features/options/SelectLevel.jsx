import Select from "../../ui/Select";

function SelectLevel({ options, onChange, value }) {
  return <Select options={options} onChange={onChange} value={value} />;
}

export default SelectLevel;
