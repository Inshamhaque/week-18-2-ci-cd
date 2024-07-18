import Image from "next/image";
import { Appbar } from "./components/Appbar";
//server side component
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./lib/auth";

export default async function Home() {
  const sesson = await getServerSession(NEXT_AUTH);
  return(
    <div>
      <Appbar />
      <div>
      User components in the server side component:-
      {JSON.stringify(sesson)}
      </div>


    </div>
  )

}