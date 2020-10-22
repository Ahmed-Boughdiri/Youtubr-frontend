import React from "react";
import "../layout/ResultsContainer.css";
import "../mobile/ResultsContainer.css";

const ResultsContainer:React.FC<any> = ({ open, videos }) =>{
    return(
        <div className="results-container">
            <div className="row">
                {
                    videos.map((v:any) =>(
                        <div className="item" key={v.id}>
                            <div className="item-container" style={{backgroundImage: `url(${v.thumbnail})`}}>
                                <div className="layer">
                                    <img src={require("../assets/play.svg")} alt="" onClick={() =>open(v)} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ResultsContainer
