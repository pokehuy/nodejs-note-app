
const yargs = require('yargs')
const { listNotes } = require('./notes')
const notes = require('./notes')


//create an add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'my title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})
//create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
//create a list command
yargs.command({
    command: "list",
    describe: "List a note",
    handler: function(){
        notes.listNotes()
    }
})
// create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})

//console.log(yargs.argv)
yargs.parse()