 class Author {
     constructor(data = {}) {
         this.id = data.id ? this.setId(data.id) : null
         this.firstName = ''
         this.lastName = ''
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

     setFirstname(fn) {
         this.firstName = fn
     }

     getFirstname() {
         return this.firstName
     }

     setLastName(ln) {
         this.lastName = ln
     }

     getLastName() {
         return this.lastName
     }
 }

 module.exports = Author