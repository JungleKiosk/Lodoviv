<script>
import { operaArray } from "../data/operaCards.js";

export default {
    data() {
        return {
            operaArray: operaArray
        };
    },
    methods: {
        getImagePath(name) {
            // Metodo per ottenere il percorso completo dell'immagine
            return new URL(`../assets/img/opera/${name}`, import.meta.url).href;
        }
    }
};
</script>

<template>
    <div>
        <h1>Opera</h1>
        <div class="container">
            <div class="row justify-content-center align-content-center">
                <div class="col-12 col-lg-4" v-for="(opera, indexOpera) in operaArray" :key="indexOpera">

                    <div class="card mb-3 d-flex flex-column">
                        <img class="align-self-center rounded-5" :src="getImagePath(opera.img)"
                            :alt="opera.img" />
                        
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
    border-radius: 5px;
    border: 2px solid rgb(106, 0, 255);
}

.txt_operadate {
    color: rgb(70, 233, 165);

}

.txt_operadesc {
    color: rgb(181, 70, 233);
}
</style>