import { useEffect, useState } from "react";
import AdminCardProduct from "../components/AdminCardProduct";
import axios from 'axios'
import { useModal } from '../hooks/use-modal'
import AddProductModal from "../layout/AddProductModal";
import { useAuth } from "../hooks/use-auth";
export default function AdminPage() {
    const { onOpenModal } = useModal()
    const { getProduct, setIsAllProduct, getOrder, isAllOrder, updetedOrder } = useAuth();
    useEffect(() => { getProduct(); getOrder(); }
        , [])
    console.log(isAllOrder, "**************")

    return (
        <div className=' flex flex-col  h-[690px] w-[1200px] items-center justify-items-center mb-5'>
            <div className="w-full flex justify-end items-center gap-2">
                <input className="w-[280px] h-[35px] bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Search for anything..." type="text" />
                <button onClick={() => onOpenModal("AddProductModal")} className="hover:cursor-pointer justify-center w-[35px] h-[35px] border-2 bg-sky-500 hover:border-sky-600 hover text-white font-semibold  rounded-full" >+</button>
                <AddProductModal allproduct={setIsAllProduct} />
            </div>

            <div className="grid grid-cols-7 col-auto w-full gap-2 text-[20px] font-semibold mt-2 py-2 border-y-2">
                <div className="flex justify-center items-center col-span-2">Product name</div>
                <div className="flex justify-center items-center">price</div>
                <div className="flex justify-center items-center">information</div>
                <div className="flex justify-center items-center">image</div>
                <div className="flex justify-center items-center">Product type</div>
                <div className=""></div>
            </div>
            <div className="overflow-auto  w-[1200px]"><AdminCardProduct /></div>
            <div className="grid grid-cols-7 col-auto w-full gap-2 text-[20px] font-semibold mt-2 py-2 border-y-2">
                <div className="flex justify-center items-center col-span-2">Product name</div>
                <div className="flex justify-center items-center">price</div>
                <div className="flex justify-center items-center">USER</div>
                <div className="flex justify-center items-center">paySlip</div>
                <div className="flex justify-center items-center">status</div>
                <div className=""></div>
            </div>
            <div className="w-[1200px]">
                {isAllOrder.map(e => {
                    return (<div key={e.id} className="">

                        <div className='grid grid-cols-7 gap-2 text-[15px] py-2 border-y-2 bg-sky-50 w-full h-[110px] rounded-lg border-2 mt-1 hover:border-sky-500'  >
                            <p className="col-span-2 flex justify-start items-center pl-3 truncate" >{e.product.ProductName}</p>
                            <div className="col-span-1 flex justify-center items-center">{e.product.price}</div>
                            <div className="col-span-1 flex justify-start items-center truncate">{e.user.userName}</div>
                            <div className="col-span-1 flex justify-center items-center gap-1"><img src={e.paySlip} className='h-[90px] rounded-md'
                            />
                            </div>
                            <div className="col-span-1 flex justify-center items-center">{e.status}</div>
                            <div className="col-span-1 flex justify-self-center justify-center items-center gap-1">

                                <button onClick={() => { updetedOrder(e.id); }} className="col-span-1 bg-red-500 h-[35px] w-[70px] flex justify-self-center justify-center items-center  font-bold  rounded-full border-2 text-white hover:text-red-500 hover:bg-white hover:border-red-500">delete</button>
                            </div>

                        </div>

                    </div>
                    )
                })}
            </div>





            {/* 
            <div className="flex gap-5 justify-center items-center">
                <div className=" ">{e.product.ProductName}</div>
                <div className=" ">{e.product.price}</div>
                <div className=" ">{e.user.userName}</div>
                <img className=" w-[50px]" src={e.paySlip}></img>
                <button onClick={() => { updetedOrder(e.id); }}>AAAAAAAAA</button>
                <div className=" ">{e.status}</div>
            </div> */}


        </div >


    )
}

