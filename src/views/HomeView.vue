<script>


</script>

<template>
    <header id="goup">
        <div class="container-fluid bg-video">
            <video autoplay muted loop id="bgVideo">
                <source src="../assets/img/video/tramonto.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="row justify-content-center">
                <div class="col-12 col-lg-12 col-md-8 rounded-4 d-flex align-items-center">
                </div>
                <div class="col-12 col-lg-6 my-5 text-over-bg rounded-5">
                    <h1 class="title_init text-center">Hello <br> Video</h1>
                    <h2>
                        hello there!
                    </h2>
                </div>
            </div>
        </div>
    </header>


    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4">
                <img class="img_face text-center" src="../assets/img/logo/loGoviv.png" alt="">
            </div>
            <div class="col-12 col-lg-8 mt-5">
                <h1>Hi! I'm Lodoviv</h1>
                <h5>Lorem ipsum dolor sit amet.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur sequi voluptatum
                    asperiores
                    earum!
                    Reiciendis voluptates ex, voluptate distinctio minus soluta reprehenderit blanditiis quasi fugiat
                    nulla?
                    Ipsa
                    ullam
                    doloremque nostrum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem quia debitis illum voluptatum
                    mollitia tempora, quos rerum quisquam expedita asperiores consequatur voluptates aliquid
                    reprehenderit sequi distinctio modi aspernatur totam.
                    Quasi eveniet tenetur, porro ut cupiditate eum laboriosam aut, id atque totam maxime dolores ullam
                    esse. Esse incidunt aspernatur eveniet natus, nostrum laborum sit quam quaerat perferendis ea
                    quisquam alias.

                </p>
            </div>

        </div>

    </div>


</template>

<style>

.bg-video {
    position: relative;
    height: 800px
}

#bgVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-over-bg {
    position: relative;
    z-index: 1;
    color: rgb(251, 249, 249);
    background-color: rgba(2, 35, 9, 0.562);
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title_init {
    color: #13e764;
}

.logo {
    height: 30px;
    width: auto;
    margin-right: 10px;
}


.img_face {
    width: 80%;
}

@media (max-width: 768px) {
    .img_face {
        width: 100%;
        /* Imposta la larghezza al 100% su dispositivi con larghezza massima di 768px */
    }
}
</style>