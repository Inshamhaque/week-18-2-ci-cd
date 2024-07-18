import Image from "next/image";
import axios from "axios";
import client from '@/db'

async function getuserdata(){
  try{
    const user = await client.user.findFirst({});
    return{
      email : user?.email,
    }
  }
  catch(e){
    console.log(e);
  }
}
//async component - mind boggling(only in server side component)
export default async function Home() {
  const userdata = await getuserdata();

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border rounded p-8">
        <div>{userdata?.email}</div>
      </div>
    </div>
  );
}
