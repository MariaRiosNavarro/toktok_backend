import UserLogin from "../../components/SignInUp/UserLogin";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = () => {
    console.log("Register Fetch");
  };
  return (
    <>
      <UserLogin
        headline="Create your Account"
        onSubmit={handleRegister}
        btn_text="Sign up"
        subtext="Already have an account"
        subLink="/login"
        subLink_text="Sign in"
      />
    </>
  );
};

export default Register;
