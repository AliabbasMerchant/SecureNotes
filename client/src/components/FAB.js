import React from 'react'
import M from "materialize-css";

function FAB() {
    function addNote() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems);
        })
    }

    return (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
                <i className="large material-icons" onClick={addNote}> add </i>
            </a>
        </div>
    )
}

export default FAB
