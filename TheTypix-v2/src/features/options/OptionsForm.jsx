import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import SelectLevel from "./SelectLevel";
import { useSettings } from "../context/SettingsContext";

function OptionsForm() {
  const { name, level, dispatch } = useSettings();

  function setName(e) {
    dispatch({ type: "setName", payload: e.target.value });
  }

  function setLevel(e) {
    dispatch({ type: "setLevel", payload: Number(e.target.value) });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "start" });
  }

  return (
    <form
      className="border border-solid border-gray-500 py-10 px-16 bg-gray-900"
      onSubmit={handleSubmit}
    >
      <FormRowVertical label="User name">
        <Input
          type="text"
          id="username"
          autoComplete="username"
          value={name}
          onChange={setName}
        />
      </FormRowVertical>

      <FormRowVertical label="Level">
        <SelectLevel
          value={level}
          options={[
            { value: 1, label: "Level 1" },
            { value: 2, label: "Level 2" },
          ]}
          onChange={setLevel}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button type="primary">Play</Button>
      </FormRowVertical>
    </form>
  );
}

export default OptionsForm;
