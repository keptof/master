let sex;
const age = prompt('Сколько вам лет?');
const gender = confirm('Ваш пол мужской?');

if (gender) {
 sex = "мужской";   


if((+age) > 60 && gender) {
    console.log ('Ты дедушка');
} else if((+age) >20 && gender) {
    console.log  ('Вы мужчина');
} else if((+age) >12 && gender) {
    console.log  ('Вы юноша');
} else if ((+age) <=12  && gender) {
    console.log ('Вы мальчик');
}

}

user = {age, sex};
console.log (user)



