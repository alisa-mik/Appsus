import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { NewNote } from './cmps/NewNote.jsx'


export class KeepApp extends React.Component {


    state = {
        notes: null
    }

    componentDidMount() {
        this.loadNotes()

    }

    loadNotes() {
        console.log('loadnotes');
        noteService.query()
            .then((notes) => {
                // console.log(notes);
                this.setState({ notes })
                console.log(this.state.notes);

            })
    }


    render() {

        console.log('RENDER!');
        if (!this.state.notes) return <div>Loading...</div>
        return (
            <section>
                <div className="add-note">
                    <NewNote />

                </div>
                <div className="pinned">
                    <h4>Pinned</h4>
                    <NoteList notes={this.state.notes} isPinned={true}/>

                </div>
                <div className="other-notes">
                    <h4>Other notes</h4>
                    <NoteList notes={this.state.notes} isPinned={false}/>

                </div>
            </section>

        )
    }
}

