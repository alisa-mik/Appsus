import { noteService } from '../services/note-service.js'
export class Buttons extends React.Component {
  
onRemoveNote = (ev) => {
     
    noteService.removeNote(this.props.note)
    // TODO: Render page
    // this.props.history.push('/keep')

}
    render() {
        return (
            <div className="buttons">
                <button className="btn btn-remove" onClick={this.onRemoveNote}>X</button>
                <button className="btn btn-remove" >Y</button>
                <button className="btn btn-remove" >Z</button>
            </div>
        )
    }
}