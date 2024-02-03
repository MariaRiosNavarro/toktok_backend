import UserLogin from "../../components/SignInUp/UserLogin";
import LoadingSpin from "../../components/LoadingSpin";

const Login = () => {
  return (
    <>
      <UserLogin
        authComponent="login"
        headline="Login to your Account"
        btn_text="Sign in"
        subtext="Don´t have an account?"
        subLink="/sign-up"
        subLink_text="Sign up"
        extra_formLink="/"
        extra_formText="Forgot the Password?"
      />
    </>
  );
};

export default Login;
