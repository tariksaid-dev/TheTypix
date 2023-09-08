import { useState } from "react";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function SignupForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {}

  return (
    <form
      className="border border-solid border-gray-500 py-10 px-16 bg-gray-900"
      onSubmit={handleSubmit}
    >
      <FormRowVertical label="New user name">
        <Input
          type="text"
          id="username"
          autoComplete="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="New user password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button type="primary">Sign Up</Button>
      </FormRowVertical>
    </form>
  );
}

export default SignupForm;
