import { Searchbar } from "./Searchbar"
export const Appbar = () =>{
    return(
        <div className="flex justify-between pt-1 p-3">
            <div className="text-md items-center inline-flex ">Youtube</div>
            <Searchbar />
            <div className="text-md items-center inline-flex ">Sign in</div>

        </div>
    )
}