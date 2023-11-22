import HeadphoneSwiper from "../components/Highlight/HighlightProductSwiper";

import QR from '../images/QR.png'

export default function CartPage() {


    return <div className="flex flex-col justify-center items-center">
        <div className="flex justify-start items-center w-[1200px] text-[30px] font-bold  mb-2">My cart</div>
        <div className="flex flex-col mb-40">
            <div className='grid grid-cols-4 gap-4 w-[1200px] '>
                <div className="col-span-3  justify-center items-center">
                    <div className="grid grid-cols-4 text-[20px] font-semibold  border-y-2 border-sky-300 h-[50px]  bg-sky-50">
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
                <div className="border-2 h-[500px] rounded-xl flex flex-col  ">
                    <div className="text-[20px] font-bold pt-3 px-2 ">Total</div>

                    <div className="flex flex-col h-full justify-start gap-4 items-center ">

                        <div className=" flex flex-col pt-2 w-full px-5 ">

                            <div className="flex justify-between">
                                <div className="text-[18px] font-bold">Items</div>
                                <div className="text-[18px] font-semibold">$100,000</div>
                            </div>

                            <div className="flex justify-between">
                                <div className="text-[18px] font-bold">Shipping fee</div>
                                <div className="text-[18px] font-semibold">$299</div>
                            </div>

                        </div>

                        <div className=" bg-sky-100 w-full h-[55px] flex justify-between px-5 items-center">
                            <div className="">
                                <div className="font-bold text-[20px]">Total</div>
                                <div className="font-semibold text-[10px] ">(include VAT)</div>
                            </div>
                            <div className="font-bold text-[30px] text-sky-500 drop-shadow-md ">$100,299</div>
                        </div>
                        <div className="w-[170px] h-[170px] bg-red-300"><img src={QR} /></div>
                        <input className="block  w-[70%] text-sm text-gray-900 border-2  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file"></input >
                        <button class="mb-1 w-[70%] px-4 py-1 font-bold text-[20px] bg-sky-500 border-2 border-sky-600 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-white rounded-xl">Checkout</button>
                    </div>
                </div>
            </div>
        </div>



        {/* <div className="w-screen">
            <div className="p-5 bg-sky-50 grid justify-center">
                <div className="text-[30px] font-bold pl-2">Interesting Product!</div>
                <HeadphoneSwiper />
            </div>
        </div> */}
    </div>
}