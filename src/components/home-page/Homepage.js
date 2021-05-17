import React, { useState } from 'react'
import './Homepage.css'
import dummyData from './dummyData.json'
import MangoCard from './MangoCard.js'
import Card from './card.js'

function Homepage() {
    const [mobile, setMobile] = useState(false);

    const showMobileButton = () => {
        if (window.innerWidth >= 960) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }

    window.addEventListener('resize', showMobileButton);

    return (
        <>
            <div className="hero-banner">
                <div className="hero-content">
                    <div className="hero-slogan">
                    Invest directly into minority innovations.
                    </div>
                    <div className="button">
                        <button className={mobile ? "btn btn-light btn-sm" : "btn btn-light"}>View Startups</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row featured-startups" style={{marginLeft: "-50px"}}>
                    <div className="col-3">
                        <div className="featured-static">
                            <h3 className="featured-static-title">Featured Startups</h3>
                            <div className="featured-static-text">Invest in the next billion dollar company today</div>
                        </div>
                    </div>
                    <div className="col mango">
                        <MangoCard />
                    </div>
                </div>
                <div className="row static-images">
                    <div className="col image">
                        <button type="button" className="btn btn-light clear-button">Advice a startup</button>
                    </div>
                    <div className="col image">
                        <button type="button" className="btn btn-light clear-button">Join Minority Ventures Cohort</button>
                    </div>
                    <div className="col image">
                        <button type="button" className="btn btn-light clear-button">Help &lt;Code&gt; </button>
                    </div>
                </div>
                <div className="row upcoming-startups" style={{marginLeft: "-50px"}}>
                    <div className="col-3">
                        <div className="featured-static">
                            <h3 className="featured-static-title">Upcoming Startups</h3>
                            <div className="featured-static-text">These visionary companies and disruptors are on their journey to change the world.</div>
                        </div>
                    </div>
                    <div className="three-mango-cards">
                        {dummyData.slice(0, 3).map(data => 
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
                </div>
                <button type="button" className="btn btn-light load-button">Load more</button>
            </div>

            
        </>
    )
}

export default Homepage
