import React from "react";
import "../layout/Preview.css";
import "../mobile/Preview.css";

const Preview:React.FC<any> = ({ close }) => {
  return (
    <div className="preview">
      <div className="preview-box">
        <div className="video-preview">
          <iframe
            title="video"
            height="99%"
            width="100%"
            src="https://www.youtube.com/embed/OLHdzLpMg-s"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="video-details">
            <div>
                <h4>Gary Vaynerchuck</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
                    pariatur assumenda ut soluta suscipit est vel fugiat rem delectus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
                    pariatur assumenda ut soluta suscipit est vel fugiat rem delectus!
                </p>
                <button>Download Audio</button>
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
