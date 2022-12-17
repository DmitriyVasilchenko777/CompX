// Палучаем кнопки переключатели 
const RADIO_BTN_ONE = document.querySelector(".btn-one");
const RADIO_BTN_TWO = document.querySelector(".btn-two");
const RADIO_BTN_THREE = document.querySelector(".btn-three");

// Получаем текст из карусели 
const TEXT_ONE_IN_CARUSEL = document.querySelector(".photo-text-container .text-1");
const TEXT_TWO_IN_CARUSEL = document.querySelector(".photo-text-container .text-2");

// Получаем массив изображений в карусели
const IMAGES = document.querySelectorAll(".photos img");

// Индекс текущей картинки на экране 
let indexImg = 0;

// Отслеживаем нажатия на переключатели
RADIO_BTN_ONE.onclick = () => {
    RADIO_BTN_ONE.style.background = "#1CC500";
    RADIO_BTN_ONE.style.color = "#1CC500";

    RADIO_BTN_TWO.style.background = "#ffffff";
    RADIO_BTN_TWO.style.color = "#ffffff";

    RADIO_BTN_THREE.style.background = "#ffffff";
    RADIO_BTN_THREE.style.color = "#ffffff";

    TEXT_ONE_IN_CARUSEL.style.display = "block";
    TEXT_TWO_IN_CARUSEL.style.display = "block";

    IMAGES[0].style.display = "block"
    IMAGES[1].style.display = "none"
    IMAGES[2].style.display = "none"
}

RADIO_BTN_TWO.onclick = () => {
    
    RADIO_BTN_TWO.style.background = "#1CC500";
    RADIO_BTN_TWO.style.color = "#1CC500";

    RADIO_BTN_ONE.style.background = "#ffffff";
    RADIO_BTN_ONE.style.color = "#ffffff";

    RADIO_BTN_THREE.style.background = "#ffffff";
    RADIO_BTN_THREE.style.color = "#ffffff";

    IMAGES[1].style.display = "block";
    IMAGES[0].style.display = "none";

    TEXT_ONE_IN_CARUSEL.style.display = "none";
    TEXT_TWO_IN_CARUSEL.style.display = "none";
}

RADIO_BTN_THREE.onclick = () => {
    clearInterval(INTERVAL);

    RADIO_BTN_THREE.style.background = "#1CC500";
    RADIO_BTN_THREE.style.color = "#1CC500";

    RADIO_BTN_ONE.style.background = "#ffffff";
    RADIO_BTN_ONE.style.color = "#ffffff";

    RADIO_BTN_TWO.style.background = "#ffffff";
    RADIO_BTN_TWO.style.color = "#ffffff";

    IMAGES[2].style.display = "block";
    IMAGES[1].style.display = "none";
    IMAGES[0].style.display = "none";

    TEXT_ONE_IN_CARUSEL.style.display = "none";
    TEXT_TWO_IN_CARUSEL.style.display = "none";
}

// Функция которая срабатывает каждые 5 секунд и меняет изображение слайда
const INTERVAL = setInterval(() => {
    IMAGES[indexImg].style.display = "none";

    indexImg++;

    // Если сейчас отображается вторая картинка то тогда меняем цвет переключателя на второй чекбокс
    if(indexImg === 1) {
        RADIO_BTN_ONE.style.background = "#ffffff";
        RADIO_BTN_ONE.style.color = "#ffffff";

        RADIO_BTN_TWO.style.background = "#1CC500";
        RADIO_BTN_TWO.style.color = "#1CC500";
    }
    // Если сейчас отображается последняя картинка меням цвет у третьего чекбокса
    else if(indexImg === 2) {
        RADIO_BTN_TWO.style.background = "#ffffff";
        RADIO_BTN_TWO.style.color = "#ffffff";

        RADIO_BTN_THREE.style.background = "#1CC500";
        RADIO_BTN_THREE.style.color = "#1CC500";
    }

    // Переходим на первый слайд и показываем текст
    // В остальных двух слайдах текст не отображаем
    if(indexImg >= IMAGES.length) { 
        // Принудительно переходим к первому слайду 
        indexImg = 0; 

        // Делаем у первого чекбокса зеленый цвет
        RADIO_BTN_ONE.style.background = "#1CC500";
        RADIO_BTN_ONE.style.color = "#1CC500";

        // Обращяемся к третьему чекбоксу и меняем у него цвет на белый
        RADIO_BTN_THREE.style.background = "#ffffff";
        RADIO_BTN_THREE.style.color = "#ffffff";

        // Отображаем текст в первом слайде 
        TEXT_ONE_IN_CARUSEL.style.display = "block";
        TEXT_TWO_IN_CARUSEL.style.display = "block";
    }
    else {
        // Скрываем текст на втором и третьем слайде  
        TEXT_ONE_IN_CARUSEL.style.display = "none";
        TEXT_TWO_IN_CARUSEL.style.display = "none";
    }

    IMAGES[indexImg].style.display = "block";

}, 5000);