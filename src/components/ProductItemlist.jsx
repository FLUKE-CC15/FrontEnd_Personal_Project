import { useAuth } from '../hooks/use-auth';
import { useModal } from '../hooks/use-modal';
import UpdetedProductModal from '../layout/updetedProductModal';
import { useNavigate } from 'react-router-dom'
export default function ProductItemlist({ item, selectedProductId, setSelectedProductId }) {
    const { deleteProduct } = useAuth();
    const { onOpenModal } = useModal()
    const navigate = useNavigate();
    const handleClick = () => {
        // navigate(`/product/${item.ProductName}`);
    };

    return (
        <div className="w-full" onClick={handleClick}>
            <div className='grid grid-cols-7 gap-2 text-[15px] py-2 border-y-2 bg-sky-50 w-full h-[110px] rounded-lg border-2 mt-1 hover:border-sky-500'  >
                <p className="col-span-2 flex justify-start items-center pl-3 truncate" >{item.ProductName}</p>
                <div className="col-span-1 flex justify-center items-center">{item.price}</div>
                <div className="col-span-1 flex justify-start items-center truncate">{item.information}</div>
                <div className="col-span-1 flex justify-center items-center gap-1"><img src={item.image} className='h-[90px] rounded-md'
                />
                </div>
                <div className="col-span-1 flex justify-center items-center">{item.productType}</div>
                <div className="col-span-1 flex justify-self-center justify-center items-center gap-1">
                    <button onClick={() => {
                        setSelectedProductId(item.id)
                        onOpenModal("updetedProductModal")
                    }} className=" bg-red-500 h-[35px] w-[70px] flex justify-self-center justify-center items-center  font-bold  rounded-full border-2 text-white hover:text-red-500 hover:bg-white hover:border-red-500">edit</button>
                    <button onClick={() => deleteProduct(item)} className="col-span-1 bg-red-500 h-[35px] w-[70px] flex justify-self-center justify-center items-center  font-bold  rounded-full border-2 text-white hover:text-red-500 hover:bg-white hover:border-red-500">delete</button>
                </div>
            </div>
            {selectedProductId == item.id ? <UpdetedProductModal item={item} /> : null}
        </div>
    )
}