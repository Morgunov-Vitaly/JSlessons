/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
window.onload = function (myevent) {
//    console.log("My event:");
//    console.log(myevent);
//    for (var i = 0; i <= 10; i++) {
//
//    }
//    for (let j = 0, max = 10; j < max; j++) {
//        
//    }
    /* Демонстрируем отличия в области видимости var vs let */
//console.log(typeof(i));
//console.log(typeof(j));
//    time();
//    time(50);
let timer = x => x + 4;
console.log(timer (2));

}
/* Новая возможность задания значений по-умолчанию
 Раньше для этого было необходимо писать так:
 var timer = (typeOf(t) ==="undefined")? 60: t; 
 т.к. короткая версия  var timer = t || 60;
 не позволяла передавать 0 */
//function time(t = 60) {
//    console.log(t);
//}
/* Также добавлены константы const но если мы создаем константу в виде объекта, 
 * то его значения можно менять в процессе работы */

