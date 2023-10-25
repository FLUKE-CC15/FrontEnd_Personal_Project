import { useState } from "react";
import { useAuth } from "../hooks/use-auth";

import ProductItemlist from "./ProductItemlist";

export default function AdminCardProduct() {
    const { isAllProduct } = useAuth();
    const [selectedProductId, setSelectedProductId] = useState(isAllProduct[0]?.id || null)
    console.log(isAllProduct)
    return (
        <div className="w-full">
            {isAllProduct.map(el => <ProductItemlist selectedProductId={selectedProductId} key={el.id} item={el} setSelectedProductId={setSelectedProductId} />)}
        </div>
    )
}