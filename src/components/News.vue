<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import newsData from "../data/news.json";

export default {
  name: "NewsView",
  setup() {
    const news = ref(newsData);
    const router = useRouter();

    return {
      news,
      router,
    };
  },
  methods: {
    getImagePath(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
    navigateToNews(id) {
      this.router.push(`/newdata/${id}`); // Naviga al percorso specifico per quella news
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- Itera su ogni elemento delle news -->
      <div class="col-12 col-lg-4" v-for="newdata in news" :key="newdata.id" @click="navigateToNews(newdata.id)">
        <div class="card card_style text-left rounded-3 my-5">
          <!-- Immagine della news -->
          <img
            class="card-img-top"
            :src="getImagePath(newdata.image)"
            :alt="newdata.name"
          />

          <div class="card-body">
            <!-- Titolo della news -->
            <h4 class="card-title text-center title_card">{{ newdata.name }}</h4>
            <!-- Corpo della news -->
            <p class="card-text">{{ newdata.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_style {
  background-color: rgba(15, 15, 15, 0.353);
  color: #00fdb5;
}

.title_card {
  color: #ebbdfe;
}

.card-img-top {
  width: 100%; /* Larghezza dell'immagine della card */
}

.card-text {
  color: #ffffff; /* Testo bianco per migliore visibilità */
}
</style>
