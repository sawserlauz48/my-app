import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import CheckboxComponent from "../components/CheckboxComponent";

const LoginPage = () => {
  return (
    <div className="loginDiv rounded-md bg-lightmode-accent ">
      <h1 className=" text-3xl mb-3">Sign in</h1>
      <h2 className="mb-6">to continue to Anatolia</h2>
      <InputComponent placeholder="E-mail"></InputComponent>
      <InputComponent placeholder="Password"></InputComponent>
      <CheckboxComponent name={"remember me"}></CheckboxComponent>
      <div className="BtnsLogin flex space-x-28">
        <ButtonComponent label={"Create account"}></ButtonComponent>
        <ButtonComponent label={"Login"}></ButtonComponent>
      </div>
    </div>
  );
};

export default LoginPage;
