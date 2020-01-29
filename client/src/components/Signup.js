import React from 'react'

function Signup() {
    return (
        <div>
            <span className="red-text text-darken-3 center-align">
                <h3>Secure Notes SignUp</h3>
            </span>

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Username" value="" id="name"
                                type="text" className="active validate" required />
                            <label for="name">Username</label>
                        </div>

                        <div className="input-field col s6">
                            <label for="password">Password</label>
                            <input id="password" type="password" placeholder="Password" 
                                className="validate" required />
                        </div>
                    </div>

                    <div class = "row">
                        <div class = "input-field col s12">
                            <input placeholder = "Email" id = "email" type = "email"
                                className = "validate" />
                            <label for = "email">Email</label>
                        </div>
                    </div>

                    <div className="row" style={{textAlign : "center"}}>
                        <button className="btn large waves-effect waves-teal" style={{position:"absolute"}}>
                            SignUp
                        </button>
                    </div>
                </form>            
            </div>
        </div>
    )
}

export default Signup
