import { useAuth } from "../hooks/use-auth";
import ProductItemlist from "./ProductItemlist";

export default function AdminCardProduct() {
    const { isAllProduct } = useAuth();
    console.log(isAllProduct)
    return (
        <div className="w-full">
            {isAllProduct.map(el => <ProductItemlist key={el.id} item={el} />)}
        </div>
    )
}