import { useModal } from '../hooks/use-modal'
import { useAuth } from "../hooks/use-auth";
import { Link, useNavigate } from 'react-router-dom'

export default function ListCardProduct({ Pitem }) {
    console.log("--------", Pitem)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${Pitem.ProductName}`, {
            state: {
                pId: Pitem.id,
                productName: Pitem.ProductName,
                price: Pitem.price,
                information: Pitem.information,
                image: Pitem.image
            }
        });
    };
    return <div className=' bg-white overflow-hidden w-[220px] h-[300px] rounded-2xl border-2 hover:border-sky-500'
        onClick={handleClick}>
        <div className="w-full overflow-hidden  h-[75%] bg-gray-200 ">
            <img className='' src={Pitem.image} />
        </div>
        <div className="h-[25%] flex flex-col justify-center px-3">
            <div className="text-[12px] ">{Pitem.ProductName}</div>
            <div className="text-[12px] font-bold">${Pitem.price}</div>
        </div>
    </div>
}