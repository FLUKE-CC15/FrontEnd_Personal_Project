import { useAuth } from "../hooks/use-auth";
import ListCardProduct from "./listCardProduct";

export default function CardProduct() {
    const { isAllProduct } = useAuth()
    return (
        <div className="w-full grid  grid-cols-4 gap-3">
            {isAllProduct.map(el => <ListCardProduct key={el.id} Pitem={el} />)}
        </div>
    )
}