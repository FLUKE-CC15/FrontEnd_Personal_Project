import { Link } from "react-router-dom";


export default function AdminMenu() {
    return <div className=""><Link to='/addproduct'>
        <button className='  bg-red-500 flex justify-center items-center w-[120px] font-bold h-[40px] rounded-xl border-2 text-white hover:text-red-500 hover:bg-white hover:border-red-500' >
            <div className=""> Admin Menu</div>
        </button></Link>
    </div>
}