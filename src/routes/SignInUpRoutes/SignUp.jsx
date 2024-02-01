import UserLogin from "../../components/SignInUp/UserLogin";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <UserLogin
        authComponent="signUp"
        headline="Create your Account"
        btn_text="Sign up"
        subtext="Already have an account"
        subLink="/login"
        subLink_text="Sign in"
      />
    </>
  );
};

export default SignUp;
