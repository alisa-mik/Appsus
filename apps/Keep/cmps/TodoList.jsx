import { noteService } from '../services/note-service.js'
import { TodoNote } from './TodoNote.jsx'
export class TodoList extends React.Component {

    // onRemoveNote = (ev) => {

    //     noteService.removeNote(this.props.note)
    //     // TODO: Render page
    //     // this.props.history.push('/keep')

    // }
    render() {
        return (

            <div>

                { this.props.note.info.todos.map(todo =>  <TodoNote key={todo.id} todo={todo} renderParent={this.props.renderParent} note={this.props.note} />)}
                {/* <button className="btn btn-remove" onClick={this.onRemoveNote}>X</button> */}
            </div>
        )
    }
}


