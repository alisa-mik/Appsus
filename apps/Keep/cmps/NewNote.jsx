import { noteService } from '../services/note-service.js'

export class NewNote extends React.Component {

  state = {
    selectedBtn: 'txt',
    txt: {
      txt: 'Whats on your mind...',
      img: 'Enter image url...',
      vid: 'Enter video url...',
      todo: 'Enter comma separated list...'

    }

  }
  onChangeType = (ev) => {
    this.setState({ selectedBtn: ev.target.id })
  }

  handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      if (ev.target.value === "") return
      noteService.addNote(this.state.selectedBtn, ev.target.value)
      ev.target.value = ""
      this.setState({ selectedBtn: this.state.selectedBtn })
      this.props.renderParent()
    }
  }

  handleKeyPressSearch = (ev) => {
    var searchedNotes = noteService.searchNote(ev.target.value)
    this.props.renderParent(true, searchedNotes)
  }
  

  render() {

    return (
      <div className="new-note">
        {/* <input id="new-note-search" className="input-search" type="search" placeholder="search here..." onInput={this.handleKeyPressSearch} /> */}
        <input id="new-note-input" className="input-new" type="text" placeholder={this.state.txt[this.state.selectedBtn]} onKeyPress={this.handleKeyPress} />
        <button onClick={this.onChangeType} ><i id="txt" className="icon-new material-icons">description</i></button>
        <button onClick={this.onChangeType}><i id="img" className="icon-new material-icons">image</i></button>
        <button onClick={this.onChangeType}><i id="vid" className="icon-new material-icons">smart_display</i></button>
        <button onClick={this.onChangeType}><i id="todo" className="icon-new material-icons">format_list_bulleted</i></button>

      </div>
    )
  }
}


