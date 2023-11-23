import { Link } from 'react-router-dom'
import CardProduct from '../components/cardProduct'
import CategoryButton from '../layout/categoryButton'
import { useAuth } from "../hooks/use-auth";
import { useEffect } from 'react';
export default function ProductPage() {
    const { getProduct } = useAuth();
    useEffect(() => { getProduct() }, [])



    return <div className="flex flex-col items-center ">


        {/* <div className="flex justify-between items-center w-[1100px] px-3 ">
            <div className="flex justify-start w-[1100px] gap-5  py-2">
                <div className="text-sky-500"><p>Home</p></div>
                <div className="text-sky-500"> ❯ </div>
                <div className="text-sky-500"><p>Products</p></div>
            </div>
        </div> */}
        <div className="flex justify-start items-center gap-5">
            <div className=" text-[40px] font-bold ">All ITEM</div>
            {/* <CategoryButton />
            <input className="w-[150px] h-10 bg-white border-2  rounded-full py-1 pl-5 shadow-sm border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-lg focus:shadow-sky-300/30 " placeholder="Search" type="text" /> */}
        </div>

        <div className="mb-[50px] mt-3">
            {/* <Link to='/product/name'><CardProduct /></Link> */}
            <div className=" " role='button'><CardProduct /></div>
        </div>
        {/* <div className="flex justify-center items-center w-[1100px] gap-3 p-2 pb-5 ">
            <button className=" w-8 h-8 font-medium  border-2 border-sky-500 bg-gray-100 text-sky-600 rounded-full ">1</button>
            <button className=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">2</button>
            <button className=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">3</button>
            <button className=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">4</button>
        </div> */}
    </div>
}
