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
                <h6>“Se stai visitando questo mio portfolio online significa che io o qualcun altro te lo ha mandato,
                    perciò benvenut*! Che tu voglia esporre/vendere le mie opere, inaugurare una collaborazione,
                    commissionare dei progetti grafici, formulare qualsiasi altra proposta o anche solo fare una bella
                    chiacchierate sull’Arte non esitare a contattarmi!”</h6>
            </div>
        </div>

        <!--  <div class="row justify-content-center my-5">
            <div class="col-12 col-lg-4 my-5">
                <div class="card card_style text-left rounded-3">
                    <img class="card-img-top" src="./../assets/img/dec/know.png" alt="">

                    <div class="card-body">
                        <h4 class="card-title text-center title_card">News</h4>
                        <hr>
                    
                        <button class="btn btn-info" @click="redirectToNews">Read More</button>
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
                        <button class="btn btn-info" @click="redirectToNews">Read More</button>
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
                        <button class="btn btn-info" @click="redirectToNews">Read More</button>
                        <p class="card-text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            quibusdam tempore quas perspiciatis quidem molestiae quod, impedit quo. Earum quo numquam
                            quasi ipsum voluptatum perferendis consequuntur commodi aspernatur natus provident!</p>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="row justify-content-center">
            <div class="col-12 col-lg-8 text-center">
                <img class="img_face" src="../assets/img/logo/loGoviv.png" alt="">
            </div>
        </div>




    </div>

    <footer id="footer" class="p-5">
        <div class="row justify-content-between align-baseline mt-5">
            <h4>Contacts</h4>
            <div class="col-12 col-lg-3">
                <div class="contact-info">
                    <img class="inst" src="../assets/img/logo/inst.png" alt="">
                    <a class="ancor_inst" href="https://www.instagram.com/lodoviv/" target="_blank">@lodoviv</a>
                </div>
            </div>
            <div class="col-12 col-lg-3">
                <div class="contact-info">
                    <img class="phone" src="../assets/img/logo/phoneGreen.png" alt="">3485697226
                </div>
            </div>
            <div class="col-12 col-lg-3">
                <div class="contact-info">
                    <img class="phone mail" src="../assets/img/logo/mailGreen.png" alt="">
                    <span class="mail-address">lodovico.lindemann@gmail.com</span>
                </div>
            </div>
        </div>
    </footer>



</template>

<style scoped>
.no-bullet-list {
    list-style-type: none;
    /* Rimuove i puntini */
    padding-left: 0;
    /* Rimuove il rientro */
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
.phone {
    width: 30%;
}

.inst {
    width: 30%;
}

.ancor_inst {
    color: white;
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
        width: 20%;
    }

    .inst {
        width: 20%;
    }
}

@media (max-width: 786px) {
    .contact-info {
        display: flex;
        align-items: center;
        margin-bottom: 10px; /* Aggiungi spazio tra ciascun elemento */
    }

    .phone, .inst, .mail {
        width: 20%;
    }


    .mail-address {
        margin-left: 4px; /* Aggiungi margine sinistro per separare l'immagine e l'indirizzo email */
    }
}

</style>