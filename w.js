let sex;
const age = prompt ('Твой возраст');
const gender = confirm ('Ваш пол женский?');

if (gender) {
    sex = "женский";   
    
//тут я не понял, как в сокращенном варианте 

(age)>60 && gender ? console.log ('Ты бабушка'):
(age) >20 && gender ? console.log ('Ты женщина'):
(age) >12 && gender ? console.log ('Ты девушка'):
(age) <=12 && gender & console.log ('Ты девочка');
}

user = {age, sex};
console.log (user)