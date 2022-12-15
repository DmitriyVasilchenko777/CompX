// Палучаем кнопки переключатели 
const RADIO_BTN_ONE = document.querySelector(".btn-one");
const RADIO_BTN_TWO = document.querySelector(".btn-two");
const RADIO_BTN_THREE = document.querySelector(".btn-three");

// Получаем массив изображений в карусели
const IMAGES = document.querySelectorAll(".photos img");

// Индекс текущей картинки на экране 
let indexImg = 0;

// Функция которая срабатывает каждые 5 секунд и меняет изображение слайда
setInterval(() => {
    IMAGES[indexImg].style.display = "none";
    indexImg++;

    if(indexImg >= IMAGES.length) { indexImg = 0; }

    IMAGES[indexImg].style.display = "block";

}, 5000);