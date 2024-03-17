<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const cursorLight = ref(null);
const cursorMoving = ref(false);
const neonEffect = ref(false);
let timer; // Variabile per il timer

// Funzione per aggiornare lo stato del movimento del cursore
function updateCursorMovement(event) {
    cursorLight.value.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    cursorMoving.value = true; // Imposta lo stato del movimento del cursore su true quando il cursore si muove
    clearTimeout(timer); // Resetta il timer quando il cursore si muove
    timer = setTimeout(() => cursorMoving.value = false, 500); // Imposta lo stato del movimento del cursore su false dopo 1 secondo di inattività
}

// Aggiungi un listener per l'evento mousemove per aggiornare la posizione del pallino verde neon
onMounted(() => {
    window.addEventListener('mousemove', updateCursorMovement);
});

// Rimuovi il listener quando il componente viene smontato per evitare memory leak
onBeforeUnmount(() => {
    window.removeEventListener('mousemove', updateCursorMovement);
});

function toggleNeonEffect() {
  neonEffect.value = !neonEffect.value;
}
onMounted(() => {
  setInterval(toggleNeonEffect, 2000);
});

</script>


<template>
  <div class="cursor-light" :class="{ 'hidden': cursorMoving }" ref="cursorLight"></div>
  <div class="container my-4 px-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-4">
        <img :style="{ filter: neonEffect ? 'drop-shadow(0 0 20px #8500FF)' : 'none' }"
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
