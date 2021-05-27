const Author = require("./Author")

class Note {
    constructor(author) {
        if (author instanceof Author) {
            this.author = author
        }else {
            throw new Error('Se requiere un author')
        }

        this.id = null
        this.text = ''
        this.author = ''
    }

    setId(id) {
        if (typeof id == 'number') {
            this.id = id
            return
        }

        throw new Error ('El id debe ser numerico')  
    }

    getId() {
       return this.id
    }

    setText(t) {
        this.text = t
    }

    getText() {
        return this.text
    }

    setAuthor(author) {
        if (author instanceof Author) {
            this.author = author
            return
        }  

        throw new Error('El autor debe ser una instancia de Author')
    }

    getAuthor() {
        return this.author
    }
}

module.exports = Note