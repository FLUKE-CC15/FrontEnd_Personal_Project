import delivery from '../images/delivery.png'
import givemoney from '../images/givemoney.png'
import security from '../images/security.png'

export default function Footer() {
    return <footer>
        <div className='flex items-center justify-center p-5 bg-gray-600 h-[80px]'>
            <div className='flex  items-center gap-20 text-white'>
                <div className='flex items-center gap-3'>
                    <img src={delivery} className='w-[60px]' />
                    <div>
                        <p className='font-bold text-lg'>Free Shipping</p>
                        <p>เมื่อซื้อขั้นต่ำ 4,999.-</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={security} className='w-[60px]' />
                    <div>
                        <p className='font-bold text-lg'>Warranty</p>
                        <p>เคลมง่ายถึงใจ</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={givemoney} className='w-[60px]' />
                    <div >
                        <p className='font-bold text-lg'>Cash on Delivery</p>
                        <p>ของถึงมือ แล้วค่อยจ่าย</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col p-5 bg-sky-500 h-[70px] justify-center items-center'>

            <div className="flex gap-5 p-2 font-semibold">
                <h1 className="hover:cursor-pointer text-white">About NextItem.com</h1>
                <h1 className=" text-white">|</h1>
                <h1 className="hover:cursor-pointer text-white">Terms and Conditions</h1>
                <h1 className=" text-white">|</h1>
                <h1 className="hover:cursor-pointer text-white">Privacy Policy</h1>
                <h1 className=" text-white">|</h1>
                <h1 className="hover:cursor-pointer text-white">Customer service</h1>
                <h1 className=" text-white">|</h1>
                <h1 className="hover:cursor-pointer text-white">Contact us</h1>

            </div>

            <div className="mb-2"><p className='text-white text-[12px]'>Copyright © 2023 WacharinCh All rights reserved.</p></div>


        </div>

    </footer>
}