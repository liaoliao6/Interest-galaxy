import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

const privateKey = 'guessit';

export const signin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(404).json({ message: "User does not exist." });
        }

        const isPasswordMatch = await bcrypt.compare(password, findUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Password doesn't match." });
        }

        const token = jwt.sign({ email: findUser.email, id: findUser._id}, privateKey);

        res.status(200).json({ result: findUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error.'});
    }
};

export const signup = async (req, res) => {
    console.log('signup');
    console.log(req.body);

    const { email, password, firstName, lastName } = req.body;

    console.log('email: %s', email);
    console.log('password: %s', password);
    console.log('firstName: %s', firstName);
    console.log('lastName: %s', lastName);


    try {
        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).json({ message: "User already exist." });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: passwordHash, name: `${firstName} ${lastName}` });
        const token = jwt.sign( { email: result.email, id: result._id }, privateKey, { expiresIn: "1h" } );
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error}.`});
    }
};