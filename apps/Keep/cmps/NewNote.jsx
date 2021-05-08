import {noteService} from '../services/note-service.js'

export class NewNote extends React.Component {
    

    state={
        selectedBtn: 'txt',
        txt: {
            txt : 'Whats on your mind...',
            img : 'Whats image on your mind...',
            vid : 'Enter video url...',
            todo: 'Enter comma separated list...'

        }
        
    }
    onChangeType = (ev) => {
     
        console.log(ev.target.id)
        this.setState({selectedBtn : ev.target.id})
        // console.log(this.state.selectedBtn);
    }

    handleKeyPress = (ev) => {

        if(event.key === 'Enter'){
          console.log(this.state.selectedBtn, ev.target.value)
          noteService.addNote(this.state.selectedBtn, ev.target.value)
          // TODO: need to render parent 
          //this.props.history.push('/car')
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


  