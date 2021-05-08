import { noteService } from '../services/note-service.js'
export class NoteTxt extends React.Component {


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
                <p>{this.props.note.info.txt}</p>
                {/* <button className="btn btn-remove" onClick={this.onRemoveNote}>X</button> */}
            </div>

        )
    }
}


