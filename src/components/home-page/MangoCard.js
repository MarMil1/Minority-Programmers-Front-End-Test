import React from 'react'
import './MangoCard.css'
import dummyData from './dummyData.json'
import Card from './card.js'

function MangoCard() {
    
    window.onload = () => {
        const leftBtn = document.getElementById('scrollLeft');
        leftBtn.onclick = () => {
              document.getElementById('mainCont').scrollLeft += 120;
        }

        const rightBtn = document.getElementById('scrollRight');
        rightBtn.onclick = () => {
            document.getElementById('mainCont').scrollLeft -= 120;
        }

    }

    return (
        <div className="main">
            <i id="scrollLeft" className="fas fa-arrow-circle-left fa-3x"></i>
            <div id="mainCont" className="container d-inline-flex p-2 main-container">
                {dummyData.map(data => 
                        <Card
                            key={data.id} 
                            id={data.id}
                            title={data.title}
                            text={data.text}
                            percent={data.percent}
                            fundsRaised={data.fundsRaised}
                            value={data.value}
                        />
                    )
                }
            </div>
            <i id="scrollRight" className="fas fa-arrow-circle-right fa-3x"></i>
        </div>
    )
}

export default MangoCard
