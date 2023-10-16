import { Link } from 'react-router-dom'
export default function ProductPage() {
    return <div className="flex flex-col items-center ">
        <div className="flex justify-center items-center h-[50px] w-[1100px] pl-5 gap-3">

            <button class="px-4 py-1 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full text-sm">Gaming Headphone</button>
            <button class="px-4 py-1 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full text-sm">Gaming Mouse</button>
            <button class="px-4 py-1 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full text-sm">Gaming Keyboard</button>
            <button class="px-4 py-1 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full text-sm">Gaming Chair</button>
            <button class="px-4 py-1 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full text-sm">Live Streaming</button>

        </div>
        <div className=" text-[40px] font-bold w-[1100px] pl-2">Products</div>
        <div className="flex justify-between items-center w-[1100px] px-3 ">
            <div className="flex justify-start w-[1100px] gap-5  py-2">
                <div className="text-sky-500"><p>Home</p></div>
                <div className="text-sky-500"> ❯ </div>
                <div className="text-sky-500"><p>Products</p></div>
            </div>
            <button class="px-4 py-1 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full text-sm">Recommended</button>
        </div>
        <div className="grid grid-cols-4 gap-[20px] pt-4 w-[1100px] pb-4 justify-items-center">
            <Link to='/product/InProduct'><div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600 flex justify-center text-[50px] items-center">Test</div></Link>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>
            <div className="bg-white w-[250px] h-[300px] rounded-2xl border-2 hover:bg-sky-600 border-sky-600"></div>

        </div>
        <div className="flex justify-center items-center w-[1100px] gap-3 p-2 pb-5 ">
            <button class=" w-8 h-8 font-medium  border-2 border-sky-500 bg-gray-100 text-sky-600 rounded-full ">1</button>
            <button class=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">2</button>
            <button class=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">3</button>
            <button class=" w-8 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">4</button>
        </div>
    </div>
}
