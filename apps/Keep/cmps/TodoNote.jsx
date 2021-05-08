import { noteService } from '../services/note-service.js'

export class TodoNote extends React.Component {


    state = {
        todoStyle: "note-todo-txt"
    }
    onRemoveTodo = (ev) => {

        noteService.removeTodo(this.props.note, this.props.todo)
        this.props.renderParent()
    }


    componentDidMount = () => {
        this.updateTodoStyle()
    }


    onClickTodo = (ev) => {
        if (!this.props.todo.isDone) {
            this.setState({ todoStyle: 'note-todo-txt line-through' })
        }
        else {
            this.setState({ todoStyle: 'note-todo-txt' })
        }

        noteService.updateTodo(this.props.note, this.props.todo)

    }

    updateTodoStyle = () => {
        if (this.props.todo.isDone) {
            this.setState({ todoStyle: 'note-todo-txt line-through' })
        }
        else {
            this.setState({ todoStyle: 'note-todo-txt' })
        }
    }

    render() {

        return (
            <div className="note-todo">
                <p className={this.state.todoStyle} onClick={this.onClickTodo}>{this.props.todo.txt}</p> <button id={this.props.todo} className="btn btn-remove-todo" onClick={this.onRemoveTodo}>X</button>
            </div>
        )
    }
}


