import HeadphoneSwiper from "../components/product/HeadphoneSwiper";
export default function CartPage() {
    return <div className="flex flex-col justify-center items-center">
        <div className='grid grid-cols-4 gap-4 h-[600px] w-[1200px] m-5'>
            <div className="col-span-3  justify-center items-center ">
                <div className="text-[30px] font-bold">My cart</div>
                <div className="grid grid-cols-4 text-[20px] font-semibold rounded-md border-2 border-sky-300 h-[50px] mt-4 bg-sky-50">
                    <div className="col-span-2 flex justify-center items-center">Product</div>
                    <div className="flex justify-center items-center ">Price per item</div>
                    <div className="flex justify-center items-center ">Quantity</div>
                </div>

                <div className="grid grid-cols-4 h-[110px] text-[20px] font-semibold border-b-2 border-sky-300 ">
                    <div className="col-span-2 flex justify-center items-center p-1">
                        <div className="h-full w-full bg-sky-100 rounded-xl"></div>
                    </div>
                    <div className="flex justify-center items-center font-bold text-[30px] p-3 text-sky-500">$39,999</div>
                    <div className="flex justify-center items-center ">
                    <div className="flex items-center justify-center gap-2 py-3">
                        <div className="flex justify-center items-center w-[90px]">
                            <button className="w-[24px] h-[30px] flex border-2 justify-center items-center rounded-l-lg font-bold hover:border-sky-500">-</button>
                            <div className="w-[42px] h-[30px] flex border-y-2 justify-center items-center font-bold" >2</div>
                            <button className="w-[24px] h-[30px] flex border-2 justify-center items-center rounded-r-lg font-bold hover:border-sky-500">+</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 h-[110px] text-[20px] font-semibold border-b-2  border-sky-300 ">
                    <div className="col-span-2 flex justify-center items-center p-1">
                        <div className="h-full w-full bg-sky-100 rounded-xl"></div>
                    </div>
                    <div className="flex justify-center items-center font-bold text-[30px] p-3 text-sky-500">$8,999</div>
                    <div className="flex justify-center items-center ">
                    <div className="flex items-center justify-center gap-2 py-3">
                        <div className="flex justify-center items-center w-[90px]">
                            <button className="w-[24px] h-[30px] flex border-2 justify-center items-center rounded-l-lg font-bold hover:border-sky-500">-</button>
                            <div className="w-[42px] h-[30px] flex border-y-2 justify-center items-center font-bold" >8</div>
                            <button className="w-[24px] h-[30px] flex border-2 justify-center items-center rounded-r-lg font-bold hover:border-sky-500">+</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
            <div className="bg-sky-200 rounded-2xl">
            </div>
        </div>
        <div className="w-full">
            <div className="p-5 bg-sky-50 grid justify-center">
                <div className="text-[30px] font-bold pl-2">Interesting Product!</div>
                <HeadphoneSwiper />
            </div>
        </div>


    </div>
}