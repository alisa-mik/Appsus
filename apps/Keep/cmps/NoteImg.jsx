

import { noteService } from '../services/note-service.js'
export class NoteImg extends React.Component {


    state = {

    }
    // onRemoveNote = (ev) => {

    //     noteService.removeNote(this.props.note)
    //     // TODO: Render page
    //     // this.props.history.push('/keep')

    // }
    render() {
        return (
            <div >
                <img src={this.props.note.info.url} alt="" className="image" />
                {/* <button className="btn btn-remove" onClick={this.onRemoveNote}>X</button> */}
            </div>

        )
    }
}


