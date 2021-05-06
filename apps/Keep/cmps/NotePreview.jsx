import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'


export function NotePreview({ note }) {

    switch(note.type) {
        case "NoteText": {
            return (
                // <h4>hi I'm text</h4>
                <NoteTxt note={note} />
            )
        }
        case "NoteImg": {
            return (
                <NoteImg note={note} />
            )
        }
        case "NoteVideo": {
            return (
                <NoteVideo note={note} />
            )
        }
        default: {
            return (
              <h4>Hi i'm default</h4>
            )
          }
        // case "NoteTodos": {
        //     return (
        //         <NoteTxt note={note} />
        //     )
        // }
        // case "Notetxt": {
        //     return (
        //         <NoteTxt note={note} />
        //     )
        // }
        // case "Notetxt": {
        //     return (
        //         <NoteTxt note={note} />
        //     )
        // }
    }

    
   




}