import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>  {/* created a component */}
      <MessageContainer/>   {/*since it is flex sidebar will be on the left and messagecontainer will be on the right*/}   
    </div>
  )
}

export default Home
