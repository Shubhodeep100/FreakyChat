import { Link } from "react-router-dom";
import logo from "../assets/chatlogo.png";
function Login() {
  return (
    <div className="flex flex-row justify-between gap-1 items-center mx-6">
      <div className="text-white text-7xl font-bold text-wrap">
        <h1>Never miss a loved ones message.</h1>
        <h1>Join today.</h1>
      </div>
      <form className="flex flex-col gap-7 px-16 py-14 formCont min-w-96 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-3xl">
        <div className="flex items-center flex-col gap-3 justify-center">
          <img src={logo} alt="frenzychat" className="h-10 w-10" />
          <h1 className="text-3xl text-white tracking-wide font-signature">
            Freaky<span className="text-green-500">Chatt</span>
          </h1>
        </div>
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
        <div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600"
          >
            {"Don't"} have an account ?
          </Link>
        </div>

        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
