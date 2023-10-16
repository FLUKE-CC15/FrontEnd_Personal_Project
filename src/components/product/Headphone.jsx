import HeadphoneSwiper from './HeadphoneSwiper'

export default function HeadPhone() {
    return <div className='w-[1200px] h-[350px] my-5'>

        <div className='flex justify-between items-center h-[50px] px-3'>
            <p className=' text-3xl font-bold '>Product Name</p>
            <button class=" w-28 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">See more</button>
        </div>

        <div  >
            <div className='flex'>
                <div className=' p-2 w-[200px] h-[300px]'>
                    <div className=' w-full h-full bg-sky-100 rounded-2xl border-2 border-grey-500'>
                        
                    </div>
                </div>
                <div>
                <HeadphoneSwiper />
                </div>
            </div>
        </div>
    </div>
}