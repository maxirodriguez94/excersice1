let {Author, Note} = require('./test')
var author = new Author
var note = new Note

author.setName('maxi')
console.log(author.getName())
note.setName('Primera Nota')
console.log(note.getName())



