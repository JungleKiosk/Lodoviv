<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="container my-4 px-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-4">
        <img src="./assets/img/logo/loGoviv_sign.svg" alt="">
      </div>
      
      <div class="col-12 col-lg-12">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light">
          <!-- Logo -->
          <a class="navbar-brand" href="#">
            <img src="./assets/img/logo/loGoviv_sign.svg" alt="Logo" style="max-height: 50px;">
          </a>

          <!-- Toggle button for mobile -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar links -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink active-class="active" class="nav-link txt_menu" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink active-class="active" class="nav-link txt_menu" to="/about">About me</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink active-class="active" class="nav-link txt_menu" to="/opera">Opera</RouterLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <!-- Contenuto della pagina -->
    <RouterView />
  </div>
</template>

<style>
img {
  width: 100%;
}

</style>
