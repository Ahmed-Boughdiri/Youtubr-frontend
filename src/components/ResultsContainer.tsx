import React from "react";
import "../layout/ResultsContainer.css";
import "../mobile/ResultsContainer.css";

const ResultsContainer:React.FC<any> = ({ open }) =>{
    return(
        <div className="results-container">
            <div className="row">
                <div className="item">
                    <div className="item-container">
                        <div className="layer">
                            <img src={require("../assets/play.svg")} alt="" onClick={open} />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-container">
                        <div className="layer">
                            <img src={require("../assets/play.svg")} alt="" />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-container">
                        <div className="layer">
                            <img src={require("../assets/play.svg")} alt="" />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-container">
                        <div className="layer">
                            <img src={require("../assets/play.svg")} alt="" />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-container">
                        <div className="layer">
                            <img src={require("../assets/play.svg")} alt="" />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-container">
                        <div className="layer">
                            <img src={require("../assets/play.svg")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsContainer
