import { orderData } from "./data";

export function Datatable() {
    return(
        <div>
            {orderData.map((data)=>{
                return(
                    <div className="divide-solid flex flex-row justify-between">
                        <div className="text-left">{data.id}</div>
                        <div className="text-left">{data.status}</div>
                        <div className="text-left">{data.transactionID}</div>
                        <div className="text-left">{data.refundDate}</div>
                        <div className="text-left">{data.amount}</div>
                    </div>
                )
            })}
        </div>
    )
}
