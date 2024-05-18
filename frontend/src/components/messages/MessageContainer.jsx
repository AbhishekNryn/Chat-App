import React from 'react'
import { TiMessages } from "react-icons/ti";
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
    const noChatSelected = true;
    return (
      <div className='md:min-w-[450px] flex flex-col'>
          {noChatSelected ? (<NoChatSelected/> ): (
              <>
              {/* This is the main container called in Home page */}
              {/* Header */}
              <div className='bg-slate-500 px-4 py-2'>
                  <span className='label-text'>to : </span>{" "}
                  <span className='font-bold'>UserX</span>
              </div>

              <Messages/>
              <MessageInput/>
          </>
          )}
      
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-black-200 font-semibold flex flex-col items-center gap-2">
          <p>Welcome 👋 User1 </p>
          <p>Select a chat to start messaging</p>
          <TiMessages className='text-3xl md:text-6xl text-center'/>
        </div>
      </div>
    );
}
