import CheckoutPage from "../../pages/CheckoutPage"
import AddProductModal from "../AddProductModal"
import LoginModal from "../LoginModal"
import UpdetedProductModal from "../updetedProductModal"
export const ModalProvider = () => {
    return (<><LoginModal /><AddProductModal /><UpdetedProductModal /> <CheckoutPage /></>)
}