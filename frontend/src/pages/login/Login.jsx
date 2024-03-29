import { Link } from "react-router-dom";
import logo from "../../assets/chatlogo.png";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { motion } from "framer-motion";
import chaticon from "../../assets/chat.png";
function Login() {
  const transition = { type: "spring", duration: 3 };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  const text = "Never miss a loved ones message.".split(" ");

  return (
    <div className="flex flex-row justify-between gap-1 items-center mx-6 loginwall relative">
      <div className="text-white sm:text-4xl md:text-7xl font-bold text-wrap cursor-default w-3/5 space-y-2">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: i / 6,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
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
      <motion.div
        initial={{ right: "-3rem" }}
        whileInView={{ right: "1rem" }}
        transition={transition}
        className="absolute"
      >
        <form
          className="flex flex-col gap-7 px-10 py-14 formCont  min-w-96 rounded-3xl"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center flex-col gap-3 justify-center">
            <img src={logo} alt="frenzychat" className="h-10 w-10" />
            <h1 className="text-3xl text-violet-700 tracking-wide font-signature">
              Freaky {""}
              <span className="bg-gradient-to-r from-orange-600 via-amber-300 to-orange-600 bg-clip-text text-transparent">
                Chatt
              </span>
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
            className="inputClass "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <span className="text-black">{"Don't"} have an account?</span>
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-600"
            >
              <span className="ml-1 font-bold">Signup</span>
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
      </motion.div>
    </div>
  );
}

export default Login;
