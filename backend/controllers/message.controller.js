import Convo from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => { 
    try {
        const { message } = req.body;   
        const {id:receiverId} = req.params;  //take from the url
        const senderId = req.user._id

        let converstaion = await Convo.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        })

        if (!converstaion)   //if they didnt have conversation before first time ,new chat
        {
            converstaion = await Convo.create({
                participants: [senderId, receiverId]
            })
        }
        
        const newmsg = new Message({
            senderId,
            receiverId,
            message,
        })
        
        if (newmsg) {
            converstaion.message.push(newmsg._id);
        }

        //SOCKET.IO FUNCTIONALLITY WILL GO HERE

        // await converstaion.save();
        // await newmsg.save();       //saving in the db

        await Promise.all([converstaion.save(), newmsg.save()]);
        return res.status(201).json({newmsg});

    }
    
    catch (error) {
        console.log("error in sendMessage controller",error.message);
        res.status(500).json({error:"internal server error"})
    }
}