import HeadphoneSwiper from "../components/Highlight/HighlightProductSwiper";
import { Link } from 'react-router-dom'
import { useState } from "react";
import img1 from '../images/pet/8.png'
import img2 from '../images/pet/9.png'
import img3 from '../images/pet/10.png'
import img4 from '../images/pet/11.png'
import { useAuth } from "../hooks/use-auth";
import LoginPage from "../layout/LoginModal";
import { useModal } from "../hooks/use-modal";
import { useLocation } from 'react-router-dom';
export default function ShowProductPage() {
    const { onOpenModal } = useModal()
    // const [img, setImg] = useState(<img src={img1} />)
    // const onClickSelectImg = (link) => {
    //     setImg(link)
    // }
    const { isLogin } = useAuth()
    const [isModalLoginOpen] = useState(false)
    const location = useLocation();
    const { pId, productName, price, information, image } = location.state || {};
    const handleBuyNow = () => {
        if (!isLogin) {
            onOpenModal("loginModal")
            return
        }
        if (isLogin) onOpenModal("checkOutModal", price, pId);
    }
    // const [item, setItem] = useState('');
    // const getSingleItem = () => {
    //     axios.get(`/product/${Pitem.id}`).then((response) => {
    //         setItem(response.data);
    //     });
    // };

    return <div className="flex flex-col items-center ">



        <div className="flex gap-5 items-center p-5 pb-20">
            <div className="flex justify-center items-center gap-2">
                {/* <div>
                    <div className="flex flex-col justify-center items-center w-[100px] h-[500px] gap-5">
                        <div className="w-[80px] h-[80px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg " onClick={() => onClickSelectImg(<img src={img1} />)} >
                            <img src={img1} />
                        </div>
                        <div className="w-[80px] h-[80px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg " onClick={() => onClickSelectImg(<img src={img2} />)} >
                            <img src={img2} />
                        </div>
                        <div className="w-[80px] h-[80px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg " onClick={() => onClickSelectImg(<img src={img3} />)} ><img src={img3} /></div>
                        <div className="w-[80px] h-[80px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg " onClick={() => onClickSelectImg(<img src={img4} />)} ><img src={img4} /></div>
                    </div>
                </div> */}
                <div >
                    <img className="w-[500px] h-[500px] bg-sky-50 border-2 text-sky-500 rounded-lg " src={image} />
                </div>
            </div>

            <div className="">
                <div className="w-[500px] h-[500px] ">
                    <div className="flex justify-start gap-5 items-center">
                        <div className="flex flex-col justify-start items-center mb-2">
                            <div className="font-bold text-[25px] px-3">{productName}</div>
                            <div className="font-bold text-[35px]  text-sky-500">${price}</div>
                        </div>
                        <div className="flex justify-center  items-center gap-3 ">
                            <button className="px-4 py-1 h-[60px] text-[30px] font-bold bg-sky-500 border-2 border-sky-600 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-white rounded-lg" onClick={() => handleBuyNow()}>Buy now</button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center text-[20px] text-gray-400  bg-sky-100 p-2 rounded-xl">{information}</div>
                </div>
            </div>
        </div>
        <LoginPage open={isModalLoginOpen} />
    </div>
}