import UserLogin from "../../components/SignInUp/UserLogin";

const Login = () => {
  const handleLogin = () => {
    console.log("Login Fetch");
  };
  return (
    <>
      <UserLogin
        headline="Login to your Account"
        onSubmit={handleLogin}
        btn_text="Sign in"
        subtext="Don´t have an account?"
        subLink="/register"
        subLink_text="Sign up"
        extra_formLink="/"
        extra_formText="Forgot the Password?"
      />
    </>
  );
};

export default Login;
