import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginPage from '../pages/LoginPage' 

export default function Header() {
    const [login, setLogin] = useState(<div></div>)
    const onClickLogin = (link) => {
        setLogin(link)
    }
    return <div className=" " >
        <header className=' h-[100px] w-full flex justify-between px-[300px] items-center gap-10 '  >
            <p className=" flex justify-center items-center w-[300px] font-bold text-[50px] text-sky-500 pb-2">Next Item</p>
            <input class="w-[600px] bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-lg focus:shadow-sky-300/30 " placeholder="Search for anything..." type="text" />
            <ul className="w-[300px] flex justify-center items-center gap-5 text-sky-500 font-bold">
                <li className="hover:cursor-pointer"><Link to='/'>Home</Link></li>
                <li className="hover:cursor-pointer"><Link to='/product'>Products</Link></li>
                <li className="hover:cursor-pointer"><Link to='emptycart'>Cart</Link></li>
                <li className="hover:cursor-pointer" onClick={() => onClickLogin(<div className='fixed bottom-0 left-0 flex justify-center items-center h-full w-full backdrop-blur z-50'><LoginPage closeLogin={setLogin} /></div>)} >Login</li>
            </ul>

        </header>
         
            {login}
        </div>
}