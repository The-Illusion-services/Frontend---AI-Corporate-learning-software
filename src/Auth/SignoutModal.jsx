import React, {useContext} from 'react'
import { CreateContext } from '../Context/Context';
import { FaCircleInfo } from "react-icons/fa6";

const SignoutModal = () => {
  const {showSignOutModal, setShowSignOutModal, logout} = useContext(CreateContext).auth

  const closeModal = ()=>{
    setShowSignOutModal(!showSignOutModal)
  }
  const signout = ()=>{
    logout()
    setShowSignOutModal(!showSignOutModal)
  }

  if(showSignOutModal){

  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#00000060] z-50 backdrop-blur-sm">
    <article className="lg:w-[26%] lg:h-[35%] bg-[#1b1c1e] text-white flex flex-col justify-center items-center lg:gap-y-8">
      <FaCircleInfo className="text-xl text-PrimaryPurple"/>
      <span className="text-xl font-bold">
        Sign Out?
      </span>
      <div className="flex lg:gap-x-2 ">
        <button
          className="border px-2 py-1 lg:w-24 rounded-md"
          onClick={closeModal}
        >
          No
        </button>
        <button
          className=" px-2 py-1  lg:w-24 rounded-md bg-PrimaryPurple"
          onClick={signout}
        >
          Yes
        </button>
      </div>
    </article>
  </section>
  )
}else{
  return null
}
}


export default SignoutModal