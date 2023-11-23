import { useState } from 'react';
import { useModal } from '../hooks/use-modal';
import axios from '../config/axios';
import { useAuth } from '../hooks/use-auth';


export default function AddProductModal() {
    const { createProduct, getProduct } = useAuth();
    const { onCloseModal, isOpenModal, modalType } = useModal()
    const [image, setImage] = useState("")
    const [inputProduct, setInputProduct] = useState({
        ProductName: '',
        price: '',
        information: '',
        image: "", // Use null instead of an empty string
        productType: ''
    });
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setInputProduct({
                    ...inputProduct,
                    image: reader.result,  // Set the result as a data URL string
                });
                setImage(reader.result)

            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        createProduct(inputProduct).then(() => {
            getProduct()
            setInputProduct({
                ProductName: '',
                price: '',
                information: '',
                image: "",
                productType: '',

            });
        })
        onCloseModal()
    }

    return (<form onSubmit={handleSubmitForm}>{isOpenModal && modalType === "AddProductModal" && (
        <div className='fixed bottom-0 left-0 flex justify-center items-center h-full w-full backdrop-blur z-50'>
            <div className="relative flex flex-col items-center justify-center w-[800px] border-4 rounded-2xl border-sky-300 bg-white">
                <button onClick={onCloseModal} className=" text-white absolute top-3 right-3 bg-sky-300 border-2 hover:text-sky-500 hover:bg-white hover:border-sky-500 w-8 h-8 flex justify-center items-center rounded-full " >X</button>
                <div className='w-full p-5 flex flex-col justify-center items-center mt-5 gap-1'>
                    <div className="w-full flex justify-start pl-5 font-bold text-sky-500 text-[30px]">Add Product</div>
                    <input value={inputProduct.ProductName} onChange={e => setInputProduct({ ...inputProduct, ProductName: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product name..." type="text" />
                    <input value={inputProduct.price} onChange={e => setInputProduct({ ...inputProduct, price: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product price..." type="text" />
                    <input value={inputProduct.information} onChange={e => setInputProduct({ ...inputProduct, information: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="information..." type="text" />
                    <input
                        onChange={handleImageChange}
                        className="w-full bg-white border-2 rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        type="file"
                    />
                    {/* <select name='productType' onChange={e => setInputProduct({ ...inputProduct, productType: e.target.value })} class=" border-sky-300 border-2 text-sm rounded-full focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5  ">
                        <option selected>Choose a ...</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select> */}




                    {/* <input value={inputProduct.categoryId} onChange={e => setInputProduct({ ...inputProduct, categoryId: e.target.value })} className="w-full bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Product type..." type="text" /> */}
                    <button className=" text-white font-semibold  bg-sky-400 border-2 hover:text-sky-500 hover:bg-white hover:border-sky-500 w-40 h-10 flex justify-center mt-3 items-center rounded-full " >Add Product</button>
                </div>
            </div>
        </div>
    )
    }</form >)
}