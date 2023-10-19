
import AdminMenu from '../components/AdminMenu'
import ImageSwiper from '../components/ImageSwiper'
import HeadPhone from '../components/product/Headphone'
import LoginPage from './LoginPage'


export default function HomePage() {
    return <div className=' flex flex-col items-center justify-items-center'>
        
        <div className=''>
            <ImageSwiper />
        </div>
        
        <div className='pb-10'>
            <div className=''>
                <HeadPhone />
                <HeadPhone />
                <HeadPhone />
            </div>
        </div >
        
    </div>
}