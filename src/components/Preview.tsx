import React,{ useState,useEffect } from "react";
import "../layout/Preview.css";
import "../mobile/Preview.css";
import { getDownloadLink, downloadVideo } from "../global/DownloadVideo";

const Preview:React.FC<any> = ({ close, data }) => {
  const [link,setLink] = useState("");
  const download = async(url:String) =>{
    const res:any = await getDownloadLink(url);
    setLink(res.url)
    await downloadVideo(res.url);
  }
  useEffect(() =>{
    console.log(data)
  },[])
  useEffect(() =>{
    console.log(link)
  },[link])
  return (
    <div className="preview">
      <div className="preview-box">
        <div className="video-preview">
          <iframe
            title="video"
            height="99%"
            width="100%"
            src={data.displayLink}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-details">
            <div>
                <h4>{data.title}</h4>
                <h3>{data.owner}</h3>
                <p>
                  {data.description}
                </p>
                <button onClick={() =>download(data.link)}>Download Audio</button>
            </div>
        </div>
      </div>
      <div className="close" onClick={close}>
          <img src={require("../assets/close.svg")} alt="" />
      </div>
    </div>
  );
};

export default Preview;
