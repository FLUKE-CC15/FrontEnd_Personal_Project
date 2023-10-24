import { useModal } from '../hooks/use-modal'
import { useAuth } from "../hooks/use-auth";

export default function ListCardProduct({ Pitem }) {
    console.log(Pitem)
    return <div className=' bg-white overflow-hidden w-[220px] h-[300px] rounded-2xl border-2 hover:border-sky-500'  >
        <div className="w-full overflow-hidden  h-[75%] bg-gray-200 ">
            <img src='https://source.unsplash.com/random' />
        </div>
        <div className="h-[25%] flex flex-col justify-center px-3">
            <div className="text-[12px] ">{Pitem.ProductName}</div>
            <div className="text-[12px] font-bold">${Pitem.price}</div>
        </div>


    </div>
}