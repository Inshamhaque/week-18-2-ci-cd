export function RevenueCard({title,amount,ordercount,nextPayoutDate}){
    if(nextPayoutDate!=null){
        return(
            <div className="rounded overflow-hidden text-white-500 shadow-md ">
                <div className="shadow-md">
                    <div className="bg-blue-700 ">
                        <div className="flex flex-row p-2" >
                            <div className="text-neutral-100 justify-center ">
                                {title}
                            </div>
                            <div className="ml-1 pt-1 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-neutral-100">
                                    < path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center text-neutral-100"> 
                            <div className="font-bold text-lg p-2 pt-0 justify-center text-center"> 
                                    ₹ {amount}
                            </div>
                            <div className="cursor-pointer justify-center flex flex-row  items-center underline">
                                <div className="pr-2 text-neutral-100 "> 
                                    {ordercount ? <div>{ordercount} order(s)</div> : null} 
                                </div>
                                <div className="flex justify-center items-center ml-0 md-1"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> {/* Changed 'stroke-width' to 'strokeWidth' */}
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-750 p-2 flex text-neutral-100 justify-between item-center" >
                        <div>
                            Next payout date: 
                        </div>
                        <div>
                            {nextPayoutDate}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className=" overflow-hidden text-white-500">
            <div className=" rounded shadow-md bg-white">
                <div className="flex flex-row p-2">
                    <div className="text-slate-600 justify-center ">
                        {title}
                    </div>
                    <div className="ml-1 pt-1 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            < path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center"> 
                    <div className="font-bold text-lg p-2 pt-0 justify-center text-center"> 
                            ₹ {amount}
                    </div>
                    <div className="cursor-pointer justify-center flex flex-row  items-center underline">
                        <div className="pr-2 text-blue-700 "> 
                            {ordercount ? <div>{ordercount} order(s)</div> : null} 
                        </div>
                        <div className="flex justify-center items-center ml-0 md-1"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> {/* Changed 'stroke-width' to 'strokeWidth' */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}