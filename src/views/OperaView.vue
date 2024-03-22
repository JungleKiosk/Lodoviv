<script setup>
import { reactive } from 'vue';
import MenuOperaToggle from './MenuOperaToggle.vue';
import { operaArray } from "../data/operaCards.js";

const state = reactive({
    operaArray: operaArray
});

function getImagePath(name) {
    // Metodo per ottenere il percorso completo dell'immagine
    return new URL(`../assets/img/opera/${name}`, import.meta.url).href;
}
</script>

<template>

    <MenuOperaToggle />

    <section class="jumbotron">
        <div class="container mb-5">
            <div class="row">
                <div class="col-12 col-lg-8 mt-5">

                    <img src="../assets/img/dec/jfq.png" style="width: 100%;" alt="">
                    <h4 class="m-3">Enjoy my artwork, have fun, think, reflect!</h4>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="40%" id="blobSvg">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color: rgb(4, 188, 185);"></stop>
                                <stop offset="100%" style="stop-color: rgb(133, 0, 255);"></stop>
                            </linearGradient>
                        </defs>
                        <path stroke-width="7px" stroke="url(#gradient)">
                            <animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="
                            M397,271Q378,292,364.5,307.5Q351,323,349,353.5Q347,
                            384,334.5,427Q322,470,286,476.5Q250,483,214,477Q178,
                            471,161,433Q144,395,113,383.5Q82,372,54.5,347Q27,322,
                            33,286Q39,250,62,223.5Q85,197,112,183Q139,169,161,
                            163.5Q183,158,199.5,152Q216,146,233,90.5Q250,35,271,
                            77.5Q292,120,329.5,104.5Q367,89,381,116.5Q395,144,
                            406.5,169.5Q418,195,417,222.5Q416,250,397,271Z;

                            M449.5,287.5Q480,325,409,319.5Q338,314,326.5,326.5Q315,
                            339,305,364Q295,389,272.5,412.5Q250,436,226,416.5Q202,
                            397,169.5,401.5Q137,406,104,393Q71,380,44,353Q17,326,
                            22.5,288Q28,250,83,232Q138,214,144.5,196Q151,178,135.5,
                            124.5Q120,71,169.5,112Q219,153,234.5,140.5Q250,128,287,
                            75.5Q324,23,316.5,95.5Q309,168,342.5,163.5Q376,159,431.5,
                            166Q487,173,453,211.5Q419,250,449.5,287.5Z;

                            M392,276.5Q413,303,424.5,344Q436,385,388,379Q340,373,313,
                            367.5Q286,362,268,380Q250,398,220,416Q190,434,150.5,
                            437.5Q111,441,109,397.5Q107,354,64,339Q21,324,12,287Q3,
                            250,28.5,218Q54,186,96,177.5Q138,169,150.5,150Q163,131,
                            173.5,89.5Q184,48,217,68Q250,88,275,92Q300,96,328,
                            100.5Q356,105,391,113.5Q426,122,387,170Q348,218,359.5,
                            234Q371,250,392,276.5Z;
                            
                            M449.5,287.5Q480,325,409,319.5Q338,314,326.5,326.5Q315,
                            339,305,364Q295,389,272.5,412.5Q250,436,226,416.5Q202,
                            397,169.5,401.5Q137,406,104,393Q71,380,44,353Q17,326,
                            22.5,288Q28,250,83,232Q138,214,144.5,196Q151,178,135.5,
                            124.5Q120,71,169.5,112Q219,153,234.5,140.5Q250,128,287,
                            75.5Q324,23,316.5,95.5Q309,168,342.5,163.5Q376,159,431.5,
                            166Q487,173,453,211.5Q419,250,449.5,287.5Z;

                            M397,271Q378,292,364.5,307.5Q351,323,349,353.5Q347,
                            384,334.5,427Q322,470,286,476.5Q250,483,214,477Q178,
                            471,161,433Q144,395,113,383.5Q82,372,54.5,347Q27,322,
                            33,286Q39,250,62,223.5Q85,197,112,183Q139,169,161,
                            163.5Q183,158,199.5,152Q216,146,233,90.5Q250,35,271,
                            77.5Q292,120,329.5,104.5Q367,89,381,116.5Q395,144,
                            406.5,169.5Q418,195,417,222.5Q416,250,397,271Z;">
                            </animate>

                        </path>
                    </svg>
                </div>

                <div class="col-lg-4 text-center mt-5">
                </div>

            </div>
            <div class="lt-animation-bottom"></div>

        </div>
    </section>



    <!--  <div class="lt-animation-top"></div> -->
    <div class="container mt-5 p-5">
        <div class="row justify-content-center my-5">
            <div class="col-12 col-lg-12 my-5 text-center">
                <div v-for="(opera, indexOpera) in state.operaArray" :key="indexOpera" :id="opera.id"
                    class="card_opera">

                    <div class="text-center mt-5">
                        <h1 class="txt_operadate">{{ opera.title }}</h1>
                    </div>

                    <img class="mb-5" :src="getImagePath(opera.img, 'opera')" :alt="opera.img" />

                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
img {
    width: 50%;
}

@media (max-width: 768px) {
    img {
        width: 100%;
        /* Imposta la larghezza al 100% su dispositivi con larghezza massima di 768px */
    }
}

.jumbotron {
    margin-top: 100px;
    height: 400px;
    background-color: #8400ff73;
}

.z-index-minus-1 {
    z-index: -1;
}

.txt_operadate {
    font-family: 'Courier New', Courier, monospace;
    color: #1dc0bb;
}

.card_opera {
    height: 1000px;
}

@media (max-width: 768px) {
    .card_opera {
        height: auto;
        /* Imposta l'altezza automatica */
        margin-top: 5rem;
        /* Riduce il margine superiore */
    }

    .transition-shape {
        border-radius: 0;
        /* Rimuove il border-radius */
    }

    .card_opera:hover {
        animation: none;
        /* Rimuove l'animazione pop */
    }

    /*     .lt-animation-top,
    .lt-animation-bottom,
    .rt-animation-top,
    .rt-animation-bottom {
        display: none;
    } */
}
</style>
