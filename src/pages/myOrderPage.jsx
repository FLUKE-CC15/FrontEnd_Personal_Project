import { useEffect } from "react";
import { useAuth } from "../hooks/use-auth";

export default function MyOrderPage() {
    const { getMyOrder, isMyOrder } = useAuth();
    useEffect(() => {
        getMyOrder()

    }, [])

    console.log(getMyOrder, "***********")
    console.log(isMyOrder, "***********")
    return (<div className="">
        <div className="flex w-full justify-center  items-center gap-5">
            <div className=" text-[40px] font-bold ">MY ITEM</div>
        </div>
        <div className=" grid mt-3 mb-[50px] grid-cols-4 gap-3">
            {isMyOrder.map(e => {
                return (
                    <div key={e.id} className="">
                        <div div className=' bg-white overflow-hidden w-[220px] h-[300px] rounded-2xl border-2 hover:border-sky-500'>
                            <div className="w-full overflow-hidden  h-[75%] bg-gray-200 ">
                                <img src={e.product?.image} />
                            </div>
                            <div className="h-[25%] flex flex-col justify-center px-3">
                                <div className="text-[12px] ">{e.product?.ProductName}</div>
                                <div className="text-[12px] font-bold">{e.status}</div>
                            </div>
                        </div>
                    </div >
                )
            })}</div>
    </div >
    )
}