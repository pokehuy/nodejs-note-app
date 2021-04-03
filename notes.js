const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed("Note is duplicate!"))
    }
    
}

const removeNote = (note) => {
    const notes = loadNotes()
    const newNote = notes.filter((data) => data.title !== note)
    saveNotes(newNote)
    if (newNote.length < notes.length){
        console.log(chalk.bgGreen('Note with title ' + note + ' has been deleted!'))
    } else if ( newNote.length == notes.length){
        console.log(chalk.bgRed('There is not a note with title ' + note))
    }
}

const listNotes = () => {
    console.log(chalk.bgBlueBright('Notes are:'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
        if (note) {
            console.log(chalk.bgBlue(note.title))
            console.log(note.body)
        } else {
            console.log(chalk.red.inverse('Note does not exist!'))
        }
}

const saveNotes = (notes) => {
    const JSONdata = JSON.stringify(notes)
    fs.writeFileSync('data.json',JSONdata)
}

const loadNotes = () => {
    try{
        const NoteBuffer = fs.readFileSync('data.json').toString()
        const NoteData = JSON.parse(NoteBuffer)
        return NoteData
    } catch (e) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
