import { useEffect, useState } from "react";
import AdminCardProduct from "../components/AdminCardProduct";
import axios from 'axios'
import { useModal } from '../hooks/use-modal'
import AddProductModal from "../layout/AddProductModal";
import { useAuth } from "../hooks/use-auth";
export default function AdminPage() {
    const { onOpenModal, isOpenModal, modalType, onCloseModal } = useModal()
    const { getProduct, setIsAllProduct, getOrder, isAllOrder, updetedOrder } = useAuth();
    useEffect(() => { getProduct(); getOrder(); }
        , [])
    console.log(isAllOrder, "**************")
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        onOpenModal("ImageModal");
    };
    return (
        <div className=' flex flex-col  h-[690px] w-[1200px] items-center justify-items-center mb-5'>
            <div className="w-full flex justify-end items-center gap-2">
                {/* <input className="w-[280px] h-[35px] bg-white border-2  rounded-full py-2 pl-5 shadow-sm border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 " placeholder="Search for anything..." type="text" /> */}
                <button onClick={() => onOpenModal("AddProductModal")} className="hover:cursor-pointer justify-center w-[130px] h-[35px] border-2 bg-sky-500 hover:border-sky-600 hover text-white font-semibold  rounded-full" >Add Product</button>
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
            <div className="overflow-auto h-[500px] w-[1200px]"><AdminCardProduct /></div>
            <div className="grid grid-cols-7 col-auto w-full gap-2 text-[20px] font-semibold mt-2 py-2 border-y-2">
                <div className="flex justify-center items-center col-span-2">Product name</div>
                <div className="flex justify-center items-center">price</div>
                <div className="flex justify-center items-center">USER</div>
                <div className="flex justify-center items-center">paySlip</div>
                <div className="flex justify-center items-center">status</div>
                <div className=""></div>
            </div>
            <div className="w-[1200px] h-[500px] overflow-auto">
                {isAllOrder.map(e => {

                    return (<div key={e.id} className="">

                        <div className='grid grid-cols-7 gap-2 text-[15px] py-2 border-y-2 bg-sky-50 w-full h-[110px] rounded-lg border-2 mt-1 hover:border-sky-500'  >
                            <p className="col-span-2 flex justify-start items-center pl-3 truncate" >{e.product.ProductName}</p>
                            <div className="col-span-1 flex justify-center items-center">{e.product.price}</div>
                            <div className="col-span-1 flex justify-start items-center truncate">{e.user.userName}</div>
                            <div className="col-span-1 flex justify-center items-center gap-1" ><div className="" onClick={() => openImageModal(e.paySlip)} role="button"><img src={e.paySlip} className='h-[90px] rounded-md' /></div></div>
                            <div className="col-span-1 flex justify-center font-bold items-center">{e.status}</div>
                            {e.status === "PENDING" ?
                                <div className="col-span-1 flex justify-self-center justify-center items-center gap-1">
                                    <button onClick={() => { updetedOrder(e.id); }} className="col-span-1 bg-green-500 h-[35px] w-[150px] flex justify-self-center justify-center items-center  font-bold  rounded-full border-2 text-white hover:text-green-500 hover:bg-white hover:border-green-500">Confirm payment</button>
                                </div>
                                :
                                <div className="col-span-1 flex justify-self-center justify-center items-center gap-1">
                                    <div className="col-span-1 bg-gray-500 h-[35px] w-[150px] flex justify-self-center justify-center items-center  font-bold  rounded-full border-2 text-white   ">Confirmed</div>
                                </div>}

                        </div>

                    </div>
                    )
                })}
            </div>

            {isOpenModal && modalType === "ImageModal" && (
                <div className='fixed bottom-0 left-0 flex justify-center items-center h-full w-full backdrop-blur z-50 '>
                    <div className="relative flex flex-col overflow-hidden items-center justify-center h-[80%] border-4 rounded-2xl border-sky-300 bg-white">
                        <button onClick={onCloseModal} className=" text-white absolute top-3 right-3 bg-sky-300 border-2 hover:text-sky-500 hover:bg-white hover:border-sky-500 w-8 h-8 flex justify-center items-center rounded-full " >
                            X
                        </button>
                        {selectedImage && (
                            <img src={selectedImage} className=' h-full rounded-md' />
                        )}
                    </div>
                </div>)}


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

