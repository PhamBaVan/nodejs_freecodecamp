// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const {john, peter} = require('./names')
// const sayHi = require('./utils')

// sayHi('Ba Van')
// sayHi(john)
// sayHi(peter)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(data);
console.log(names);

sayHi('Ba Van')
sayHi(names.john)
sayHi(names.peter)