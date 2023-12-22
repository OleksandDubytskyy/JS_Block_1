var a = 5;  //а присвоюємо значення 5
var b, c; // використовуємо змінні b , c

b = (a) * 5; // тут ми бачимо що зміній b присвоюється значення a*5 тобто 5*5=25 
(b) = c = b/2; //тут занчення b з попереднього виразу ділимо на 2 і отрмуємо 12,5 і присвоюємо це значення до С і потім значення С присвоюємо до B тобто після цього виразу ми маємо три зміні A=25 B=12,5 C=12,5

var age =prompt("Скільки вам років");// дуже зпрощенний приклад можна ще зробити по іншому
 var age=(2023-age);
 alert("Ваш рік народження" + age);

 var age =prompt("Скільки вам років");// приклад в якому застосована справжня дата
var realDate = new Date().getFullYear();
var birthYear = realDate - age;
 alert("Ваш рік народження" + birthYear);


 var celsius = prompt("Подай температуру в цельсіях"); //в цьому завданні був підставлений вираз якій переводить цельсії в фарингейти
 var fahrengeit = (celsius * 9/5) + 32;
 alert("температура в фаренгейтах "+ fahrengeit);


 
var number1 = prompt('Введіть перше число'); //приклад в якому за допомогою Math.floor два числа ділятся на рівні частини
var number2 = prompt('Введіть друге число');
var result = Math.floor(number1 / number2);
alert('Результат поділу націло: ' + result);


const rate = 37.55;                         // тут перераховуємо долари в гривні за допомогою множення і toFixed(2) залишає нам тільки дві цифри після крапки тобто копійки
var HowUSD = prompt('Введіть суму в $: ');
var howUAH = (HowUSD * rate).toFixed(2);
alert('Ви отримаєте: ' + howUAH + ' UAN');





var red = prompt('Введіть значення для червоного кольору (від 0 до 255):', '');
var green = prompt('Введіть значення для зеленого кольору (від 0 до 255):', '');
var blue = prompt('Введіть значення для синього кольору (від 0 до 255):', '');

red = parseInt(red);
green = parseInt(green);
blue = parseInt(blue);

var hexColor = '#' +
        red.toString(16).padStart(2, '0') +
        green.toString(16).padStart(2, '0') +
        blue.toString(16).padStart(2, '0');

alert('Ваш CSS-колір: ' + hexColor);



var totalFloors = prompt('Введіть кількість поверхів у будинку:');

var apartmentsPerFloor = prompt('Введіть кількість квартир на поверсі:');

var apartmentNumber = prompt('Введіть номер квартири:');


var entrance = Math.ceil(apartmentNumber / (apartmentsPerFloor * totalFloors));
var floor = Math.ceil((apartmentNumber % (apartmentsPerFloor * totalFloors)) / apartmentsPerFloor);

alert('Квартира №' + apartmentNumber + ' знаходиться в ' + entrance + ' під\'їзді на ' + floor + ' поверсі.');

