import { noteService } from '../services/note-service.js'
import { TodoList } from './TodoList.jsx'

export class NoteTodos extends React.Component {

    render() {
        return (
            <div>
                { <TodoList note={this.props.note} renderParent={this.props.renderParent}/>}
            </div>
        )
    }
}


