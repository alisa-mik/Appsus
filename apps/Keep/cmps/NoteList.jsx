import { NotePreview } from './NotePreview.jsx'
import { noteService } from '../services/note-service.js'
// export function NoteList({ notes, isPinned }) {
export class NoteList extends React.Component {


    state = {
        messageShown: null
    }


    loadListNotes = () => {
        var notesToDisplay = []
        if (this.props.isPinned) {
            notesToDisplay = this.props.notes.filter((note) => {
                return note.isPinned === true
            })
        }
        else {
            notesToDisplay = this.props.notes.filter((note) => {
                return note.isPinned === false
            })
        }
        console.log(notesToDisplay);
        return notesToDisplay
    }
    onRemoveNote = (ev) => {

        noteService.removeNote(this.props.note)
        // TODO: Render page
        // this.props.history.push('/keep')

    }

    handler = () => {
        this.setState({
            messageShown: true
        });
    }

    render() {
        console.log("in render");
        var notesToDisplay = this.loadListNotes()
        return (
            <div className="note-list">
                {notesToDisplay.map(note => <NotePreview note={note} key={note.id} renderParent={this.handler} />)}
            </div>
        )
    }
}