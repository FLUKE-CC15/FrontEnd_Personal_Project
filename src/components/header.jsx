import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginPage from '../pages/LoginPage' 
import RegisterPage from '../pages/RegisterPage'

export default function Header() {
    const [isLogin, setIsLogin] = useState(false)
   
    return <div className=" " > 
        <header className=' h-[100px] w-full flex justify-between px-[300px] items-center gap-10 '  >
            <p className=" flex justify-center items-center w-[300px] font-bold text-[50px] text-sky-500 pb-2">Next Item</p>
            <input className="w-[600px] bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-lg focus:shadow-sky-300/30 " placeholder="Search for anything..." type="text" />
            <ul className="w-[300px] flex justify-center items-center gap-5 text-sky-500 font-bold">
                <li className="hover:cursor-pointer"><Link to='/'>Home</Link></li>
                <li className="hover:cursor-pointer"><Link to='/product'>Products</Link></li>
                <li className="hover:cursor-pointer"><Link to='emptycart'>Cart</Link></li>
                <li className="hover:cursor-pointer" onClick={() => setIsLogin(true)} >Login</li>
            </ul>
               <LoginPage  open={isLogin} close={()=> setIsLogin(false)}></LoginPage>
        </header>
       
        </div>
}