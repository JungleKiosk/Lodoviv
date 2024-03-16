<script setup>
import { ref, onMounted } from 'vue';

const showShadow = ref(false);

// Funzione per alternare lo stato di showShadow ogni due secondi
function toggleShadow() {
  showShadow.value = !showShadow.value;
}

// Avvia l'alternanza dell'ombra ogni due secondi quando il componente viene montato
onMounted(() => {
  setInterval(toggleShadow, 2000);
});
</script>

<template>
  <div class="container my-4 px-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-4">
        <img :style="{ filter: showShadow ? 'drop-shadow(0 0 20px #8500FF)' : 'none' }"
          src="./assets/img/logo/loGoviv_sign.svg" alt="">
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-lg-4 text-center">
        <!-- Utilizza RouterLink per creare bottoni -->
        <RouterLink active-class="active" to="/">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>Home</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/about">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>About me</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/opera">
          <button class="rounded-2 btn_bg_purple mx-1">
            <span>Opera</span>
          </button>
        </RouterLink>
      </div>

    </div>
  </div>

  <RouterView />

</template>

<style>
img {
  width: 100%;
}

.btn_bg_green {
  background-color: transparent;
  color: #00fff7;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn_bg_green:hover {
  box-shadow: 0 0 15px 10px #00fff7;
  color: black;
  font-style: oblique;
  background-color: #00fff7;
}

.btn_bg_purple {
  background-color: transparent;
  color: #00fff7;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn_bg_purple:hover {
  box-shadow: 0 0 15px 10px #00fff7;
  color: black;
  font-style: oblique;
  background-color: #00fff7;
}
</style>
