import React, { Component } from 'react'
import NoteViewer from "./NoteViewer";
import FAB from "./FAB";
export class Main extends Component {
    render() {
        return (
            <div>
                <NoteViewer />
                <FAB />
            </div>
        )
    }
}

export default Main
