import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <main className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-14 bg-gray-950">
      <Logo />
      <LoginForm />
    </main>
  );
}

export default Login;
