import React from 'react'
import './card.css'
import { Link } from "react-router-dom";

function Card (props) {
    return (
     
        <div key={props.id} className="container mango-card">
            <div key={props.id} className="row mangoswap">
                <div className="col">
                    <div className="mangoswap-image"></div>
                </div>
                <div className="col mangoswap-title">
                {props.title}
                </div>
            </div>

            <div className="row">
                <div className="col">
                {props.text}
                </div>
            </div>
            <div className="row funds">
                <div className="col">
                Funds raised
                </div>
                <div className="col">
                {props.percent}% complete
                </div>
            </div>
            <div>{props.fundsRaised}</div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: props.value}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to={`/startup/id=${props.id}`}>
                        <button className="btn btn-light btn-mango-one">Find Startup</button>
                    </Link>
                </div>
                <div className="col">
                    <Link to={`/startup/id=${props.id}`}>
                        <button className="btn btn-light btn-mango-two">Learn more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card