import { Link } from "react-router-dom"



const ForgotPasword = () => {
  return (
      <div className="flex justify-center items-center">
          <div className='w-[500px] h-[400px] flex justify-center items-center bg-[#a55151] mt-[130px] rounded-[10px]'>
              <form className='w-[90%] h-[90%] bg-[#6c6cc0] rounded-[10px] '>
                  <div className="text-[20px] text-white flex justify-center items-center mt-3 capitalize"> RECOVER ACCOUNT </div>
                  <div className="justify-center items-center mt-7">

                      <div className="flex justify-center items-center mt-7 " >
                          <input type="text" placeholder="Enter your email" className="w-[370px] h-[50px] pl-3 outline-none" />
                      </div>

                  </div>

                  <div className="flex justify-center items-center mx-3 my-4">

                      <div className="py-4 px-8 bg-[#4b4b81] text-white capitalize rounded hover:
                        cursor-pointer ease-in-out transition-all duration-300 hover:translate-x-2 mt-5">
                          CONFIRM
                      </div>

                  </div>

                  <Link to="/sign-in">
                      <div className=" flex justify-center items-center mt-3 text-white" >
                          REMEMBER PASSWORD ?
                      </div>
                  </Link>

              </form>
          </div>
      </div>
  )
}

export default ForgotPasword