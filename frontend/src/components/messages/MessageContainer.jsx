import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
      <div className='md:min-w-[450px] flex flex-col'>
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
      
    </div>
  )
}

export default MessageContainer
