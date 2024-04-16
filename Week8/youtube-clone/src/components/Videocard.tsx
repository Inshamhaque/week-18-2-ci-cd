export function Videocard(props:any){
    return(
        <div className="p-3">
            <img src= {props.image} className="rounded-xl"/>
            <div className="grid grid-cols-12 pt-2">
                <div className="cols-span-3">
                    <img className = "rounded-full h-30 w-30" src= {props.thumbImage} alt="" />
                </div>
                <div className="col-span-10 pl-5">
                    <div>{props.title}</div>
                    <div className="text-gray-600 text-base" >{props.author}</div>
                    <div className="text-gray-600 text-base">{props.views} | {props.timestamp}</div>
                </div>
            </div>
        </div>
    )
}