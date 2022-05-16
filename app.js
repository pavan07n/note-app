const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js')

yargs.version('12.2.0')

//Add Command

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string', 
        },

        body: {
            describe: 'write contents to your note',
            demandOption: true,
            type: 'string',
        }
    },

    handler(argv) {
     note.addNote(argv.title, argv.body)

}
})

//Delete CommandS
yargs.command({
    command: 'remove',
    describe: 'remove existing Note',
    builder: {
        title: {
            describe: 'title Name',
            demandOption: true,
            type: 'string',
        }
    },

    handler(argv) {
    note.removeNote(argv.title)
}
})

//list Command
yargs.command({
    command: 'list',
    describe: 'lists all Notes',
    
    handler() {
    note.listNote()
}
})

//read Command
yargs.command({
    command: 'read',
    describe: 'view existing Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },

    handler(argv) {
    note.readNote(argv.title)
}
})



yargs.parse()