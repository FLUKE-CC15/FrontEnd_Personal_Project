import { Link } from 'react-router-dom'
import CardProduct from '../components/cardProduct'
import CategoryButton from '../components/categoryButton'
export default function ProductPage() {
    return <div className="flex flex-col items-center ">
        <CategoryButton/>
        
        <div className="flex justify-between items-center w-[1100px] px-3 ">
            <div className="flex justify-start w-[1100px] gap-5  py-2">
                <div className="text-sky-500"><p>Home</p></div>
                <div className="text-sky-500"> ❯ </div>
                <div className="text-sky-500"><p>Products</p></div>
            </div>
        </div>
        <div className=" text-[40px] font-bold w-[1100px] pl-2">Products</div>
        <div className="grid grid-cols-4 gap-[10px] pt-4  pb-4 justify-items-center">
            
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>
            <Link to='/product/InProduct'><CardProduct/></Link>

            
            
        </div>
        <div className="flex justify-center items-center w-[1100px] gap-3 p-2 pb-5 ">
            <button className=" w-8 h-8 font-medium  border-2 border-sky-500 bg-gray-100 text-sky-600 rounded-full ">1</button>
            <button className=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">2</button>
            <button className=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">3</button>
            <button className=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">4</button>
        </div>
    </div>
}
