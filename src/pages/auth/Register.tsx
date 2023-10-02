import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

const register = () => {

    const model = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        userName: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password")]),
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(model)
    })

    const onSubmit = handleSubmit(async (data) => {

        const { firstName, lastName, userName, email, password } = data

        const formData = new FormData()
        formData.append("firstName", firstName)
        formData.append("lastName", lastName)
        formData.append("userName", userName)
        formData.append("email", email)
        formData.append("password", password)

    })

    return (
        <div className="h-full flex justify-center items-center">
            <div className='w-[500px] h-[700px] mt-[30px] flex justify-center items-center bg-[#a55151] rounded-[15px]'>
                <form onSubmit={onSubmit} className='w-[90%] h-[90%] bg-[#6c6cc0] rounded-[15px] '>
                    <div className="text-[20px] text-white flex justify-center items-center mt-3 capitalize">REGISTRATION </div>
                    <div className="justify-center items-center mt-7">

                        <div className="flex justify-center items-center mt-7" >
                            <input type="text" placeholder="First Name" className="w-[370px] h-[50px] pl-3 outline-none" {...register("firstName")} />
                            {
                                errors.firstName?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " > firstName Error</label>
                            }
                        </div>

                        <div className="flex justify-center items-center mt-7 " >
                            <input type="text" placeholder="Last Name" className="w-[370px] h-[50px] pl-3 outline-none" {...register("lastName")} />
                            {
                                errors.lastName?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >lastName Error</label>
                            }
                        </div>

                        <div className="flex justify-center items-center mt-7 " >
                            <input type="text" placeholder="User Name" className="w-[370px] h-[50px] pl-3 outline-none" {...register("userName")} />
                            {
                                errors.userName?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >userName Error</label>
                            }

                        </div>

                        <div className="flex justify-center items-center mt-7 " >
                            <input type="text" placeholder="Email Address" className="w-[370px] h-[50px] pl-3 outline-none" {...register("email")} />
                            {
                                errors.email?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 "      >Email Error</label>
                            }
                        </div>

                        <div className="flex justify-center items-center mt-7 " >
                            <input type="text" placeholder="Password" className="w-[370px] h-[50px] pl-3 outline-none" {...register("password")} />
                            {
                                errors.password?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >password Error</label>
                            }

                        </div>

                        <div className="flex justify-center items-center mt-7 " >
                            <input type="text" placeholder="Confirm Password" className="w-[370px] h-[50px] pl-3 outline-none" {...register("confirm")} />
                            {
                                errors.confirm?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " > confirm Error</label>
                            }
                        </div>

                    </div>
                    <div className=" flex justify-center items-center mt-3" >
                        {/* <input type="checkbox" className="" /> */}
                        <Link to="/sign-in">
                            <div className="flex justify-center items-center text-white ml-1">Already have an Account </div>
                        </Link>

                    </div>

                    <div className="flex justify-between items-center mx-3 my-4">

                        <button type="submit" className="py-4 px-6 bg-[#4b4b81] text-white capitalize rounded hover:
                        cursor-pointer ease-in-out transition-all duration-300 hover:translate-x-2">
                            REGISTER
                        </button>
                        <div className="py-4 px-6 bg-[#4b4b81] text-white capitalize rounded hover:
                        cursor-pointer ease-in-out transition-all duration-300 hover:translate-y-2">
                            CANCEL
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default register