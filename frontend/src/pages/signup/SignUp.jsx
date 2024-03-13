import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
// import useSignUp from "../../hooks/useSignUp";
import logo from "../../assets/chatlogo.png";
import { motion } from "framer-motion";
import chaticon from "../../assets/chat.png";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";



const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignUp();
  const transition = { type: "spring", duration: 3 };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
   const text = "Never miss a loved ones message.".split(" ");

  return (
    <div className="flex flex-row justify-between items-center mx-6">
      <div className="text-white text-3xl font-bold text-wrap sm:text-4xl md:text-7xl cursor-default w-3/5 space-y-2">
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
        whileInView={{ right: "3rem" }}
        transition={transition}
        className="absolute"
      >
        <form
          className="flex flex-col gap-5 px-10 py-6 formCont min-w-96 rounded-3xl"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-3 justify-center">
            <img src={logo} alt="frenzychat" className="h-10 w-10" />

            <h1 className="text-3xl text-violet-700 tracking-wide font-signature">
              Freaky{" "}
              <span className="bg-gradient-to-r from-orange-600 via-amber-300 to-orange-600 bg-clip-text text-transparent">
                Chatt
              </span>
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="inputClass"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="inputClass"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="inputClass"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="inputClass"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm text-gray-800  hover:text-blue-600"
          >
            <span className="hover:underline"> Already have an account ?</span>
            <span className="ml-2 font-semibold">Login</span>
          </Link>

          <button type="submit" className="button" disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;


// SignUp hook

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};


function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
