import { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import { toast } from "react-toastify";
import axios from "axios";
import jwt_decode from "jwt-decode";
import validateProfileSchema from "../validations/profileValidation";
import imagePlace from "../images/DSC_2477.JPG";

const inputs = [
  { label: "Email *", name: "email", isRiq: true, type: "email" },
  { label: "Phone *", name: "phone", isRiq: true, type: "number" },
];
const AddressInputs = [
  { label: "Country *", name: "country", isRiq: true },
  { label: "City *", name: "city", isRiq: true },
  { label: "Street *", name: "street", isRiq: true },
  { label: "House number *", name: "houseNumber", isRiq: true },
];

const nameInputs = [
  { label: "First name *", name: "firstName", isRiq: true },
  { label: "Last name *", name: "lastName", isRiq: true },
];
const initailState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  street: "",
  houseNumber: "",
  imageUrl: "",
  imageAlt: "",
};
const ProfilePage = () => {
  const [inputState, setInputState] = useState(initailState);
  const [inputsErrorsState, setInputsErrorsState] = useState(null);
  const [imageState, setImageState] = useState({ myFile: "" });

  const payload = jwt_decode(localStorage.getItem("token"));

  const id = payload._id;
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/users/" + id);
        let newInputState = {
          ...data,
        };
        console.log(newInputState, "newInputState");
        if (data.userById.image && data.userById.image.data) {
          newInputState.userById.data = data.userById.image.data;
        } else {
          newInputState.userById.imageUrl = "";
        }
        if (data.userById.image && data.userById.image.alt) {
          newInputState.userById.imageAlt = data.userById.image.alt;
        } else {
          newInputState.userById.imageAlt = "";
        }
        if (data.userById.address && data.userById.address.country) {
          newInputState.userById.country = data.userById.address.country;
        }
        if (data.userById.address && data.userById.address.city) {
          newInputState.userById.city = data.userById.address.city;
        }
        if (data.userById.address && data.userById.address.street) {
          newInputState.userById.street = data.userById.address.street;
        }
        if (data.userById.address && data.userById.address.houseNumber) {
          newInputState.userById.houseNumber =
            data.userById.address.houseNumber;
        }
        if (data.userById.name && data.userById.name.firstName) {
          newInputState.userById.firstName = data.userById.name.firstName;
        }
        if (data.userById.name && data.userById.name.lastName) {
          newInputState.userById.lastName = data.userById.name.lastName;
        }
        delete newInputState.userById.isAdmin;
        delete newInputState.userById.isEmployed;
        delete newInputState.userById.isUser;
        delete newInputState.userById.createdAt;
        delete newInputState.userById.image;
        delete newInputState.userById.address;
        delete newInputState.userById.name;
        delete newInputState.userById.__v;
        delete newInputState.userById.cart;
        delete newInputState.userById._id;
        delete newInputState.userById.password;
        delete newInputState.userById.address;
        delete newInputState.userById.name;
        delete newInputState.userById.image;
        setInputState(newInputState.userById);
        setImageState({ ...imageState, myFile: newInputState.userById.data });
        console.log(imageState);
      } catch (err) {
        toast.error(err);
      }
    })();
  }, []);
  const handleInputChange = (event) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[event.target.id] = event.target.value;
    setInputState(newInputState);
  };
  const handleSaveInBtn = async () => {
    try {
      const joiResponse = validateProfileSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }
      await axios.put(`/users/${id}`, {
        name: {
          firstName: inputState.firstName,
          lastName: inputState.lastName,
        },
        email: inputState.email,
        phone: inputState.phone,
        address: {
          country: inputState.country,
          city: inputState.city,
          street: inputState.street,
          houseNumber: inputState.houseNumber,
        },
        image: {
          data: imageState.myFile,
          alt: inputState.imageAlt,
        },
      });
      toast.success("update succesful");
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response);
    }
  };

  const handleFileUplaod = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertTo64(file);
    console.log(base64, "base64");
    setImageState({ ...imageState, myFile: base64 });
  };
  const convertTo64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="grid grid-cols-1 w-3/4 bg-lightmode-accent dark:bg-darkmode-accent p-[48px] rounded-lg  overflow-auto  shadow-xl">
      <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
        Profile Page
      </h5>
      <div className="flex justify-center w-full mt-5">
        <label htmlFor="fileUpload" className="cursor-pointer">
          <img
            src={imageState.myFile}
            alt={""}
            className="w-[200px] h-[200px] rounded-[50%] border-lightmode-pBtn shadow-xl  border-[2px]"
          />
        </label>
        <input
          type="file"
          name="myFile"
          id="fileUpload"
          className=" hidden"
          accept=".jpeg,.png,.jpg"
          onChange={(event) => handleFileUplaod(event)}
        />
      </div>
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
          <div key={input.name + Date.now()}>
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
          <div key={input.label + Date.now()}>
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

      <ButtonComponent
        onClick={handleSaveInBtn}
        label={"Save"}
        className={"w-full px-5 py-2.5 mt-5 mr-2 mb-2"}
      ></ButtonComponent>
    </div>
  );
};

export default ProfilePage;
