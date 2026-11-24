// const regexp = /шаблон/
// regexp = /шаблон/gmi;

// const text = "Меня зовут Умар, мне 16 лет";
// console.log(text.match(/\d+/g));

//   \d - цифры 0-9
//   + - одна или больше
//   g - все совподения

// const text2 = "Меня зовут Умар, мне 16 лет";
// console.log(text2.match(/мне \d+/g));
// console.log(text2.match(/[А-ЯЁ][а-яё]+/g));

// const text3 = "меня зовут АЛЕКС, мне 30 лет. у меня есть мерседес s500";

// console.log(text3.match(/[А-ЯЁ][а-яё]+/g));

// методы для регулярных выражений
// test() - ищет совпадение и возвращает true / false
// match() - ищет совпадение и возвращает его в виде массив
// replace() - ищет совпадение и заменяет на новое значение
// search() - поиск совпадения

/*
Флаг                     Применение
i - С этим флагом поиск не зависит от регистра: нет разницы между A и a 
g - С этим флагом поиск ищет все совпадения, без него – только первое.
m - Многострочный режим
s - Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
u - Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
y - Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y")
*/

// console.log("maga Hello Maga".match(/Maga/gi));


// Основные символы
// классы символов
/**
 * \d - цифра [0-9]
 * \w - буква, цифра , _ [A-Za-z0-9_]
 * \s - пробельный символ
 * \D, \W , \S - ОТРИЦАНИЕ (НЕ ЦИФРА, НЕ БУКВА, НЕ ПРОБЕЛ)
 * . - ЛЮБОЙ СИВМОЛ КРОМЕ ПЕРЕВОДА СТРОКИ
 */

// Квантифакторы (количество)
/**
 * + - один и больше
 * * - ноль и больше
 * ? - ноль или один
 * {3} - ровно 3
 * {2 , 5} - от 2 до 5
 * {2, } - 2 b больше
 */


// якоря
// ^ - начало строки
// $ - конец строки

// Группа и альтернация
/*
 * (...) - группа
 * | - или
 * [abc] - любой из символов a,b,c
 * [^abc] - любой кроме a,b,c
 * [a-z] - диапазон
 */

// console.log(/\d+/.test("123"));// true
// console.log(/\d+/.test("Маге 28 лет"));// true
// console.log(/\w+/.test("Маге 28 лет"))// true
// console.log(/\s+/.test("Маге 28 лет"))// true



// const email = /^[\w.-]+@[\w.-]+\.\w{2,}$/

// console.log(email.test("magomed@mail.ru"));

// const number = /^\+?\d{11}$/
// console.log(number.test("+79887206048"));

// const launge = /[а-яА-Я]/
// console.log(launge.test("Привет"));


// const specChar = /\+/
// console.log(specChar.test("Maga+changa"));// ищет плюс

// const specChar1 = /\./
// console.log(specChar1.test("Maga.changa"));// ищет точку


// const str19 = /100\$/
// console.log(str19.test("У МЕНЯ ЕСТЬ 100$"));

// const str20 = "abc"
// console.log(str20.search(/b/)); // 1

// const str21 = "Hello WOrld Maga"
// console.log(str21.replace(/Maga/ , "JS")); //Заменяет


const str3 = /JavaScript/
console.log(str3.test("I love JavaScript"));

const str4 = "I love JavaScript"
console.log(str4.match(/JavaScript/));

const str21 = "I love JavaScript"
console.log(str21.replace(/JavaScript/ , "Phayton")); 


const sh2 = /\d+/g
console.log(sh2.test("123456"));// true
console.log("123456".match(sh2));// ["123456"]



const ee = /\./
console.log(ee.test("Привет. Как дела"));// true


const ss = "У меня 2 яблока, 10 груш и 150 рублей"
console.log(ss.match(/\d+/g)); // 2, 10, 150

const aa = "Крутой день! #javascript #coding #100days"
console.log(aa.match(/#\w+/g)); //'#javascript', '#coding', '#100days'



const ps = /\w{6,12}/ 
console.log(ps.test("pass1234"));


const sh5 = /^[\w+]{6,12}$/
console.log(sh5.test("pass1234"));// true


const strr = "Это       очень       длинная          строка"
console.log(strr.replace(/\s+/g , " ")); // Заменяет длинный пробел на обычный



const phone = "89991234567"

console.log(phone.replace(/^8(\d{3})(\d{3})(\d{2})(\d{2})$/ , "+7 ($1) $2-$3-$4")); //"+7 (999) 123-45-67"

