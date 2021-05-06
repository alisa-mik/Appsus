export function NoteVideo({ note }) {
    return (
        <article className="note note-video">
            <h4>{note.info.title}</h4>
            <iframe width="420" height="315"
                src={note.info.url}>
            </iframe>
        </article>

    )
}