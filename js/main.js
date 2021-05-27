let Author = require('./Author')
let Note = require('./Note')

let author = new Author
author.setFirstname('Maxi')
author.setLastName('Rodriguez')

let note = new Note(author)
note.setText('Lorem ipsums..')

console.log(note)