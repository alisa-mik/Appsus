import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'


export class KeepApp extends React.Component {


    state = {
        notes: null
    }

    componentDidMount() {
        console.log('MOUNT!');
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
            <div>
                <NoteList notes={this.state.notes} />

            </div>

        )
    }
}

