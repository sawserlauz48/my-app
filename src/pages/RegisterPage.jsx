import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";

const RegisterPage = () => {
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
  return (
    <div className="grid grid-cols-1 w-3/4 bg-lightmode-accent dark:bg-darkmode-accent p-[48px] rounded-lg md:w-1/2 overflow-auto ">
      <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
        Sign up
      </h5>
      {inputs.map((input) => (
        <div key={input.label}>
          <InputComponent
            label={input.label}
            name={input.name}
            isRiq={input.isRiq}
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
            ></InputComponent>
          </div>
        ))}
      </div>
      <ButtonComponent label={"Sign up"}></ButtonComponent>
    </div>
  );
};

export default RegisterPage;
