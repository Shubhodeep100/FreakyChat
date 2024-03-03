import { Link } from "react-router-dom";
import logo from "../assets/chatlogo.png";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-row justify-between items-center mx-6">
      <div className="text-white text-3xl font-bold text-wrap sm:text-4xl md:text-7xl">
        <h1>Never miss a loved ones message.</h1>
        <h1 className="text-gray-500 font-txt">Join today.</h1>
      </div>
      <form
        className="flex flex-col gap-5 px-10 py-6 formCont min-w-96 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-3xl"
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
          className="inputClass"
          value={inputs.fullName}
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          className="inputClass"
          value={inputs.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputClass"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
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

        <button type="submit" className="button" disabled={loading}>
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
