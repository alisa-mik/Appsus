import { noteService } from '../services/note-service.js'
export class Buttons extends React.Component {


    state = {
        buttonsStyle: 'display',
        buttonsStylePalatte: 'buttons-no-display'
    }

    componentDidMount = () => {
        this.updateButtonStyle()
    }

    updateButtonStyle = () => {
        if (this.state.buttonsStyle === 'buttons-no-display') {
            this.setState({ buttonsStyle: 'buttons-no-display', buttonsStylePalatte: 'display' })
        }
        else {
            this.setState({ buttonsStyle: 'buttons', buttonsStylePalatte: 'buttons-no-display' })
        }
    }

    onRemoveNote = (ev) => {

        noteService.removeNote(this.props.note)
        this.props.renderParent()
    }

    onPinNote = (ev) => {

        noteService.pinNote(this.props.note)
        this.props.renderParent()
    }

    onChangeColor = (ev) => {
        this.setState({ buttonsStyle: 'buttons-no-display', buttonsStylePalatte: 'buttons' })
    }

    onPalleteChoose = (ev) => {
        // console.log(this.props.note); 
        var cssClass = ""
        switch (ev.target.id) {
            case "red": {
                cssClass = "note red-picker"
                break
            }
            case "yellow": {
                cssClass = "note yellow-picker"
                break
            }
            case "purple": {
                cssClass = "note purple-picker"
                break
            }
            case "blue": {
                cssClass = "note blue-picker"
                break
            }
            default:
                {
                    cssClass = this.props.note.style.cssClass
                }

        }
        if (cssClass) {
            this.props.note.style.cssClass = cssClass
            noteService.updateBgColor(this.props.note)
            this.props.renderParent()
            this.setState({ buttonsStyle: 'buttons', buttonsStylePalatte: 'buttons-no-display' })
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
        return (
            <div>
                <div className={this.state.buttonsStyle}  >
                    <button className="btn btn-remove" onClick={this.onRemoveNote} ><i className="icon material-icons">delete</i></button>
                    <button className="btn btn-pin" onClick={this.onPinNote} ><i className="icon material-icons">push_pin</i></button>
                    <button className="btn btn-color" onClick={this.onChangeColor}><i className="icon material-icons">palette</i></button>
                </div>
                <div className={this.state.buttonsStylePalatte} onClick={this.onPalleteChoose}>
                    <button className="btn picker red-picker" onClick={this.onPalleteChoose} id="red" ></button>
                    <button className="btn picker blue-picker" onClick={this.onPalleteChoose} id="blue" ></button>
                    <button className="btn picker purple-picker" onClick={this.onPalleteChoose} id="purple" ></button>
                    <button className="btn picker yellow-picker" onClick={this.onPalleteChoose} id="yellow" ></button>
                </div>
            </div>
        )
    }
}