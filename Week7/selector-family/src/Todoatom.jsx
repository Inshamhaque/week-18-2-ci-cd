import axios from "axios";
import {atom} from "recoil";
import {atomFamily,selectorFamily} from "recoil"
export const todoAtomFamily = atomFamily({
    key : "todoAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get : (id)=>async({get})=>{
            const res = await axios.get("https://sum-server.100xdevs.com/todos?id=1");
            return res.data.todo;
        }
    })
})