// keg.js

var keg = {};

keg.create = function(object) {
    console.log('create', object);
}

keg.read = function(selector) {
    console.log('read', selector);
}

keg.update = function(object, newObject) {
    console.log('update', object, newObject);
}

keg.delete = function(selector) {
    console.log('delete', selector);
}


exports.keg = keg;