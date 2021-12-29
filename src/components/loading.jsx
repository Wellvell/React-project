import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Loading() {
    return (
        <div align='center'>
            <Loader
                type="Hearts"
                height={180}
                width={180}
                color="#969"
                timeout={3000} //3 secs
            />
        </div>
    )
}

export default Loading