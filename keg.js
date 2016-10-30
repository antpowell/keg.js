// keg.js

var keg = {};

keg.initialize = function(apiKey) {
    this.apiKey = apiKey;
    this.base = 'ira2kex426.execute-api.us-east-1.amazonaws.com/prod';
}

keg.create = function(object, cb) {
    request('create', 'POST', JSON.stringify(object), cb);
}

keg.read = function(selector, cb) {
    request('read', 'GET', 'selector='+selector, cb);
}

// keg.update = function(object, newObject, cb) {
//     request('update', 'PUT', { "object": object, "newObject": newObject }, cb);
// }

keg.delete = function(id, cb) {
    request('destroy', 'DELETE', "{ 'id':" + id +  "}", cb);
}

var request = function(method, type, opts, cb) {
    var url = "https://" + keg.base + '/' + method + '?apiKey=' + keg.apiKey;
    console.log(url);
    console.log((opts));
    $.ajax({
        type: type,
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        url: url,
        dataType: 'json',
        data: opts
    }).done(function(res) {
        cb(null, res);
    }).fail(function(err) {
        cb(err);
    });
}