import React from 'react'

function NavBar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" dataTarget="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a>Sass</a></li>
                        <li><a>Components</a></li>
                        <li><a>Javascript</a></li>
                        <li><a>Mobile</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a>Sass</a></li>
                <li><a>Components</a></li>
                <li><a>Javascript</a></li>
                <li><a>Mobile</a></li>
            </ul>
        </div>
    )
}

export default NavBar
