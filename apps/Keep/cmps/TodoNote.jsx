import { noteService } from '../services/note-service.js'

export class TodoNote extends React.Component {


    state = {
        node: null
    }
    onRemoveTodo = (ev) => {

        noteService.removeTodo(this.props.note, this.props.todo)
        this.props.renderParent()
    }

    render() {
        return (
            <div className="note-todo">
                <p>{this.props.todo.txt}</p> <button id={this.props.todo} className="btn btn-remove-todo" onClick={this.onRemoveTodo}>X</button>
            </div>
        )
    }
}


