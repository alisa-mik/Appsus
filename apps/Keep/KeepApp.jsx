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

    handler = (search=false, recNotes=null) => {
        console.log(this.state.notes); 
        this.setState({
            renderPage: true
        });
        if (search && recNotes) {
            console.log(recNotes); 
            this.setState({ notes: recNotes })
        }
    }

    render() {

        if (!this.state.notes) return <div>Loading...</div>
        return (
            <section className="all-container">
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

