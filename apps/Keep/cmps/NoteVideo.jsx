


import { noteService } from '../services/note-service.js'
export class NoteVideo extends React.Component {


    state = {

    }
    // onRemoveNote = (ev) => {

    //     noteService.removeNote(this.props.note)
    //     // TODO: Render page
    //     // this.props.history.push('/keep')

    // }
    render() {
        return (
            <div>
                <iframe width="250"
                    src={this.props.note.info.url}>
                </iframe>
                {/* <button className="btn btn-remove" onClick={this.onRemoveNote}>X</button> */}
            </div>

        )
    }
}

