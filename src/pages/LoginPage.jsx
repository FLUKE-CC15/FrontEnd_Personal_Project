import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth';
export default function LoginPage({ open }) {
    const [input, setInput] = useState({
        userName: '',
        password: ''
    });
    const { login } = useAuth();
    const handleSubmitForm = e => {
        e.preventDefault();
        login(input)
    }

    return (<>
        {open && (
            <div className='fixed bottom-0 left-0 flex justify-center items-center h-full w-full backdrop-blur z-50'>
                <div className="relative flex flex-col items-center justify-center h-[450px] w-[520px] border-4 rounded-2xl border-sky-300 bg-white">
                    <button className=" text-white absolute top-3 right-3 bg-sky-300 border-2 hover:text-sky-500 hover:bg-white hover:border-sky-500 w-8 h-8 flex justify-center items-center rounded-full " >
                        X
                    </button>
                    <div className=" font-bold text-[50px] text-sky-500">
                        Next Item
                    </div>
                    <div className=" text-[15px] text-sky-500">
                        You're going to buy something. Do you have money yet?
                    </div>
                    <div className="w-[400px]">
                        <form onSubmit={handleSubmitForm} className="mt-4">
                            <div className="relative mt-2 w-full">
                                <input value={input.userName} onChange={e => setInput({ ...input, userName: e.target.value })} type="text" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500"> Enter Your Username </label>
                            </div>
                            <div className="relative mt-2 w-full">
                                <input type='password' value={input.password} onChange={e => setInput({ ...input, password: e.target.value })} className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500"> Enter Your Password</label>
                            </div>
                            <button className="px-4 py-1 my-2 w-full text-[20px] font-bold bg-sky-500 border-2 border-sky-600 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-white rounded-lg ">Sign In</button>

                        </form>
                        <div className="relative my-5 flex h-px place-items-center bg-gray-200">
                            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">or</div>
                        </div>
                        <div className=" " ><Link to='/register'><button className="px-4 py-1 my-2 w-full font-bold hover:bg-sky-500 border-2 border-sky-500 hover:border-sky-500 bg-gray-100 text-sky-500 hover:text-white rounded-lg text-[20px]" >Register</button></Link></div>

                    </div>
                </div></div>)}</>)
}



// relative flex flex-col items-center justify-center h-[450px] w-[520px] border-4 rounded-2xl border-sky-300 bg-white 