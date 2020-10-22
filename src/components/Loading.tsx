import React from "react";
import "../layout/Loading.css";
import ReactLoading from 'react-loading';

const Loading = () =>{
    return (
        <div className="loading">
            <div className="loader">
                <ReactLoading type={"bars"} color={"#e95a5c"} height={'100%'} width={'100%'} />
            </div>
        </div>
    )
}

export default Loading;
