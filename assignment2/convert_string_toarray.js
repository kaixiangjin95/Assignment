var a = 'Human';
var b = a.split('');
console.log('a is a '+typeof a)
console.log('b is a ' + typeof b)
if (b instanceof Array) {
    console.log('b is an array');
} else {
    console.log('b is not an array');
}
