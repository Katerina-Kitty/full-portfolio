Math.PI; //3.14

document.getElementById("demo1").innerHTML = Math.round(4.4);
//Округляет к ближайшему целому 4.7 = 5;
document.getElementById("demo2").innerHTML = Math.pow(8, 2);
//Возвращает число в степени указаной пользователем 8 в квадрате = 64;
//1 число - которое перейдет в степень
//2 число - степень

document.getElementById("demo3").innerHTML = Math.sqrt(64);
//Возвращает квадратный корень числа 64 = 8;

document.getElementById("demo4").innerHTML = Math.abs(-4.7);
//Возвращает число с + ВСЕГДА!

document.getElementById("demo5").innerHTML = Math.ceil(4.1);
//Округляет число всегда к большему!

document.getElementById("demo6").innerHTML = Math.floor(4.8);
//Округляет число всегда к меньшему!

document.getElementById("demo7").innerHTML = Math.min(0, 150, 400, 10, -2, -10);
//Возвращает самое наименьшее число из заданых!

document.getElementById("demo8").innerHTML = Math.max(0, 150, 400, 10, -2, -10);
//Возвращает самое наибольшее число из заданых!

document.getElementById("demo9").innerHTML = Math.random();
//Возвращает самое наименьшее число из заданых!

//ПРАВИЛЬНЫЙ РАНДОМ ЧИСЛА В ДВУХ ВАРИАНТАХ!

document.getElementById("demo10").innerHTML = Math.floor(Math.random() * 100);
//Рандом от 0 до 9, после получение числа в таком виде = 9.312312, округляем до 9!
//Nan - не найдено значение!

document.getElementById("demo11").innerHTML =
  Math.floor(Math.random() * 10) + 1;
//Рандом от 1 до 10, 0 не выведет никогда)!
