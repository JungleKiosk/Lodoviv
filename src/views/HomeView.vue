<script setup>
import { useRouter } from 'vue-router'; // Importa useRouter per la navigazione

// Funzione di reindirizzamento
const router = useRouter();
const redirectToNews = () => {
  router.push('/newscomponent'); // Naviga al percorso definito
};
</script>

<template>
    <div class="container overflow-x-hidden banner_floe_home">
        <div class="row justify-content-center mb-5">
            <div class="col-12 col-lg-12 text-center">
                <img class="img_home" src="../assets/img/logo/home.svg" alt="">
            </div>
            <!--    <div class="col-12 col-lg-12">
                <div class="cube"></div>
            </div> -->

        </div>

        <div class="row justify-content-center mb-5">
            <div class="col-12 col-lg-12 mb-5">
                <h4>“Se stai visitando questo mio portfolio online significa che io o qualcun altro te lo ha mandato,
                    perciò benvenut*! Che tu voglia esporre/vendere le mie opere, inaugurare una collaborazione,
                    commissionare dei progetti grafici, formulare qualsiasi altra proposta o anche solo fare una bella
                    chiacchierate sull’Arte non esitare a contattarmi!”</h4>
            </div>
        </div>

        <div class="row justify-content-center my-5">
            <div class="col-12 col-lg-4 my-5">
                <div class="card card_style text-left rounded-3">
                    <img class="card-img-top" src="./../assets/img/dec/know.png" alt="">

                    <div class="card-body">
                        <h4 class="card-title text-center title_card">News</h4>
                        <hr>
                        <!-- link -->
                        <button class="btn btn-info" @click="redirectToNews">Read More</button> <!-- Naviga a /news -->
                        <p class="card-text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            quibusdam tempore quas perspiciatis quidem molestiae quod, impedit quo. Earum quo numquam
                            quasi ipsum voluptatum perferendis consequuntur commodi aspernatur natus provident!</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 my-5">

                <div class="card card_style text-left rounded-3">
                    <img class="card-img-top" src="./../assets/img/dec/Antropocen.png" alt="">

                    <div class="card-body">
                        <h4 class="card-title text-center title_card">Why?</h4>
                        <hr>
                        <button class="btn btn-info" @click="redirectToNews">Read More</button> <!-- Naviga a /news -->
                        <p class="card-text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            quibusdam tempore quas perspiciatis quidem molestiae quod, impedit quo. Earum quo numquam
                            quasi ipsum voluptatum perferendis consequuntur commodi aspernatur natus provident!</p>
                    </div>
                </div>
            </div>


            <div class="col-12 col-lg-4 my-5">

                <div class="card card_style text-left rounded-3">
                    <img class="card-img-top" src="./../assets/img/dec/what.png" alt="">
                    <div class="card-body">
                        <h4 class="card-title text-center title_card">Cyber citizenship</h4>
                        <hr>
                        <button class="btn btn-info" @click="redirectToNews">Read More</button> <!-- Naviga a /news -->
                        <p class="card-text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            quibusdam tempore quas perspiciatis quidem molestiae quod, impedit quo. Earum quo numquam
                            quasi ipsum voluptatum perferendis consequuntur commodi aspernatur natus provident!</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-12 col-lg-8 text-center">
                <img class="img_face" src="../assets/img/logo/loGoviv.png" alt="">
            </div>
        </div>




    </div>

    <footer id="footer" class="p-5">
        <div class="row mt-5">
            <div class="col-6">
                <h4>Contacts</h4>

                <p>
                    <img class="phone" src="../assets/img/logo/phoneGreen.png" alt="">

                    3485697226
                </p>
                <p>
                    <img class="phone" src="../assets/img/logo/mailGreen.png" alt="">
                    lodovico.lindemann@gmail.com</img>
                </p>
            </div>

            <div class="col-6">

            </div>

        </div>
    </footer>


</template>

<style scoped>
.phone {
    width: 15%;
}

.img_home {
    width: 70%;
}

.img_face {
    width: 60%;
}

.card_style {
    background-color: rgba(15, 15, 15, 0.353);
    color: #00fdb5;
}

.cube {
    height: 100px;
}

.title_card {
    color: #ebbdfe;

}

#footer {

    background-color: #23004673;
}

@media (max-width: 768px) {
    .img_home {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .img_face {
        width: 80%;
    }
}

@media (max-width: 786px) {
    .phone {
        width: 60%;
    }
}
</style>