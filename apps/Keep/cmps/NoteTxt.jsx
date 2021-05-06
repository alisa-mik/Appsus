export function NoteTxt({note}) {
    return (
        <div className="note note-txt">
            <p>{note.info.txt}</p>
            <button className="btn btn-remove">X</button>
         </div>

    )
}