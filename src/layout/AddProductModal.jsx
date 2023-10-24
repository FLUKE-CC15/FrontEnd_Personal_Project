import { useState } from 'react';
import { useModal } from '../hooks/use-modal';
import axios from '../config/axios';
import { useAuth } from '../hooks/use-auth';


export default function AddProductModal() {
    const { createProduct, getProduct } = useAuth();
    const { onCloseModal, isOpenModal, modalType } = useModal()
    const [inputProduct, setInputProduct] = useState({
        ProductName: '',
        price: '',
        information: '',
        image: '',
        productType: ''
    })

    const handleSubmitForm = e => {
        e.preventDefault();
        createProduct(inputProduct).then(() => {
            getProduct()
        })
        getProduct()
        onCloseModal()
    }

    return (<form onSubmit={handleSubmitForm}>{isOpenModal && modalType === "AddProductModal" && (
        <div className='fixed bottom-0 left-0 flex justify-center items-center h-full w-full backdrop-blur z-50'>
            <div className="relative flex flex-col items-center justify-center h-[350px] w-[800px] border-4 rounded-2xl border-sky-300 bg-white">
                <button onClick={onCloseModal} className=" text-white absolute top-3 right-3 bg-sky-300 border-2 hover:text-sky-500 hover:bg-white hover:border-sky-500 w-8 h-8 flex justify-center items-center rounded-full " >X</button>
                <div className='w-full p-5 flex flex-col justify-center items-center mt-5 gap-1'>
                    <div className="w-full flex justify-start pl-5 font-bold text-sky-500 text-[30px]">Add Product</div>
                    <input value={inputProduct.ProductName} onChange={e => setInputProduct({ ...inputProduct, ProductName: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product name..." type="text" />
                    <input value={inputProduct.price} onChange={e => setInputProduct({ ...inputProduct, price: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product price..." type="text" />
                    <input value={inputProduct.information} onChange={e => setInputProduct({ ...inputProduct, information: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="information..." type="text" />
                    <input value={inputProduct.image} onChange={e => setInputProduct({ ...inputProduct, image: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="image..." type="text" />
                    <input value={inputProduct.productType} onChange={e => setInputProduct({ ...inputProduct, productType: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product type..." type="text" />
                    <button  >Add Product</button>
                </div>
            </div>
        </div>
    )}</form>)
}