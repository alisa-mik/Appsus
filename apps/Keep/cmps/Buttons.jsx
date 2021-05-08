import { noteService } from '../services/note-service.js'
export class Buttons extends React.Component {
  
onRemoveNote = (ev) => {
     
    noteService.removeNote(this.props.note)
    this.props.renderParent()
}
    render() {
        return (
            <div className="buttons">
                <button className="btn btn-remove" onClick={this.onRemoveNote} >X</button>
                <button className="btn btn-remove" >Y</button>
                <button className="btn btn-remove" >Z</button>
            </div>
        )
    }
}