import { useState } from "react";
import Joi from 'joi';
import InputErrorMessage from "../components/InputErrorMessage";
import { useAuth } from "../hooks/use-auth";
import { Navigate } from "react-router-dom";


const registerSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    userName: Joi.string().trim().required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).trim().required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required()
});

const validateRegister = input => {
    const { error } = registerSchema.validate(input, { abortEarly: false });
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el;
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
}

export default function RegisterPage() {
    const [input, setInput] = useState({
        email: '',
        userName: '',
        password: '',
        confirmPassword: ''
    });

    const { register } = useAuth()

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const [error, setError] = useState({});
    const handleSubmitForm = e => {
        e.preventDefault();
        const validationError = validateRegister(input);
        if (validationError) {
            return setError(validationError);
        }
        setError({});
        register(input).catch(err => {
            toast.error(err.response?.data.message);
        });


    }



    return <form onSubmit={handleSubmitForm} className="flex flex-col j pt-5 items-center mt-4 pb-5 mb-[233px] w-[730px] h-full border-4 rounded-2xl  bg-white">
        <div className=" pb-3 text-[40px] font-bold text-sky-500">Register</div>
        <div className="relative m-2 w-[600px] ">
            <input value={input.email} onChange={handleChangeInput} name="email" type="text" className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900  focus:outline-none focus:ring ${error.email ? 'border-red-500 focus:ring-red-300' : 'focus:ring-sky-300 border-sky-300 focus:border-sky-500'}`} placeholder=" " />
            <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500">Email </label>
        </div>
        {error.email && <InputErrorMessage message={error.email} />}

        <div className="relative  m-2 w-[600px]">
            <input value={input.userName} onChange={handleChangeInput} name="userName" type="text" className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900  focus:outline-none focus:ring ${error.userName ? 'border-red-500 focus:ring-red-300' : 'focus:ring-sky-300 border-sky-300 focus:border-sky-500'}`} placeholder=" " />
            <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500">Username</label>
        </div>
        {error.userName && <InputErrorMessage message={error.userName} />}

        <div className="relative  m-2 w-[600px]">
            <input value={input.password} onChange={handleChangeInput} name="password" type="text" className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900  focus:outline-none focus:ring ${error.password ? 'border-red-500 focus:ring-red-300' : 'focus:ring-sky-300 border-sky-300 focus:border-sky-500'}`} placeholder=" " />
            <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500">Password</label>
        </div>
        {error.password && <InputErrorMessage message={error.password} />}
        <div className="relative m-2 w-[600px]">
            <input value={input.confirmPassword} onChange={handleChangeInput} name="confirmPassword" type="text" className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900  focus:outline-none focus:ring ${error.confirmPassword ? 'border-red-500 focus:ring-red-300' : 'focus:ring-sky-300 border-sky-300 focus:border-sky-500'}`} placeholder=" " />
            <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500">Confirm Password</label>
        </div>
        {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
        <button className="px-4 py-1 my-2 w-[600px] font-bold bg-sky-500 border-2 border-sky-500 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-500 text-white rounded-lg text-[20px]" >Register</button>
    </form>

}