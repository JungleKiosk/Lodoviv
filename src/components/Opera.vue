<script>
import ToggleSideMenu from "../components/opera_root/ToggleSideMenu.vue";
import OperaCards from "../components/opera_root/OperaCards.vue";

export default {
    data() {

    },
    components: {
        ToggleSideMenu,
        OperaCards
    }
}


</script>


<template>
    <div>

        <main class="main-content">

            <header>

            </header>

            <section>
                <ToggleSideMenu></ToggleSideMenu>
                <OperaCards></OperaCards>

            </section>

        </main>
    </div>
</template>

<style></style>