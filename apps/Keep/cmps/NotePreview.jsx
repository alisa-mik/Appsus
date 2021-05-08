import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { Buttons } from './Buttons.jsx'

export class NotePreview extends React.Component {

    render() {
        var note = this.props.note
        switch(note.type) {
            case "NoteText": {
                return (
                    // <h4>hi I'm text</h4>
                    <div className="note note-txt">
                    <NoteTxt note={note} />
                    <Buttons note={note} renderParent={this.props.renderParent} />
                    </div>
                )
            }
            case "NoteImg": {
                return (
                    <div className="note note-image">
                    <NoteImg note={note} />
                    <Buttons note={note} renderParent={this.props.renderParent} />
                    </div>
                )
            }
            case "NoteVideo": {
                return (
                    <div className="note note-video">
                    <NoteVideo note={note} />
                    <Buttons note={note} renderParent={this.props.renderParent} />
                    </div>
                )
            }
            case "NoteTodos": {
                return (
                    <div className="note todos-container">
                    <NoteTodos note={note} renderParent={this.props.renderParent}/>
                    <Buttons note={note} renderParent={this.props.renderParent} />
                    </div>
                )
            }
            default: {
                return (
                    <h4>Hi i'm default</h4>
                )
                }
            
        }
    }
}

