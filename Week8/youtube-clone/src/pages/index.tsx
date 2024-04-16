import Image from "next/image";
import { Inter } from "next/font/google";
import {Videocard} from '../components/Videocard';
import { Videogrid } from "@/components/Videogrid";
const inter = Inter({ subsets: ["latin"] });
import { Appbar } from "@/components/Appbar";

export default function Home() {
  return(
    <div>
      <Appbar />
      <Videogrid />
    </div>
  )
}
