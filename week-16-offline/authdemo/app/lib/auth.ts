import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";

export const  NEXT_AUTH ={
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials:any){
            const name  = credentials.username;
            const password = credentials.password;
            return{
                id: "user1",
                name,
                email:`${name}@gmail.com`
            };
          },
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks :{
        jwt : ({ token , user } : any ) =>{
            console.log(token);
            token.userId = token.sub
            token.type = "admin"
            return token;
        },
        session:({session, token, user}:any)=>{
            
            if(session && session.user){
                session.user.id = token.sub;
                session.user.token = token.iat;
            }
            console.log(session)
            return session;
        }
    }
}