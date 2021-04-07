const array = ['khushi', 'khush', 'khushboo'];
console.log(array);
const arra2 = ['hey', 'this', 'is', 39];
console.log(arra2);
console.log(array.length);
const array3 = new Array(9, 9, 7, 6);

console.log(array3);
// add element
const friend = ['michel', 'steven', 'peter'];
const newlength = friend.push('hellp'); //last
console.log(friend);
console.log(newlength);

friend.unshift('john'); // front
console.log(friend);
//remove element
friend.pop();
const popped = friend.pop(); //last
console.log(popped);
console.log(friend);

friend.shift(); //front
console.log(friend);
console.log(friend.indexOf('steven'));

console.log(friend.includes('steven'));
console.log(friend.includes('coo'));
