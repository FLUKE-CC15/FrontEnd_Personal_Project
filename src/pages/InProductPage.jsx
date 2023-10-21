import HeadphoneSwiper from "../components/HeadphoneSwiper";
import { Link } from 'react-router-dom'
import { useState } from "react";

import img1 from '../images/pet/8.png'
import img2 from '../images/pet/9.png'
import img3 from '../images/pet/10.png'
import img4 from '../images/pet/11.png'
import CategoryButton from "../components/categoryButton";
import { useAuth } from "../hooks/use-auth";
import LoginPage from "./LoginPage";
import { useModal } from "../hooks/use-modal";
export default function InProduct() {
    const { onOpenModal } = useModal()
    const [img, setImg] = useState(<img src={img1} />)
    const onClickSelectImg = (link) => {
        setImg(link)
    }
    const { isLogin } = useAuth()
    const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)

    const handleBuyNow = () => {
        if (!isLogin) {
            onOpenModal("loginModal")
            return
        }
    }
    return <div className="flex flex-col items-center ">

        <CategoryButton />

        <div className="flex justify-start items-center w-[1100px] px-3 ">
            <div className="flex justify-start w-[1100px] gap-5  py-2">
                <div className="text-sky-500"><p>Home</p></div>
                <div className="text-sky-500"> ❯ </div>
                <div className="text-sky-500"><p>Products</p></div>
                <div className="text-sky-500"><p> ❯ </p></div>
                <div className="text-sky-500"><p>Gaming Headphone</p></div>
                <div className="text-sky-500"><p> ❯ </p></div>
                <div className="text-sky-500"><p>Product Name</p></div>
            </div>
        </div>
        <div className=" text-[40px] font-bold w-[1100px] pl-2">Product Name</div>

        <div className="flex gap-5 items-center p-5 pb-20">
            <div className="flex justify-center items-center gap-2">
                <div>
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
                </div>
                <div >
                    <div className="w-[500px] h-[500px] bg-sky-50 border-2 text-sky-500 rounded-lg ">
                        {img}
                    </div>
                </div>
            </div>

            <div className="">
                <div className="w-[500px] h-[500px] ">
                    <div className="font-bold text-[25px] px-3">หูฟัง Beyerdynamic T1 3rd Generation Over-Ear Headphone</div>
                    <div className="font-bold text-[35px] p-3 text-sky-500">$39,999</div>
                    <div className="flex justify-center items-center text-[50px] text-gray-400 font-bold bg-sky-100 h-[150px] rounded-xl">Product Spec</div>
                    <div>
                        <div className="flex flex-row justify-center items-center pt-5 pb-2 gap-5">
                            <div className="w-[60px] h-[60px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg "></div>
                            <div className="w-[60px] h-[60px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg "></div>
                            <div className="w-[60px] h-[60px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg "></div>
                            <div className="w-[60px] h-[60px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg "></div>
                            <div className="w-[60px] h-[60px] bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg "></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 py-3">
                        <div className="font-bold"> Quantity :</div>
                        <div className="flex justify-center items-center w-[90px]">
                            <button className="w-[24px] h-[30px] flex border-2 justify-center items-center rounded-l-lg font-bold hover:border-sky-500">-</button>
                            <div className="w-[42px] h-[30px] flex border-y-2 justify-center items-center font-bold" >2</div>
                            <button className="w-[24px] h-[30px] flex border-2 justify-center items-center rounded-r-lg font-bold hover:border-sky-500">+</button>
                        </div>
                    </div>
                    <div className="flex justify-center px-3 py-1 items-center gap-3">
                        <Link to='/emptycart'><button className="px-4 py-1 font-bold bg-sky-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-lg text-sm">Add to cart</button></Link>
                        <button className="px-4 py-1 font-bold bg-sky-500 border-2 border-sky-600 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-white rounded-lg text-sm" onClick={() => handleBuyNow()}>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full">
            <div className="p-5  grid justify-center">
                <div className=" text-[30px] font-bold pl-2">Interesting Product!</div>
                <HeadphoneSwiper />
            </div>
        </div>
        <LoginPage open={isModalLoginOpen} />

    </div>
}