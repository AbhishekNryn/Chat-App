import User from "../models/user.model.js";

export const getUserOnSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;
        const allUsers = await User.find().select("-password")  //including yourself

        res.status(200).json(allUsers)
        
    } catch (error) {
        console.log("error in getUserOnSidebar",error.message);
        res.status(500).json({error: "error in getUserOnSidebar"})
    }
}