export function NoteImg({note}) {
    return (
        <div className="note note-image">
            {/* <h4>{note.info.title}</h4> */}
           <img src={note.info.url} alt="" className="image"/>
           <button className="btn btn-remove">X</button>
         </div>

    )
}