export function NoteImg({note}) {
    return (
        <article className="note note-image">
            <h4>{note.info.title}</h4>
           <img src={note.info.url} alt="" className="image"/>
         </article>

    )
}