const firstName = prompt('Напишите ваше имя');
const lastName = prompt('Напишите вашу фамилию');
const age = prompt(`Напишите ваш возраст`);
const user = {
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    age:`${age}`
};

console.log (user)
console.log (user.firstName)
console.log(user.lastName)
console.log(user.age)

