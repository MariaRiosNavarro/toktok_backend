import UserLogin from "../../components/SignInUp/UserLogin";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <UserLogin
        authComponent="register"
        headline="Register your Account"
        btn_text="Sign up"
        subtext="To send new code go to:"
        subLink="/sign-up"
        subLink_text="Sign up"
      />
    </>
  );
};

export default Register;
