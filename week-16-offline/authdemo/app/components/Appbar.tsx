"use client"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
export const Appbar = ()=>{
    const session = useSession();
    return( 
        <div>
            <button onClick={()=>{
                signIn();
            }}>Sign in</button>
            {JSON.stringify(session)}

        </div>
    )
}