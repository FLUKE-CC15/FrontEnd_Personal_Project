import AdminMenu from "../components/AdminMenu";

export default function RegisterPage(){
    return <div className="flex  justify-center  items-center w-[1200px] h-[683px] ">
            <form class="flex flex-col j pt-5 items-center mt-4 mb-10 w-[730px] h-[520px] border-4 rounded-2xl  bg-white">
                <div className=" pb-3 text-[40px] font-bold text-sky-500">Register</div>
                <div className="relative m-2 w-[600px] ">
                    <input type="text"  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-0" placeholder=" " />
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500">Email </label>
                </div>
                <div className="relative  m-2 w-[600px]">
                    <input type="text"  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-0" placeholder=" " />
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500">Username</label>
                </div>
                <div className="relative  m-2 w-[600px]">
                    <input type="text"  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-0" placeholder=" " />
                    <label  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500">Password</label>
                </div>
                <div className="relative m-2 w-[600px]">
                    <input type="text"  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-0" placeholder=" " />
                    <label  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500">Confirm Password</label>
                </div>
                <div className="relative m-2 w-[600px]">
                    <input type="text"  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-0" placeholder=" " />
                    <label  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-500"> Enter Your Password</label>
                </div>
                <button className="px-4 py-1 my-2 w-[600px] font-bold bg-sky-500 border-2 border-sky-500 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-500 text-white rounded-lg text-[20px]" >Register</button>
            </form>
           
    </div>
}