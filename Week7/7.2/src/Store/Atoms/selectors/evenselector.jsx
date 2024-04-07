import { selector } from "recoil";
import { countAtom } from "../count";

export const evenselector = selector(
    {
        key: "evenselector",
        get: ({get})=>{
            const count = get(countAtom);
            return count % 2 === 0;
        }
    }
);