// Получаем изображения

const IMG_NOT_HOVER_EFFECT = document.querySelector(".container-img-upgraide-center img");

const IMG_HOVER_EFFECT = new Image();

IMG_HOVER_EFFECT.src = "../../../IMG/ServicesImg/HoverEffectUpgraideCenter.png";

$(() => {
    $(".container-img-upgraide-center img").mouseover(() => {
        IMG_NOT_HOVER_EFFECT.src = "../IMG/ServicesImg/HoverEffectUpgraideCenter.png";
    })

    $(".container-img-upgraide-center img").mouseout(() => {
        IMG_NOT_HOVER_EFFECT.src = "../IMG/ServicesImg/UpgraideCenterImg.png";
     });
  });