import { RevenueCard } from "./RevenueCard"
export function RevenueCardGrid(){
    return(
        <div className="grid grid-cols-3 gap-x-4 p-5">
            <RevenueCard  title = {"Next payout"} amount={"2310.87"} ordercount={23} nextPayoutDate={"Today,04:00 P.M"}/>
            <RevenueCard  title = {"Next payout"} amount={"2310.87"} ordercount={23}/>
            <RevenueCard  title = {"Next payout"} amount={"2310.87"} ordercount={23}/>
        </div>
    )
}