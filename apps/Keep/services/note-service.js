export const noteService = {
    getNotes,
    query,
}

const KEY = 'notes'

var notes = getNotes()

var gNotes = [
    {
        type: "NoteVideo",
        info: {
            url: "https://www.youtube.com/embed/E39GIysMevQ?autoplay=1&mute=1",
            title: "How Deep Can We Dig?"
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
            url: "https://www.mouthymoney.co.uk/wp-content/uploads/2020/07/two-yellow-labrador-retriever-puppies-1108099-1-scaled.jpg",
            title: "Me playing Mi"
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
            title: "How Deep Can We Dig?"
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
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    }
    
];

function getNotes() {
    return gNotes
}

   function query() {
       console.log('query');
    return Promise.resolve(gNotes)

}