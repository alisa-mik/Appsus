import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { NewNote } from './cmps/NewNote.jsx'


export class KeepApp extends React.Component {

    state = {
        notes: null,
        renderPage: null
    }

    componentDidMount=()=> {
        this.loadNotes()

    }

    loadNotes =() => {
        noteService.query()
            .then((notes) => {
                this.setState({ notes })

            })
    }

    handler = () => {
        this.setState({
            renderPage: true
        });
    }

    render() {

        if (!this.state.notes) return <div>Loading...</div>
        return (
            <section>
                <div className="add-note">
                    <NewNote renderParent={this.handler}/>

                </div>
                <div className="pinned">
                    <h4>Pinned</h4>
                    <NoteList notes={this.state.notes} isPinned={true} renderParent={this.handler}/>

                </div>
                <div className="other-notes">
                    <h4>Other notes</h4>
                    <NoteList notes={this.state.notes} isPinned={false} renderParent={this.handler}/>

                </div>
            </section>

        )
    }
}

