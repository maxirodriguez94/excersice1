let {Author, Note} = require('./test')
var author = new Author
var note = new Note


author.setName('maxi')
console.log(author.getName())
note.setName('Primera Nota')
console.log(note.getName())


class NotePad {
    constructor(data = {}) {
        this.name = data.name || ''
        this.post = data.post || 0
    }

    setName(n) {
        if (typeof n == 'string') {
            this.name = n
        } else{
            throw new Error('El parametro debe ser del tipo string')
        }
    }

    setPost(p) {
        if (typeof p == 'number') {
            this.post = p
        } else{
            throw new Error('El parametro debe ser del tipo entero')
        }
    }

    getNotePad() {
        return (this.name + ' ' + this.post)
    }
} 


var notePad = new NotePad({
        name : "1",
        post : 1
})

try{
    notePad.setName(true)
}catch(error){
    console.log(error.message)
}

try{
    notePad.setPost(true)
}catch(error){
    console.log(error.message)
}

for(var i = 0; i <= NotePad.length; i++){
    console.log(notePad.getNotePad(i))
}
