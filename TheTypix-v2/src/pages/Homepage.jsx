import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useState } from "react";
import LoginForm from "../features/authentication/LoginForm";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <LoginForm />
      <Button type="primary" onClick={() => navigate(`/game/${name}`)}>
        Start
      </Button>
    </>
  );
}

export default Homepage;
