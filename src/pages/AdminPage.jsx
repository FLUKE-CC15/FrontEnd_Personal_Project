import { useEffect, useState } from "react";
import AdminCardProduct from "../components/AdminCardProduct";
import axios from 'axios'
import { useModal } from '../hooks/use-modal'
import AddProductModal from "../layout/AddProductModal";
import { useAuth } from "../hooks/use-auth";
export default function AdminPage() {
    const { onOpenModal } = useModal()
    const { getProduct, setIsAllProduct } = useAuth();
    useEffect(() => { getProduct() }, [])

    return (
        <div className=' flex flex-col h-[5000px] w-[1200px] items-center justify-items-center'>
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
            <AdminCardProduct />
        </div>
    )
}

