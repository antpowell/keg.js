# keg.js

A javascript library to interact with the keg database system.

## Usage

First, import the library into your application:
```html
<script src="https://rawgit.com/tams-codered/keg.js/master/keg.min.js" type="text/javascript"></script>
```

We expose various methods that allow you to create, read, and delete a row in the Keg database:
```js
// Write to your database with a simple javascript API
keg.create({ id: 1, first: 'Julian', last: 'LaNeve', age: 16 });
// Delete entries instantly
keg.delete(id);
// Craft powerful queries on your local relational database
keg.read({ id: 1 });
```
