import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import * as yup from "yup"
import { useForm } from 'react-hook-form'

const signIn = () => {

    const model = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(model)
    })

    const onSubmit = handleSubmit(async (data) => {

        const { email, password } = data

        const formData = new FormData()
        formData.append("email", email)
        formData.append("password", password)
    })


  return (
      <div className="flex justify-center items-center rounded-[10px]">
          <div className='w-[500px] h-[450px] mt-[30px] flex justify-center items-center bg-[#a55151]'>
              <form className='w-[90%] h-[90%] bg-[#6c6cc0] '>
                  <div className="text-[20px] text-white flex justify-center items-center mt-3 capitalize"> MEMBER LOGIN </div>
                  <div className="justify-center items-center mt-7">

                      <div className="flex justify-center items-center mt-7 " >
                          <input type="text" placeholder="User Name" className="w-[370px] h-[50px] pl-3 outline-none" />
                      </div>

                      <div className="flex justify-center items-center mt-7 " >
                          <input type="text" placeholder="Password" className="w-[370px] h-[50px] pl-3 outline-none" />
                      </div>


                  </div>
                  <div className=" flex justify-center items-center mt-3" >
                      <input type="checkbox" />
                      <div className="text-white ml-1font-bold">Remember me</div>
                  </div>

                  <Link to="/forgot-password">
                  <div className=" flex justify-center items-center mt-3" >
                      <input type="checkbox" />
                      <div className="text-white ml-1">Forgot Pasword</div>
                  </div>
                  </Link> 
   
                  <div className="flex justify-center items-center mx-3 my-4">

                      <div className="py-4 px-8 bg-[#4b4b81] text-white capitalize rounded hover:
                        cursor-pointer ease-in-out transition-all duration-300 hover:translate-x-2">
                          LOGIN
                      </div>

                  </div>
              </form>
          </div>
      </div>
  )
}

export default signIn