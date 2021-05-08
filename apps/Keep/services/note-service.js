import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'

export const noteService = {
    getNotes,
    query,
    addNote,
    removeNote,
    pinNote,
    removeTodo,
    updateTodo,
    updateBgColor
}

const KEY = 'notes'

var notes = getNotes()

function addNote(noteType, text) {
    var note = {}
    note['id'] = utilService.makeId()
    note['type'] = ""
    note['isPinned'] = false
    note['style'] = {}
    note['info'] = {}

    switch (noteType) {
        case "txt": {
            _addTextNote(note, text)
            break;
        }
        case "img": {
            _addImgNote(note, text)
            break;
        }
        case "vid": {
            _addVideoNote(note, text)
            break;
        }
        case "todo": {
            _addTodoNote(note, text)
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
//     todos: [
//         { txt: "Do that", doneAt: null, id:utilService.makeId() },
//         { txt: "Do this", doneAt: 187111111, id:utilService.makeId() }
//     ]
// }
function _addTodoNote(note, text) {
    note['type'] = "NoteTodos"
    note['info']['todos'] = []
    note['style']['backgroundColor'] = 'pink'
    var todos = text.split(',')
    todos.forEach((todo, Idx) => {
        note['info']['todos'].push({'txt' : todo , 'id' : utilService.makeId()})
    })
}



function removeTodo(note, todo) {
    const todoIdx = note.info.todos.findIndex(todoItem => todoItem.id === todo.id)
    note.info.todos.splice(todoIdx, 1)
    
    const noteIdx = notes.findIndex(noteItem => noteItem.id === note.id)
    notes.splice(noteIdx, 1, note)
    
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}

function updateTodo(note, todo) {
    const todoIdx = note.info.todos.findIndex(todoItem => todoItem.id === todo.id)
    todo.isDone = !todo.isDone

    note.info.todos.splice(todoIdx, 1, todo)

    const noteIdx = notes.findIndex(noteItem => noteItem.id === note.id)
    notes.splice(noteIdx, 1, note)
    
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}

function removeNote(note) {
    const noteIdx = notes.findIndex(noteItem => noteItem.id === note.id)
    notes.splice(noteIdx, 1)
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}


function pinNote(note) {
    const noteIdx = notes.findIndex(noteItem => noteItem.id === note.id)

    notes[noteIdx].isPinned = !notes[noteIdx].isPinned
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}


function updateBgColor(note) {
    const noteIdx = notes.findIndex(noteItem => noteItem.id === note.id)
    notes.splice(noteIdx, 1, note)
    console.log(note);
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
                    url: "https://www.youtube.com/embed/tXA3K5861t8?autoplay=1&mute=1"
                },
                style: {
                    cssClass: "note note-video"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteText",
                info: {
                    txt: "Today you are you! That is truer than true! There is no one alive who is you-er than you!"
                },
                style: {
                    cssClass: "note note-txt"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: false,
                type: "NoteImg",
                info: {
                    url: "https://www.pngkey.com/png/detail/480-4807259_dr-seuss-images-public-domain-cat-in-the.png"
                },
                style: {
                    cssClass: "note note-image"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteText",
                info: {
                    txt: "A person's a person, no matter how small."
                },
                style: {
                    cssClass: "note note-txt"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteVideo",
                info: {
                    url: "https://www.youtube.com/embed/L1gqN5VzNHc?autoplay=1&mute=1",
                },
                style: {
                    cssClass: "note note-video"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteTodos",
                info: {
                    todos: [
                        { txt: "Watch Dr. Seuss", isDone: true, id: utilService.makeId() },
                        { txt: "Read Dr. Seuss", isDone: false, id: utilService.makeId() }
                    ]
                },
                style: {
                    cssClass: "note todos-container"
                }
            },
            {
                id: utilService.makeId(),
                isPinned: true,
                type: "NoteImg",
                info: {
                    url: "https://www.pngkey.com/png/detail/900-9001351_hosue-clipart-dr-seuss-clipart-dr-seuss-book.png",
                },
                style: {
                    cssClass: "note note-image"
                }
            }

        ];
        storageService.saveToStorage(KEY, notes)
    }
    return notes
}

function query() {
    return Promise.resolve(notes)

}

