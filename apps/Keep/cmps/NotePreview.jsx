import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { Buttons } from './Buttons.jsx'

export class NotePreview extends React.Component {

    state = {
        hidden: true,
        buttonsStyle: 'buttons-no-display'
    }

    componentDidMount = () => {
        this.updateButtonStyle()
    }

    updateButtonStyle = () => {
        if (this.state.hidden) {
            this.setState({ hidden: 'true', buttonsStyle: 'buttons-no-display' })
        }
        else {
            this.setState({ hidden: 'true', buttonsStyle: 'buttons' })
        }
    }

    onMouseOver = (ev) => {
        if (this.state.hidden) {
            this.setState({ hidden: 'false', buttonsStyle: 'buttons' })
        }
        else {
            this.setState({ hidden: 'true', buttonsStyle: 'buttons-no-display' })
        }

    }

    onMouseLeave = (ev) => {
        if (this.state.hidden) {
            this.setState({ hidden: 'true', buttonsStyle: 'buttons-no-display' })
        }
        else {
            this.setState({ hidden: 'true', buttonsStyle: 'buttons' })
        }

    }

    render() {
        var note = this.props.note
        switch(note.type) {
            case "NoteText": {
                return (
                    // <h4>hi I'm text</h4>
                    <div className={this.props.note.style.cssClass} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                    <NoteTxt note={note} />
                    <div  className={this.state.buttonsStyle}>
                    <Buttons note={note} renderParent={this.props.renderParent}/>
                    </div>
                    </div>
                )
            }
            case "NoteImg": {
                return (
                    <div className={this.props.note.style.cssClass} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                    <NoteImg note={note} />
                    <div  className={this.state.buttonsStyle}>
                    <Buttons note={note} renderParent={this.props.renderParent} />
                    </div>
                    </div>
                )
            }
            case "NoteVideo": {
                return (
                    <div className={this.props.note.style.cssClass} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                    <NoteVideo note={note} />
                    <div  className={this.state.buttonsStyle}>
                    <Buttons note={note} renderParent={this.props.renderParent} />
                    </div>
                    </div>
                )
            }
            case "NoteTodos": {
                return (
                    <div className={this.props.note.style.cssClass} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                    <NoteTodos note={note} renderParent={this.props.renderParent}/>
                    <div  className={this.state.buttonsStyle}>
                    <Buttons note={note} renderParent={this.props.renderParent} />
                    </div>
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

