import logo from "../assets/chatlogo.png";
function Login() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 to-purple-300">
      <form className="flex flex-col gap-4 px-12 py-14 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-lg">
        <div className="flex items-center gap-1 justify-center">
          <img src={logo} alt="frenzychat" className="h-10 w-10" />
          <h1>FreakyChatt</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="inputClass"
          // onChange={(e) => handleChange(e)}
        />

        <button type="submit" className="button">Login</button>
        {/* <span>
          Already have an account ? <Link to="/login">Login</Link>
        </span> */}
      </form>
    </div>
  );
}

export default Login;
