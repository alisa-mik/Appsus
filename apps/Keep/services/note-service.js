import { storageService } from '../../../services/storage-service.js'


export const noteService = {
    getNotes,
    query,
    addNote
}

const KEY = 'notes'

var notes = getNotes()

function addNote(noteType , text) {
    var note = {}
    switch (noteType) {
        case "txt": {
           console.log('case text');
        }
        case "img": {
          console.log('case image');
       }
       case "vid": {
          console.log('case video');
       }
       case "todo": {
          console.log('case todo');
       }
    }
    notes.unshift(note)
    return Promise.resolve(note)

}

function getNotes() {
    var notes = storageService.loadFromStorage(KEY)
    if (!notes) {
        
        notes = [
            {
                type: "NoteVideo",
                info: {
                    url: "https://www.youtube.com/embed/E39GIysMevQ?autoplay=1&mute=1"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                type: "NoteText",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                type: "NoteImg",
                info: {
                    url: "https://www.mouthymoney.co.uk/wp-content/uploads/2020/07/two-yellow-labrador-retriever-puppies-1108099-1-scaled.jpg"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                type: "NoteText",
                isPinned: true,
                info: {
                    txt: "Another note!"
                }
            },
            {
                type: "NoteVideo",
                info: {
                    url: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1",
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                type: "NoteTodos",
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
            },   
            {
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

