import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import SelectLevel from "./SelectLevel";
import { useSettings } from "../context/SettingsContext";
import toast from "react-hot-toast";
import { LETTERS } from "../../utils/constants";

function OptionsForm() {
  const { name, level, ranking, dispatch } = useSettings();
  const nameUsed = ranking?.filter((rank) => rank.name === name);

  function setName(e) {
    dispatch({ type: "setName", payload: e.target.value });
  }

  function setLevel(e) {
    dispatch({ type: "setLevel", payload: Number(e.target.value) });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nameUsed);
    if (nameUsed.length > 0) {
      toast.error("Name already picked!");
      return;
    }
    dispatch({ type: "start" });
  }

  console.log(LETTERS.substring(0, 78));

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
            { value: 3, label: "Level 3" },
            { value: 4, label: "Level 4" },
            { value: 5, label: "Level 5" },
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
