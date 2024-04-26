<script setup>

import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from "vue";
import news from "../data/news.json"

const newdata = ref(null)
const route = useRoute()
const { id } = route.params;

onBeforeMount(() => {
    newdata.value = news.find(c => c.id === parseInt(id))

})

</script>

<template>
    <h1>News</h1>
    <div class="container p-5">
        <div class="row">
            <h1 class="txt_title_proj">{{ newdata.name }}</h1>
            <div class="col-lg-6 align-items-center">
                <div class="col-lg-12" v-if="newdata">
                    <br>
                    <h4>Start Date:</h4>
                    <h2>{{ newdata.data }}</h2>
                    <button class="my-3 btn btn_btlink_proj pulse-heart">
                        <a class="link_proj" v-if="newdata.link" :href="newdata.link" target="_blank">Go to newdata</a>
                    </button>
                </div>
                <div v-else>
                    <h1>Not Found </h1>
                </div>
            </div>

            <div class="col-lg-6" v-if="newdata">
                <p class="txt_desc"> {{ newdata.desc }}</p>



            </div>
            <div v-else>
                <h1>Not Found</h1>
            </div>


        </div>


    </div>
</template>

<style scoped>
.txt_title_proj {
    color: #44bc84;
    font-size: 80px;
}

.txt_desc {
    font-size: 25px;
}

.btn_btlink_proj {
    background-color: #44bc84;
}

.link_proj {
    color: #010e16;
    font-weight: 900;
    text-decoration: none;
}

.pulse-heart {
    animation: pulse 3s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.1);
    }
}


</style>
