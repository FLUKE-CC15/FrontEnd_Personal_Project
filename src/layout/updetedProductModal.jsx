import { useEffect, useState } from 'react';
import { useModal } from '../hooks/use-modal';
import axios from '../config/axios';
import { useAuth } from '../hooks/use-auth';


export default function UpdetedProductModal({ item }) {
    const { onCloseModal, isOpenModal, modalType } = useModal()
    const { updetedProduct, getProduct } = useAuth();
    const [product, setProduct] = useState(item);
    const handleSubmitForm = e => {
        e.preventDefault();
        updetedProduct(product).then(() => {
            getProduct()
        })
        console.log("ควย")
        onCloseModal();
    }
    const handleChangeProduct = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    return (<form onSubmit={handleSubmitForm} >{isOpenModal && modalType === "updetedProductModal" && (
        <div className='fixed bottom-0 left-0 flex justify-center items-center h-full w-full backdrop-blur z-50'>
            <div className="relative flex flex-col items-center justify-center h-[350px] w-[800px] border-4 rounded-2xl border-sky-300 bg-white">
                <button onClick={onCloseModal} className=" text-white absolute top-3 right-3 bg-sky-300 border-2 hover:text-sky-500 hover:bg-white hover:border-sky-500 w-8 h-8 flex justify-center items-center rounded-full " >X</button>
                <div className='w-full p-5 flex flex-col justify-center items-center mt-5 gap-1'>
                    <div className="w-full flex justify-start pl-5 font-bold text-sky-500 text-[30px]">Add Product</div>
                    <input name={"ProductName"} onChange={handleChangeProduct} value={product?.ProductName || ""} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product name..." type="text" />
                    <input name={"price"} onChange={handleChangeProduct} value={product?.price || ""} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product price..." type="text" />
                    <input name={"information"} onChange={handleChangeProduct} value={product?.information || ""} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="information..." type="text" />
                    <input name={"image"} onChange={handleChangeProduct} value={product?.image || ""} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="image..." type="text" />
                    <input name={"productType"} onChange={handleChangeProduct} value={product?.productType || ""} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product type..." type="text" />
                    <button onSubmit={handleSubmitForm} >updete Product</button>
                </div>
            </div>
        </div>
    )}</form>)
}