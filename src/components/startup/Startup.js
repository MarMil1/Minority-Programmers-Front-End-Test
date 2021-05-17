import React from 'react'
import './Startup.css'
import StartupContent from './StartupContent.js'
import dummyData from '../home-page/dummyData.json'

function Startup(props) {

    const search = window.location.href;
    const searchQueryArr = search.split("/");
    const queryId = searchQueryArr[searchQueryArr.length - 1].match(/[0-9]/g).join("");
    const dataArray = dummyData.filter(data => data.id === parseInt(queryId));

    let startup; 
    if (dataArray.length > 0) {
        startup = <StartupContent 
                    id={dataArray[0].id}
                    title={dataArray[0].title} 
                    percent={dataArray[0].percent}
                    fundsRaised={dataArray[0].fundsRaised}
                    value={dataArray[0].value}
                    about={dataArray[0].about}
                    vision={dataArray[0].vision}
                 />
    } else {
        startup = <div>Startup Not Found</div>;
    }

    return (
        startup
    )
}

export default Startup
