
import { createContext, useEffect } from 'react';
import { useState } from 'react'
export const ModalContext = createContext();


export default function ModalContextProvider({ children }) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalType, setModalType] = useState(null)
    const [price, setPrice] = useState(null);
    const [pId, setPId] = useState(null);
    const onOpenModal = (type, productPrice, id) => {
        setIsOpenModal(true)
        setModalType(type)
        setPId(id)
        setPrice(productPrice);
    }

    //     useEffect(()=>{
    // console.log("type" ,modalType)
    // console.log("isOpen", isOpenModal)
    //     },[modalType,isOpenModal])

    const onCloseModal = () => {
        setIsOpenModal(false)
    }


    return <ModalContext.Provider value={{ isOpenModal, onOpenModal, onCloseModal, modalType, price, pId }}>{children}</ModalContext.Provider>
}
