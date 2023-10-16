import { Link } from 'react-router-dom'

export default function Header() {
    return <header className=' h-[100px] w-full flex justify-between px-[300px] items-center gap-10'  >
        <p className=" flex justify-center items-center w-[300px] font-bold text-[50px] text-sky-500 pb-2">Next Item</p>
        <input class="w-[600px] bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-lg focus:shadow-sky-300/30 " placeholder="Search for anything..." type="text" />
        <ul className="w-[300px] flex justify-center items-center gap-5 text-sky-500 font-bold">
            <li className="hover:cursor-pointer"><Link to='/'>Home</Link></li>
            <li className="hover:cursor-pointer"><Link to='/product'>Products</Link></li>
            <li className="hover:cursor-pointer">Cart</li>
            <li className="hover:cursor-pointer"><Link to='/login'>Login</Link></li>
        </ul>
    </header>
}