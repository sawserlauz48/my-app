import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import CheckboxComponent from "../components/CheckboxComponent";

const LoginPage = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-lightmode-accent border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
          Sign in
        </h5>
        <h4 className="text-md font-medium text-gray-900 dark:text-white text-center">
          to continue to Anatolia
        </h4>
        <div>
          <InputComponent label={"E-mail"} id={"email"}></InputComponent>
        </div>
        <div>
          <InputComponent label={"Password"} id={"password"}></InputComponent>
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <CheckboxComponent label={"Remember me"} />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>
          </div>
        </div>
        <ButtonComponent label={"Sign in"}></ButtonComponent>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <a
            href="#"
            className="ml-1 text-lightmode-pBtn hover:underline dark:text-lightmode-pBtn"
          >
            Create account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
