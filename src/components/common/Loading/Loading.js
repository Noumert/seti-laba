import loading from "./../../../assets/images/Loading.svg";
import React from 'react';


const Loading = (param) => {
    return (
                    <div className="Loading">
                        {param.isLoading ? <span><img src={loading} /><br/> API is very slow if you waiting more than 30 seconds reload</span> : null }
                    </div>
    )
}

export default Loading;