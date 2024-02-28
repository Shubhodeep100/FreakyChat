import logo from "../assets/chatlogo.png";
function Login() {
  return (
    <div className="flex flex-col justify-center gap-1 items-center">
      <form className="flex flex-col gap-6 px-16 py-14 formCont  backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-2xl">
        <div className="flex items-center gap-3 justify-center">
          <img src={logo} alt="frenzychat" className="h-10 w-10" />
          <h1 className="text-2xl text-white font-serif">FreakyChatt</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="inputClass"
          // onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
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

        <button type="submit" className="button">
          Login
        </button>
        {/* <span>
          Already have an account ? <Link to="/login">Login</Link>
        </span> */}
      </form>
    </div>
  );
}

export default Login;
