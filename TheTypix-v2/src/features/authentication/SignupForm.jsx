import { useState } from "react";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isLoading } = useSignup();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ username, password }) {
    signup(
      {
        username,
        password,
      },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <form
      className="border border-solid border-gray-500 py-10 px-16 bg-gray-900"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRowVertical label="New user name" error={errors?.username?.message}>
        <input
          type="text"
          id="username"
          disabled={isLoading}
          // autoComplete="username"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          {...register("username", { required: "This field is required" })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="New user password"
        error={errors?.password?.message}
      >
        <input
          type="password"
          id="password"
          disabled={isLoading}
          // autoComplete="current-password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          {...register("password", { required: "This field is required" })}
          // disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button type="primary" onClick={reset} disabled={isLoading}>
          Sign Up
        </Button>
      </FormRowVertical>
    </form>
  );
}

export default SignupForm;
