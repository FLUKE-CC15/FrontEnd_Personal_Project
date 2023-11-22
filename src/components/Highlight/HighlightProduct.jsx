import HighlightProductSwiper from './HighlightProductSwiper'
export default function HighlightProduct() {
    return <div className='w-[1200px] flex flex-col mb-5'>

        <div className='flex justify-between items-center h-[50px] px-[50px] my-2'>
            <p className=' text-3xl font-bold '>Interesting course!</p>
            <button className=" w-28 h-8 font-medium bg-blue-50 border-2 hover:border-sky-500 hover:bg-gray-100 hover:text-sky-600 text-sky-500 rounded-full ">See more</button>
        </div>

        <div className='flex justify-center items-center ' >
            <div className='flex'>
                <div className=''>
                    <div className=' overflow-hidden w-[220px] h-[300px] bg-sky-100 rounded-2xl border-2 border-grey-500'>
                        <img src='https://source.unsplash.com/random' className=' w-[220px] h-[300px]' />
                    </div>
                </div>
                <div>
                    <HighlightProductSwiper />
                </div>
            </div>
        </div>
    </div>
}