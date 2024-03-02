import { Link } from "react-router-dom";
import logo from "../assets/chatlogo.png";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col justify-center gap-1 items-center min-w-96">
      <form
        className="flex flex-col gap-5 px-10 py-6 formCont w-full backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-3 justify-center">
          <img src={logo} alt="frenzychat" className="h-10 w-10" />
          <h1 className="text-3xl text-white tracking-wide font-signature">
            Freaky<span className="text-green-500">Chatt</span>
          </h1>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          name="username"
          className="inputClass"
          value={inputs.fullName}
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="inputClass"
          value={inputs.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          className="inputClass"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="Password"
          className="inputClass"
          value={inputs.confirmPassword}
          onChange={(e) =>
            setInputs({ ...inputs, confirmPassword: e.target.value })
          }
        />

        <GenderCheckBox
          onCheckboxChange={handleCheckboxChange}
          selectedGender={inputs.gender}
        />

        <div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600"
          >
            Already have an account ?
          </Link>
        </div>

        <button type="submit" className="button">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
