import {noteService} from '../services/note-service.js'

export class NewNote extends React.Component {   

    state={
        selectedBtn: 'txt',
        txt: {
            txt : 'Whats on your mind...',
            img : 'Enter image url...',
            vid : 'Enter video url...',
            todo: 'Enter comma separated list...'

        }
        
    }
    onChangeType = (ev) => {
     
        this.setState({selectedBtn : ev.target.id})
    }

    handleKeyPress = (ev) => {
        if(event.key === 'Enter'){
          if (ev.target.value==="") return
          noteService.addNote(this.state.selectedBtn, ev.target.value)
          ev.target.value = ""
          this.setState({selectedBtn: this.state.selectedBtn})
          this.props.renderParent()
        }
      }
    

    render() {
      
      return (
          <div className="new-note">
            <input id="new-note-input" type="text" placeholder={this.state.txt[this.state.selectedBtn]} onKeyPress={this.handleKeyPress}/>
            <button id="txt" onClick={this.onChangeType}>txt</button>
            <button id="img" onClick={this.onChangeType}>img</button>
            <button id="vid" onClick={this.onChangeType}>Video</button>
            <button id="todo" onClick={this.onChangeType}>todos</button>

           </div>
     )}
      }


  