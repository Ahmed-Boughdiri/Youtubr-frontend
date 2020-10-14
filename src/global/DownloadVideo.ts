import axios from "axios";
import Axios from "./Axios";

export async function getDownloadLink(url:String) {
    const req = await Axios.post("/api/download",{ url })
    const res = req.data;
    return res;
}

export async function downloadVideo(link:any) {
    await axios.get(link)
}
