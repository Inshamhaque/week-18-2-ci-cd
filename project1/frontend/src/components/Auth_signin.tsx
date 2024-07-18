import { ChangeEvent, useState } from "react";
import {signininput} from '@haqueinsham/medium';
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
interface Authprops {
    str  : string
}
export const Auth2 = ({str} : Authprops)=>{
    const [postinput,setpostinput] = useState<signininput>({
        email : "",
        password : ""
    })
    const navigate = useNavigate();

    async function sendReq(){
        const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postinput);
        const response = res.data;
        const jwt = response.jwt;
        localStorage.setItem("jwt",jwt);
        navigate('/blogs');
        
    }
    return(
        <div className="text-center ">
            <div className= "font-bold text-3xl ">
                  {str==='signup'?"Create an Account":"Sign into Your account" }
            </div>
            <div className="flex text-slate-500 mt-1 m-4 justify-center items-center">
                <div>{str==='signup'?"Already have an Account?":"Don't have an account?"} </div>                        
                <div className="p-2 underline underline-offset-1 onclick:text-slate-700"> {str==='signup'?"Signin":"Signup"}</div>  
            </div>
            <div className=""> 
                 
                 <InputPlaceholder label="Email" placeholder="m@example.com" onchange={(e)=>{
                    setpostinput({
                        ...postinput,
                        email : e.target.value
                    })
                 }}/>
                 <InputPlaceholder label="Password" type="password" placeholder="Enter password" onchange={(e)=>{
                    setpostinput({
                        ...postinput,
                        password: e.target.value
                    })
                 }}/>
                 <div className="mt-10">
                 <button onClick={sendReq}  type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{str==='signup'?'Sign Up':'Sign in'}</button>
                 </div>
                 
            </div>
        </div>
    )
}
interface InputPlaceholdertype{  
    label : string; 
    placeholder : string;
    onchange : (e:ChangeEvent<HTMLInputElement>) => void 
    type? : string
}
function InputPlaceholder({label , placeholder , onchange, type } : InputPlaceholdertype){
    return (
        <div className="mt-4">
            <label  className="block mb-2 text-sm font-semibold text-slate-900 dark:text-black text-left">{label}</label>
            <input onChange = {onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    )
}