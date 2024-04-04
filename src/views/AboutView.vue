<script>


</script>

<template>
    <!--  <video class="video" autoplay muted loop id="bgVideo">
        <source src="../assets/img/video/tramonto.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video> -->
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 col-lg-8 mt-5">
                <h1>About me</h1>
                <img class="circle_neon position-absolute" src="./../assets/img/dec/maxcoach-shape-02.png" alt="">

                <h4>“La passione per la grafica ha sempre accompagnato i miei studi di Lettere e Antropologia, dapprima
                    creando collage con la giustapposizione di elementi culturali distanti fra loro, in seguito, quando
                    ho sentito l’arte del cut-and-paste troppo vincolante per i messaggi che vorrei veicolare, mi sono
                    dedicato sempre più al disegno digitale. <br> <br> Nonostante il mondo del design, anche puramente estetico
                    come può essere la creazione di loghi, mi abbia sempre ispirato e stimolato, il mio obiettivo è
                    creare opere con al centro un messaggio culturale, politico, sociale; rimettere insomma al centro
                    della creazione grafica l’Arte civilmente impegnata.<br><br> Per questo le mie opere sono sempre
                    accompagnate da una riflessione e una ricerca su temi ambientali, psicologici e civili, senza
                    tuttavia rinunciare al mio carattere estetico e pop che funge da tramite per i valori espressi.”
                </h4>
            </div>
            <div class="col-12 col-lg-4 text-center align-content-center">
                <img class="img_face" src="../assets/img/logo/loGoviv.png" alt="">
            </div>
<!--             <div class="col-12 col-lg-12">
                <div class="cube">

                </div>
            </div> -->
           <!--  <div class="col-12 col-lg-12">
                <div class="cube"></div>
            </div> -->
            <!-- <div class="col-12 col-lg-12">
                <div class="cube"></div>
            </div> -->
        </div>


        <!--         <div class="row mb-5">
            <div class="col-12 col-lg-8 mt-5">
            </div>
            <div class="col-12 col-lg12">
            </div>
        </div> -->


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

.phone{
    width: 15%;
}

.img_face{
    width: 80%;
}

.cube {
    height: 100px;
}

.enjoy {
    width: 20%;
}

.circle_neon {
    width: 5%;
    top: 230px;
    left: 100px;
    z-index: -1;
    rotate: 180deg;
}

.color_tr {
    border: 1px solid red;
}

@media (max-width: 786px) {
    .circle_neon {
        width: 10%;
        top: 210px;
        left: 1px;
        z-index: -1;
        rotate: 180deg
    }
}

.svg_email {
    width: 7%;
}

#footer {

    background-color: #23004673;
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