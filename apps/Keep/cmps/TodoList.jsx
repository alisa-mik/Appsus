import { noteService } from '../services/note-service.js'
import { TodoNote } from './TodoNote.jsx'
export class TodoList extends React.Component {

    // onRemoveNote = (ev) => {

    //     noteService.removeNote(this.props.note)
    //     // TODO: Render page
    //     // this.props.history.push('/keep')

    // }
    render() {
        console.log(this.props.note.info.todos);
        return (

            <div>

                { this.props.note.info.todos.map(todo => <TodoNote todo={todo} />)}
                {/* <button className="btn btn-remove" onClick={this.onRemoveNote}>X</button> */}
            </div>
        )
    }
}


