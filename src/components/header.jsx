import { Link, Navigate } from 'react-router-dom'
import NEXT from "../images/NEXT.png"
import { useAuth } from '../hooks/use-auth'
import { useModal } from '../hooks/use-modal'
export default function Header() {
    const { isLogin, logout } = useAuth()
    const { onOpenModal } = useModal()
    return <header className=' h-[100px] flex gap-10 justify-between  items-center  '  >
        <Link to="/"><img src={NEXT} className=" flex justify-center items-center w-[300px] pb-2" /></Link>
        <input className="w-[600px] bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-lg focus:shadow-sky-300/30 " placeholder="Search for anything..." type="text" />
        <ul className="w-[300px] flex justify-center items-center gap-5 text-sky-500 font-bold">
            <li className="hover:cursor-pointer"><Link to='/'>Home</Link></li>
            <li className="hover:cursor-pointer"><Link to='/product'>Products</Link></li>
            {isLogin ? <div className="hover:cursor-pointer border-2 bg-sky-500 text-white font-semibold px-3 py-1 rounded-full" onClick={logout}> Logout </div> : <li className="hover:cursor-pointer border-2 bg-sky-500 text-white font-semibold px-3 py-1 rounded-full" onClick={() => onOpenModal("loginModal")} >Login</li>}
        </ul>
    </header>

}

