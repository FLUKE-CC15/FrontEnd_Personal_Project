import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useModal } from "../hooks/use-modal"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import QR from '../images/QR.png'


export default function CheckoutPage({ navigate }) {

    const { onCloseModal, isOpenModal, modalType, price, pId } = useModal()
    const { createPaySlip, authUser } = useAuth();
    const [isPaySlip, setIsPaySlip] = useState({
        paySlip: "",
        user: authUser?.id,
        product: pId
    })
    const [paySlip, setPaySlip] = useState()
    // console.log("product", pId)
    // console.log("authUser", authUser?.id)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // setIsPaySlip({
                //     ...isPaySlip,
                //     paySlip: reader.result
                // });
                setPaySlip(reader.result)
            };
            reader.readAsDataURL(file);
        }
    }
    const { getMyOrder } = useAuth();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const body = {
            paySlip: paySlip,
            user: authUser?.id,
            product: pId
        }
        createPaySlip(body).then(() => {
            setIsPaySlip({
                paySlip: ""
            })
        })
        navigate('/myitem');
        getMyOrder()
        onCloseModal()

    };
    return (<form onSubmit={handleSubmitForm}>{isOpenModal && modalType === "checkOutModal" && (
        <div className='fixed bottom-0 left-0 flex justify-center items-center h-full w-full backdrop-blur z-50'>
            <div className="relative flex flex-col items-center justify-center h-[450px] w-[520px] border-4 rounded-2xl border-sky-300 bg-white">
                <div onClick={onCloseModal} className=" text-white absolute top-3 right-3 bg-sky-300 border-2 hover:text-sky-500 hover:bg-white hover:border-sky-500 w-8 h-8 flex justify-center items-center rounded-full " >
                    X
                </div>
                <div className="w-[200px] h-[200px] bg-red-300 mb-5"><img src={QR} /></div>
                <div className=" bg-sky-100 w-full h-[55px] flex justify-around mb-5 items-center">
                    <div className="">
                        <div className="font-bold text-[20px]">Total</div>
                        <div className="font-semibold text-[10px] ">(include VAT)</div>
                    </div>
                    <div className="font-bold text-[30px] text-sky-500 drop-shadow-md ">{price}</div>
                </div>
                <input onChange={handleImageChange} className="block mb-5  w-[70%] text-sm text-gray-900 border-2  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file"></input >
                <button className="mb-1  px-4 py-1 font-bold text-[20px] bg-sky-500 border-2 border-sky-600 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-white rounded-xl" >Checkout</button>
            </div>
        </div>)
    }</form >
    )
}