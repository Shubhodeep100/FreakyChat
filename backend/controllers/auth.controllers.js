import User from '../models/user.model.js'

export const login = (req, res) => {
  console.log("Login User");
};
export const logout = (req, res) => {
  console.log("Logout User");
};
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if(password !== confirmPassword) {
      return res.status(400).json({error: "Passwords do not match"})
    }

    const user = await User.findOne({username});

    if(user) {
      return res.status(400).json({error: "Username already exists"})
    }

    // Hash Password here
    

  } catch (error) {}
};
