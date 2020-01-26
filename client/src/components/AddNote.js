import React from 'react'

function AddNote() {
    return (
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Placeholder" id="title" type="text" class="validate" />
                    <label for="title">Note title</label>
                </div>
                <div class="input-field col s6">
                    <input id="Description" type="text" class="validate" />
                    <label for="description">Note Description</label>
                </div>
                <div>
                    <button onSubmit={}>Submit</button>
                </div>

            </div>
      </form>
    )
}

export default AddNote
