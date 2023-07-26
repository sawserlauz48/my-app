import { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import { useNavigate } from "react-router-dom";
import validateRegisterSchema from "../validations/registerValidation";
import { toast } from "react-toastify";
import ROUTES from "../routes/ROUTES";
const inputs = [
  { label: "Email", name: "email", isRiq: true },
  { label: "Password", name: "password", isRiq: true, type: "password" },
  {
    label: "Conferm password",
    name: "passwordCon",
    isRiq: true,
    type: "password",
  },
];
const AddressInputs = [
  { label: "Country", name: "country", isRiq: true },
  { label: "City", name: "city", isRiq: true },
  { label: "Street", name: "street", isRiq: true },
  { label: "House number", name: "houseNumber", isRiq: true },
];
const imageInputs = [
  { label: "Image Url", name: "imageUrl", isRiq: false },
  { label: "Image Alt", name: "imageAlt", isRiq: false },
];
const nameInputs = [
  { label: "First name", name: "firstName", isRiq: true },
  { label: "Last name", name: "lastName", isRiq: true },
  { label: "Phone", name: "phone", isRiq: true, type: "number" },
];

const RegisterPage = () => {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    imageUrl: "",
    imageAlt: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [inputsErrorsState, setInputsErrorsState] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const joiResponse = validateRegisterSchema(inputState);
    setInputsErrorsState(joiResponse);
    handleDisabledBtn();
  }, [inputState]);
  const handleDisabledBtn = () => {
    const joiResponse = validateRegisterSchema(inputState);
    if (!joiResponse) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
  };
  const handleSignInBtn = async (ev) => {
    try {
      const joiResponse = validateRegisterSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }
      await axios.post("/users/register", {
        name: {
          firstName: inputState.firstName,
          lastName: inputState.lastName,
        },
        email: inputState.email,
        password: inputState.password,
        phone: inputState.phone,
        address: {
          country: inputState.country,
          city: inputState.city,
          street: inputState.street,
          houseNumber: inputState.houseNumber,
        },
        image: {
          url: inputState.imageUrl,
          alt: inputState.imageAlt,
        },
      });
      navigate(ROUTES.LOGIN);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="grid grid-cols-1 w-3/4 bg-lightmode-accent dark:bg-darkmode-accent p-[48px] rounded-lg  overflow-auto ">
      <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
        Sign up
      </h5>
      {inputs.map((input) => (
        <div key={input.label}>
          <InputComponent
            label={input.label}
            name={input.name}
            required={input.isRiq}
            onChange={handleInputChange}
            inputsErrorsState={inputsErrorsState}
            // type={input.type}
            inputState={inputState}
          ></InputComponent>
        </div>
      ))}
      <div className="registerNamesInput grid grid-cols-2 gap-5 mt-5">
        {nameInputs.map((input) => (
          <div key={input.name}>
            <InputComponent
              label={input.label}
              name={input.name}
              isRiq={input.isRiq}
              onChange={handleInputChange}
              inputsErrorsState={inputsErrorsState}
              // type={input.type}
              inputState={inputState}
            ></InputComponent>
          </div>
        ))}
      </div>
      <div className="registerNamesInput grid grid-cols-2 gap-5 mt-5">
        {AddressInputs.map((input) => (
          <div key={input.label}>
            <InputComponent
              label={input.label}
              name={input.name}
              isRiq={input.isRiq}
              onChange={handleInputChange}
              inputsErrorsState={inputsErrorsState}
              // type={input.type}
              inputState={inputState}
            ></InputComponent>
          </div>
        ))}
      </div>
      <div className="registerNamesInput grid grid-cols-1 gap-5 mt-5 mb-10">
        {imageInputs.map((input) => (
          <div key={input.label}>
            <InputComponent
              key={input.name + Date.now()}
              label={input.label}
              name={input.name}
              isRiq={input.isRiq}
              onChange={handleInputChange}
              inputsErrorsState={inputsErrorsState}
              // type={input.type}
              inputState={inputState}
            ></InputComponent>
          </div>
        ))}
      </div>
      <ButtonComponent label={"Sign up"}></ButtonComponent>

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button{" "}
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegisterPage;
