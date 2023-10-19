import { Link } from 'react-router-dom'

export default function Success({closeSuccess}) {
    return <div className="relative flex flex-col items-center justify-center h-[150px] w-[520px] border-4 rounded-2xl border-sky-300 bg-white  ">
       <Link to='/myorder'> <button className=" text-white absolute top-3 right-3 bg-sky-300 border-2 hover:text-sky-500 hover:bg-white hover:border-sky-500 w-8 h-8 flex justify-center items-center rounded-full " onClick={()=> closeSuccess(false)}>
            X
        </button> </Link>
        <div className=" font-bold text-[50px] text-sky-500">
        Completed
        </div>
        
    </div>
}



