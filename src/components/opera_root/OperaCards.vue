<script>

import { operaArray } from "../../data/operaCards.js"


export default {
    name: "OperaCards",
    data() {
        return {
            operaArray
        }
    },
    components: {
        
    },

    methods: {
        getImagePath: function (name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        }
    }
}

</script>

<template>

    <div class="col-3 text-center p-2" v-for="opera in operaArray" :key="opera.img">
        <a :href="opera.link" target="_blank">
            <img class="rounded-4 zoom-effect-operas" :src="getImagePath(opera.img)" alt="opera Image">
        </a>

    </div>

</template>