import { Link } from "react-router-dom";
import logo from "../assets/chatlogo.png";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import chaticon from "../../assets/chat.png";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-row justify-between gap-1 items-center mx-6 loginwall">
      <div className="text-white sm:text-4xl md:text-7xl font-bold text-wrap cursor-default">
        <h1>Never miss a loved ones message.</h1>
        <div className="flex flex-row gap-6">
          <h1 className="text-gray-500 font-txt">Join today.</h1>
          <div className="flex justify-center items-end">
            <img
              src={chaticon}
              alt=""
              className="w-14 h-14 transform transition duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
      <form
        className="flex flex-col gap-7 px-16 py-14 formCont  min-w-96 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center flex-col gap-3 justify-center">
          <img src={logo} alt="frenzychat" className="h-10 w-10" />
          <h1 className="text-3xl text-white tracking-wide font-signature">
            Freaky<span className="text-green-500">Chatt</span>
          </h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="inputClass"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputClass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600"
          >
            {"Don't"} have an account ?
          </Link>
        </div>

        <button type="submit" className="button" disabled={loading}>
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;
