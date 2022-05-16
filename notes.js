const fs = require('fs')
const chalk = require('chalk')

//Add Note Functionality
const addNote = (title, body) => {
   const notes = loadNotes()
   //const duplicateNotes = notes.filter((note) => note.title === title ) 
   // (this would keep checking for duplicate notes even after encountering a duplicate note ))

   const duplicateNote = notes.find((note) => note.title === title)
   //(find method stops as soon as it finds a duplicate note )
   
   if(!duplicateNote) { // same as duplicateNote == undefined 
     notes.push ({
        'title' : title,
        'body' : body,
     })

         saveNotes(notes)
         console.log(chalk.bgBlue.red("New Note Added!"))
   }

   else{
       console.log(chalk.bgRed.white("Note Already Exits!"))
   }  
}

//Delete note functionality

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

     if(notes.length > notesToKeep.length)
     {
         console.log(chalk.green.inverse("Note Removed Successfully!"))
         saveNotes(notesToKeep)
     }
     else {
         console.log(chalk.red.inverse("Note Not Found!"))
     }
}

//List Notes Functionality

const listNote = () => {
    console.log(chalk.yellow.inverse("Your Notes : "))

    const notes = loadNotes()

    notes.forEach((note) => {

        console.log('Note Title: ' + note.title)

    })
}

// Read Note Functionality

 const readNote = (title) => {
    const notes = loadNotes()

    const eachNote = notes.find((note) => note.title === title)

        if(eachNote) {

            console.log(chalk.magenta.inverse('Note Title: ' + eachNote.title))
            console.log('Note Body: ' + eachNote.body)
          }
       
          else {
              console.log(chalk.bgRed.white("No Note Found!"))
          } 
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync ('notes.json', dataJSON)
}

const loadNotes = () => {
        try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        }
        catch (error) {
            return []
        }
    }

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
 }
