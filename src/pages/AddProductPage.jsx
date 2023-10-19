import { useState } from "react"

export default function AddProductPage() {
    const [drop, setDrop] = useState(false);
    return <div className=" w-[1000px] h-full mb-5">

        <div className=" text-[40px]  font-semibold ">Order</div>
        <div className=" flex h-full gap-5">
            <div className="w-[280px] ">
                <div className="h-[120px] flex flex-col p-1 gap-1">
                    <input className=" border-2 w-full h-full rounded-full  pl-5  border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Search..." type="text" />
                    <div className=" w-full h-full bg-yellow-200"> <div className="relative inline-block text-left">
                        <div>
                            <button onClick={() => setDrop(<div className="absolute left-0 z-10  w-[100px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div className="py-1 flex flex-col justify-center items-center" >
                                    <button className="text-gray-700 hover:text-white hover:bg-sky-300 rounded-lg px-4 py-2 text-sm" >สำเร็จแล้ว</button>
                                    <button className="text-gray-700 hover:text-white hover:bg-sky-300 rounded-lg px-4 py-2 text-sm"  >ยังไม่สำเร็จ</button>
                                    <button className="text-gray-700 hover:text-white hover:bg-sky-300 rounded-lg px-4 py-2 text-sm"  >License</button>
                                </div>
                            </div>)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Options
                            </button>
                        </div>
                        {drop}

                    </div> </div>
                    <div className=" w-full h-full bg-green-200"></div>
                </div>
            </div>










            
            <div className="w-full ">
                <div className="h-[1000px]  ">
                    <div className=" px-2 mb-1 h-[45px] font-semibold w-full ">
                        <div className="grid grid-cols-6 w-full h-full bg-sky-200 border-2 rounded-lg">
                            <div className="flex justify-start  px-3 items-center col-span-3">NX000001</div>
                            <div className="bg-red-200 col-span-1"></div>
                            <div className="bg-yellow-200 col-span-1"></div>
                        </div>
                    </div>
                    <div className=" px-2 mb-1 h-[45px] font-semibold w-full ">
                        <div className="grid grid-cols-6 w-full h-full bg-sky-200 border-2 rounded-lg">
                            <div className="flex justify-start  px-3 items-center col-span-3">NX000001</div>
                            <div className="bg-red-200 col-span-1"></div>
                            <div className="bg-yellow-200 col-span-1"></div>
                        </div>
                    </div>
                    <div className=" px-2 mb-1 h-[45px] font-semibold w-full ">
                        <div className="grid grid-cols-6 w-full h-full bg-sky-200 border-2 rounded-lg">
                            <div className="flex justify-start  px-3 items-center col-span-3">NX000001</div>
                            <div className="bg-red-200 col-span-1"></div>
                            <div className="bg-yellow-200 col-span-1"></div>
                        </div>
                    </div>
                    <div className=" px-2 mb-1 h-[45px] font-semibold w-full ">
                        <div className="grid grid-cols-6 w-full h-full bg-sky-200 border-2 rounded-lg">
                            <div className="flex justify-start  px-3 items-center col-span-3">NX000001</div>
                            <div className="bg-red-200 col-span-1"></div>
                            <div className="bg-yellow-200 col-span-1"></div>
                        </div>
                    </div>
                    <div className=" px-2 mb-1 h-[45px] font-semibold w-full ">
                        <div className="grid grid-cols-6 w-full h-full bg-sky-200 border-2 rounded-lg">
                            <div className="flex justify-start  px-3 items-center col-span-3">NX000001</div>
                            <div className="bg-red-200 col-span-1"></div>
                            <div className="bg-yellow-200 col-span-1"></div>
                        </div>
                    </div>
                    <div className=" px-2 mb-1 h-[45px] font-semibold w-full ">
                        <div className="grid grid-cols-6 w-full h-full bg-sky-200 border-2 rounded-lg">
                            <div className="flex justify-start  px-3 items-center col-span-3">NX000001</div>
                            <div className="bg-red-200 col-span-1"></div>
                            <div className="bg-yellow-200 col-span-1"></div>
                        </div>
                    </div>



                </div>
            </div>
        </div>


    </div>

}