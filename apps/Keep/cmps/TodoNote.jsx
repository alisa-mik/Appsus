export class TodoNote extends React.Component {


    state = {
        node: null
    }
    onRemoveTodo = (ev) => {

        //noteService.removeNote(this.props.note)
        // TODO: Render page
        // this.props.history.push('/keep')

    }
    render() {
        console.log(this.props.todo);
        return (
        <div className="note-todo">
           <p>{this.props.todo.txt}</p> <button id={this.props.todo} className="btn btn-remove-todo" onClick={this.onRemoveTodo}>X</button>
        </div>
        )
    }
}


