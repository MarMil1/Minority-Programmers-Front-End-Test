import React from 'react'
import './RelatedCard.css'

function RelatedCard(props) {
    return (
        <div className="bottom-bar-cards">
            <div className="related-card-container">
                <div className="related-image-title">
                    <div className="related-image"></div>
                    <div className="related-title">{props.title}</div>
                </div>
                <div className="related-funds-percent">
                    <div className="related-funds-title">Funds raised</div> 
                    <div className="related-percent">{props.percent}% completed</div>
                </div>
                <div className="related-amount">{props.fundsRaised}</div>
                <div className="related-progress">
                    <div className="related-progress-bar" role="progressbar" style={{width: props.value}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}

export default RelatedCard
