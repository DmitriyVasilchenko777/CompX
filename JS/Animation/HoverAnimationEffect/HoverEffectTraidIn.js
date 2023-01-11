const IMG_NOT_HOVER_EFFECT_TRAID = document.querySelector(".container-img-traid-in img");

const IMG_HOVER_EFFECT_TRAID = new Image();

IMG_HOVER_EFFECT_TRAID.src = "../../../IMG/ServicesImg/HoverEffectTraidIn.png";

$(".container-img-traid-in img").mouseover(() => {
    IMG_NOT_HOVER_EFFECT_TRAID.src = "../IMG/ServicesImg/HoverEffectTraidIn.png";
});

$(".container-img-traid-in img").mouseout(() => {
    IMG_NOT_HOVER_EFFECT_TRAID. src = "../IMG/ServicesImg/TraidInImg.png";
});