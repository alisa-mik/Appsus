import {noteService} from '../services/note-service.js'

export class NewNote extends React.Component {
    

    state={
        selectedBtn: 'Whats on your mind...',
        txt: {
            txt : 'Whats on your mind...',
            img : 'Whats image on your mind...',
            vid : 'Enter video url...',
            todo: 'Enter comma separated list...'

        }
    }
    onChangeType = (ev) => {
        console.log(ev.target.id)
        this.setState({selectedBtn : this.state.txt[ev.target.id]})
    }

    handleKeyPress = (ev) => {
        if(event.key === 'Enter'){
          
          noteService.addNote(ev.target.id, ev.target.value)
          console.log("Aa")
          this.setState({selectedBtn : this.state.txt['vid']})
        }
      }
    
    
    render() {
      return (
           <div className="new-note">

            <input id="new-note-input" type="text" placeholder={this.state.selectedBtn} onKeyPress={this.handleKeyPress}/>
            <button id="txt" onClick={this.onChangeType}>txt</button>
            <button id="img" onClick={this.onChangeType}>img</button>
            <button id="vid" onClick={this.onChangeType}>Video</button>
            <button id="todo" onClick={this.onChangeType}>todos</button>

           </div>
     )}
      }


  