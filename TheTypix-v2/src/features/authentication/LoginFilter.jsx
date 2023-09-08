import Filter from "../../ui/Filter";

function LoginFilter({ onClick }) {
  return (
    <Filter
      onClick={onClick}
      options={[{ label: "Login" }, { label: "Signup" }]}
    />
  );
}

export default LoginFilter;
