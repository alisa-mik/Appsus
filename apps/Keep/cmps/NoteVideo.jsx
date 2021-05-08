export function NoteVideo({ note }) {
    return (
        <div className="note note-video">
            {/* <h4>{note.info.title}</h4> */}
            <iframe width="250"
                src={note.info.url}>
            </iframe>
            <button className="btn btn-remove">&#10007;</button>
        </div>

    )
}