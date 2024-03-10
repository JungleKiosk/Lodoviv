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
    <div>
        <MenuOperaToggle />
        <h1>Opera</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nihil sit porro corporis ad. Ab,
            voluptatibus soluta nesciunt asperiores, voluptates, placeat totam sapiente dolorum accusantium expedita
            maxime quibusdam quisquam fugiat!</p>
        <div class="container mt-5">
            <div class="row justify-content-center align-content-center my-5">
                <div class="col-12 col-lg-8 my-5" v-for="(opera, indexOpera) in state.operaArray" :key="indexOpera" :id="opera.id">

                    <!-- Aggiungi l'id come valore dell'attributo id -->
                    <div class="card mt-5 d-flex flex-column bg-transparent border-0">
                        <img class="align-self-center rounded-3" :src="getImagePath(opera.img)" :alt="opera.img" />
                    </div>

                    <div class=" justify-content-center text-center mb-5">
                        <div class="txt_operadate">{{ opera.date }}</div>
                        <p class="card-text txt_operadesc">{{ opera.description }}</p>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>


<style scoped>
img {
    width: 50%;
}


.bg_operacardbody {
    background-color: transparent;
    border-radius: 30px;
    border: 2px solid rgb(106, 0, 255);
}

.txt_operadate {
    color: rgb(70, 233, 165);

}

.txt_operadesc {
    color: rgb(181, 70, 233);
}
</style>
