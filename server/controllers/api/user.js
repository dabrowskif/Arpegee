import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../../models/user.js';

export const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log(`Sign In ${email} ${password}`);

  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const signup = async (req, res) => {
  const {
    email, password, confirmPassword, firstName, lastName,
  } = req.body;
  console.log(`Sign Up ${email} ${password} ${confirmPassword} ${firstName} ${lastName}`);

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User with that email already exists.' });

    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
