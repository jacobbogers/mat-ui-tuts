
const bindMethods = require('./bindMethods');

class World {
    constructor(){
        this.config = { hello:'world'};
        bindMethods(this, 'Object');
    }

}

class Hello extends World {

    constructor (config) {
        super(config);
    }

   
    get url() {
        throw super.this.constructor.name
         //return this.config.host +'/'+ this.config.port;
    }

}

const testClass = new Hello();
console.log(testClass.url);