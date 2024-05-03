import jwt from "jsonwebtoken";


const generateTokenAndSetCokkie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn:"15d"
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,            //so the user cannot access it using javascript (prevent XSS attacks)
        sameSite: "strict",       //protect from attacks
        secure: process.env.NODE_ENV!== "development" //check in postman
    })
}

export default generateTokenAndSetCokkie