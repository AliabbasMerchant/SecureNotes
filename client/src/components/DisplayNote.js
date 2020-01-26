import React from 'react'

function DisplayNote(props) {
    return (
    <div className="row">
        <div className="col s12 m6">
            <div className="card green darken-1">
                <div className="card-content white-text">
<span className="card-title">{props.title}</span>
                    <p>
                        {props.note}
                    </p>
                </div>

                <div className="card-action">
                    <a href="https://google.com"> Link to google </a>
                    <a href="https://github.com/AliabbasMerchant"> Link to AliBhai</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DisplayNote
