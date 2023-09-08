import { useState } from "react";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import SignupForm from "../features/authentication/SignupForm";
import LoginFilter from "../features/authentication/LoginFilter";

function Login() {
  const [loginOrRegister, setLoginOrRegister] = useState(true);

  return (
    <main className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-14 bg-gray-950">
      <Logo />
      <LoginFilter onClick={() => setLoginOrRegister(!loginOrRegister)} />

      {loginOrRegister === true ? <LoginForm /> : <SignupForm />}
    </main>
  );
}

export default Login;
