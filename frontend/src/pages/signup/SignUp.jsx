import { Link } from "react-router-dom";
import logo from "../assets/chatlogo.png";
import GenderCheckBox from "./GenderCheckBox";
function SignUp() {
  return (
    <div className="flex flex-col justify-center gap-1 items-center min-w-96">
      <form className="flex flex-col gap-6 px-10 py-6 formCont w-full backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-2xl">
        <div className="flex items-center gap-3 justify-center">
          <img src={logo} alt="frenzychat" className="h-10 w-10" />
          <h1 className="text-2xl text-white tracking-wide font-signature">
            Freaky<span className="text-green-500">Chatt</span>
          </h1>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          name="username"
          className="inputClass"
          // onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="inputClass"
          // onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          className="inputClass"
          // onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="Password"
          className="inputClass"
          // onChange={(e) => handleChange(e)}
        />
        <div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600"
          >
            Already have an account ?
          </Link>
        </div>
        <GenderCheckBox />
        <button type="submit" className="button">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default SignUp;
