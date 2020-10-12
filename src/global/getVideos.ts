import Axios from "./Axios";

export default async function(search:String) {
    const req = await Axios.post("/api/search",{ search });
    const res = await req.data;
    return res; 
}
