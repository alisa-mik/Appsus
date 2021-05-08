import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'

export const noteService = {
    getNotes,
    query,
    addNote,
    removeNote
}

const KEY = 'notes'

var notes = getNotes()

function addNote(noteType, text) {
    var note = {}
    note['id'] = utilService.makeId()
    note['type'] = ""
    note['isPinned'] = ""
    note['style'] = {}
    note['info'] = {}

    console.log(noteType);
    switch (noteType) {
        case "txt": {
            console.log('case text');
            _addTextNote(note, text)
            break;
        }
        case "img": {
            console.log('case image');
            _addImgNote(note, text)
            break;
        }
        case "vid": {
            console.log('case video');
            _addVideoNote(note, text)
            break;
        }
        case "todo": {
            console.log('case todo');
            break;
        }
    }
    notes.unshift(note)
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve(note)

}

function _addTextNote(note, text) {

    note['type'] = "NoteText"
    note['info']['txt'] = text
    note['style']['backgroundColor'] = 'lightgrey'
}

function _addImgNote(note, text) {
    note['type'] = "NoteImg"
    note['info']['url'] = text
    note['style']['backgroundColor'] = 'lightyellow'
}

function _addVideoNote(note, text) {
    note['type'] = "NoteVideo"
    note['info']['url'] = text
    note['style']['backgroundColor'] = 'lightsteelblue'
}

function removeNote(note) {
    console.log(note);
    const noteIdx = notes.findIndex(noteItem => noteItem.id === note.id)
console.log(noteIdx);

    notes.splice(noteIdx, 1)
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}

function getNotes() {
    var notes = storageService.loadFromStorage(KEY)
    if (!notes) {

        notes = [
            {   
                id: utilService.makeId(),
                isPinned: false,
                type: "NoteVideo",
                info: {
                    url: "https://www.youtube.com/embed/E39GIysMevQ?autoplay=1&mute=1"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteText",
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: false,
                type: "NoteImg",
                info: {
                    url: "https://www.mouthymoney.co.uk/wp-content/uploads/2020/07/two-yellow-labrador-retriever-puppies-1108099-1-scaled.jpg"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteText",
                info: {
                    txt: "Another note!"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteVideo",
                info: {
                    url: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1",
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteTodos",
                info: {
                    label: "How was it:",
                    txt: 'bla bla bla',
                    todos: [
                        { txt: "Do that", doneAt: null, id:utilService.makeId() },
                        { txt: "Do this", doneAt: 187111111, id:utilService.makeId() }
                    ]
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteImg",
                info: {
                    url: "https://www.mouthymoney.co.uk/wp-content/uploads/2020/07/two-yellow-labrador-retriever-puppies-1108099-1-scaled.jpg",
                },
                style: {
                    backgroundColor: "#00d"
                }
            }

        ];
        storageService.saveToStorage(KEY, notes)
    }
    return notes
}

function query() {
    console.log('query');
    return Promise.resolve(notes)

}

