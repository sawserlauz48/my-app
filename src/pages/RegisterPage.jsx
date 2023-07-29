import { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import { useNavigate } from "react-router-dom";
import validateRegisterSchema from "../validations/registerValidation";
import { toast } from "react-toastify";
import ROUTES from "../routes/ROUTES";
import axios from "axios";
const inputs = [
  { label: "Email *", name: "email", isRiq: true, type: "email" },
  {
    label: "Password *",
    name: "password",
    isRiq: true,
    type: "password",
  },
  {
    label: "Confirm password *",
    name: "passwordConfirm",
    isRiq: true,
    type: "password",
  },
];
const AddressInputs = [
  { label: "Country *", name: "country", isRiq: true },
  { label: "City *", name: "city", isRiq: true },
  { label: "Street *", name: "street", isRiq: true },
  { label: "House number *", name: "houseNumber", isRiq: true },
];
const imageInputs = [
  { label: "Image Url", name: "imageUrl", isRiq: false },
  { label: "Image Alt", name: "imageAlt", isRiq: false },
];
const nameInputs = [
  { label: "First name *", name: "firstName", isRiq: true },
  { label: "Last name *", name: "lastName", isRiq: true },
  { label: "Phone *", name: "phone", isRiq: true, type: "number" },
];

const RegisterPage = () => {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
    imageUrl: "",
    imageAlt: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
  });
  const [inputsErrorsState, setInputsErrorsState] = useState();
  const navigate = useNavigate();

  useEffect(() => {}, [inputState]);

  const handleInputChange = (event) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[event.target.id] = event.target.value;
    setInputState(newInputState);
  };

  const handleSignInBtn = async () => {
    try {
      const joiResponse = validateRegisterSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }
      await axios.post("http://localhost:8181/api/users/", {
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
      console.log(err);
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
            type={input.type}
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
              required={input.isRiq}
              onChange={handleInputChange}
              inputsErrorsState={inputsErrorsState}
              type={input.type}
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
              required={input.isRiq}
              onChange={handleInputChange}
              inputsErrorsState={inputsErrorsState}
              type={input.type}
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
              required={input.isRiq}
              onChange={handleInputChange}
              inputsErrorsState={inputsErrorsState}
              type={input.type}
              inputState={inputState}
            ></InputComponent>
          </div>
        ))}
      </div>
      <ButtonComponent
        onclick={handleSignInBtn}
        // isDisable={isDisable}
        label={"Sign up"}
      ></ButtonComponent>
    </div>
  );
};

export default RegisterPage;
