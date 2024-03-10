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
            maxime quibusdam quisquam fugiat!
            Dolor commodi nam, eligendi reprehenderit obcaecati inventore aut atque assumenda eum eaque, non veniam
            incidunt quae dolore vitae quos vel. Eveniet facilis tempore voluptates saepe, earum quas labore sit
            voluptatum!
            Non tenetur at debitis cumque illo, doloremque provident eaque dolor libero deserunt ipsa eos aliquid ut
            excepturi. Tempora, atque voluptatem. Quibusdam dolore, vel quidem eligendi atque a iure nihil ipsam.
            Magnam temporibus earum obcaecati nulla deserunt quia suscipit, vero debitis doloremque dignissimos corporis
            maxime natus veritatis consequatur ratione architecto atque reprehenderit aperiam iusto perferendis minus
            perspiciatis veniam rem inventore? Sed.
            Illum, officiis fugit iusto, repellendus est ad ipsam quo illo laboriosam, quia eius cum enim earum beatae
            accusamus fuga reprehenderit laudantium harum. Expedita veritatis repudiandae sapiente illum officiis.</p>
        <div class="container mt-5">
            <div class="row justify-content-center align-content-center">
                <div class="col-12 col-lg-4" v-for="(opera, indexOpera) in state.operaArray" :key="indexOpera">

                    <div class="card mb-3 d-flex flex-column bg-transparent border-0">
                        <img class="align-self-center rounded-5" :src="getImagePath(opera.img)" :alt="opera.img" />

                    </div>

                    <div class="card-body bg_operacardbody mb-5 p-3">
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
    width: 100%;
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
