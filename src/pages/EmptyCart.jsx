import HeadphoneSwiper from "../components/HeadphoneSwiper";
import { Link } from 'react-router-dom'
export default function EmptyCart() {
    return <div className=''>
        <div className="w-full h-[400px] flex flex-col justify-center items-center ">
            <div className="font-bold text-[30px] text-sky-500">Cart is empty</div>
            <div className="text-[20px]">Choose the product and add to cart</div>
            <Link to='/'><button className="w-[300px] m-3 px-4 py-1 font-bold text-[20px] bg-sky-500 border-2 border-sky-600 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-white rounded-xl">Back to Home</button></Link>
        </div>
        <div className="w-full">
            <div className="p-5  grid justify-center">
                <div className="text-[30px] font-bold pl-2">Interesting Product!</div>
                <HeadphoneSwiper />
            </div>
        </div>
    </div>
}