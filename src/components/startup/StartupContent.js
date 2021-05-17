import React, { useState } from 'react'
import './StartupContent.css'
import { Link } from "react-router-dom";
import dummyData from '../home-page/dummyData.json'
import RelatedCard from './RelatedCard';

function StartupContent(props) {
    const [mobile, setMobile] = useState(false);

    // resize the hero button 
    const showMobileButton = () => {
        if (window.innerWidth >= 992) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }
    window.addEventListener('resize', showMobileButton);

    window.onload = () => {
        const leftBtn = document.getElementById('scrollLeftBtn');
        leftBtn.onclick = () => {
              document.getElementById('mainContRel').scrollLeft += 120;
        }

        const rightBtn = document.getElementById('scrollRightBtn');
        rightBtn.onclick = () => {
            document.getElementById('mainContRel').scrollLeft -= 120;
        }

    }

    return (
        <>
            <div key={props.id} className="container startup-container">
                <div className="top-bar">
                    <Link to="/home">  
                        <i className="fad fa-arrow-alt-circle-left fa-2x"></i>
                    </Link>
                    <div className="image-logo-name">
                        <div className="mangoswap-image-startup"></div>
                        <div className="startup-title">
                            {props.title}
                        </div>
                    </div>
                    <div className="progress-funds-container">
                        <div className="progress-funds-titles">
                            <div className="funds-title">Funds raised</div>
                            <div className="progress-title">{props.percent}% {window.innerWidth >= 992 || window.innerWidth <= 768 ? 'complete' : ''}</div>
                        </div>
                        <div className="funds-amount">{props.fundsRaised}</div>
                    </div>
                    <div className="progress-and-button">
                        <div className="progress-startup">
                            <div className="progress-bar-startup" role="progressbar" style={{width: props.value}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="button-startup">
                            <button className={mobile ? "btn btn-light btn-sm" : "btn btn-light"}>View Startups</button>
                        </div>
                    </div>
                </div>
                <div className="side-bar">
                    <div className="side-bar-date">Founded 17th May, 2015</div>
                    <hr/>
                    <div className="side-bar-titles">Website</div>
                    <div className="side-bar-website">mangoswap.com  
                        <i className="fab fa-twitter" style={{marginLeft:"10px"}}></i>
                        <i className="fab fa-linkedin-in" style={{marginLeft:"10px"}}></i>
                        <i className="fab fa-facebook-f" style={{marginLeft:"10px"}}></i>
                    </div>
                    <div className="side-bar-titles">Location</div>
                    <div className="side-bar-location-employees">San Francisko, Caifornia</div>
                    <div className="side-bar-titles">Team size</div>
                    <div className="side-bar-location-employees">100-500 people</div>
                    <hr/>
                    <div className="side-bar-date">Meet the team</div>
                    <div className="side-bar-date-team">
                        <i className="fas fa-circle fa-3x" style={{color: "gray"}}></i>
                        <div style={{marginLeft:"20px"}}> 
                            Edmund Kitan
                        <div style={{fontSize:"12px"}}>Founder</div>
                        </div>
                    </div>
                    <div className="side-bar-date-team-space">
                        <i className="fas fa-circle fa-3x"></i>
                        <div style={{marginLeft:"20px"}}> 
                            Olarenwaju Cesar
                        <div style={{fontSize:"12px"}}>Co-Founder</div>
                        </div>
                    </div>
                    <div className="side-bar-date-team-space">
                        <i className="fas fa-circle fa-3x"></i>
                        <div style={{marginLeft:"20px"}}> 
                            Uzo Amanda
                        <div style={{fontSize:"12px"}}>Head of Growth</div>
                        </div>
                    </div>
                    <div className="side-bar-date-team-space">
                        <i className="fas fa-circle fa-3x"></i>
                        <div style={{marginLeft:"20px"}}> 
                            Donald Duke
                        <div style={{fontSize:"12px"}}>Head of Product</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="side-bar-date">Tags</div>
                    <div className="side-bar-tags">
                        <div className="side-bar-tag"><div style={{margin: "3px"}}>Crypto</div></div>
                        <div className="side-bar-tag"><div style={{margin: "3px"}}>Exchanges</div></div>
                        <div className="side-bar-tag"><div style={{margin: "3px"}}>NFT</div></div>
                        <div className="side-bar-tag"><div style={{margin: "3px"}}>Blockchain</div></div>
                    </div>
                </div>
                <div className="body-container">
                    <div className="body-container-title">About startup</div>
                    <div className="body-container-about">{props.about}</div>
                    <hr/>
                    <div className="body-container-title">Vision</div>
                    <div className="body-container-about">{props.vision}</div>
                </div>
                <div className="bottom-bar">
                    <div className="side-bar-related-title">Related startups
                        <div>
                            <i id="scrollRightBtn" className="fas fa-arrow-right" style={{color:"gray", float:"right"}}></i>
                            <i id="scrollLeftBtn" className="fas fa-arrow-left" style={{color:"gray", float:"right", marginRight:"30px"}}></i>
                        </div>
                    </div>
                    <div id="mainContRel" className="bottom-bar-card">
                    {dummyData.map(data => {
                    return(
                        <RelatedCard 
                            title={data.title}
                            percent={data.percent}
                            fundsRaised={data.fundsRaised}
                            value={data.value}
                        />
                        )})
                    }
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default StartupContent
