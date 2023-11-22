import HighlightProduct from "../components/Highlight/HighlightProduct";
import ShowPromotion from "../layout/showPromotion";

export default function HomePage() {
    return <div className='mt-5 flex flex-col items-center justify-items-center'>
        <div className="w-full mb-[100px]">
            <ShowPromotion />
        </div>
        <div className="mb-[80px]">
            <HighlightProduct />
        </div>
    </div>
}