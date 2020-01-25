import React from 'react'

function DisplayNote() {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card green darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Title</span>
                        <p>
                            Notes
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
