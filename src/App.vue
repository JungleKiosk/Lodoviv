<script setup>

import { RouterView, RouterLink } from "vue-router"


</script>


<template>




  <div class="container my-4 px-5">
    <div class="row justify-content-center">

      <div class="col-12 col-lg-4">
        <img src="./assets/img/logo/loGoviv_sign.svg" alt="">
      </div>
      <div class="col-12 col-lg-12">
        <div class="links">
          <!-- use <RouterLink></RouterLink> instead <a></a> to save for each pagand not refresh_e.g. button count stay fixed!-->

          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/">Home</RouterLink>
          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/about">About me</RouterLink>
          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/opera">Opera</RouterLink>
        </div>
      </div>
    </div>

    <RouterView />
  </div>
</template>

<style>

img{
  width: 100%;
}

</style>