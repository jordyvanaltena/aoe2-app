<template>
    <div id="app">
        <Header></Header>
        <Sidebar></Sidebar>
        <router-view class="full-height" />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../src/components/Header.vue";
import Sidebar from "../src/components/Sidebar.vue";
import Footer from "../src/components/Footer.vue";

@Component({
    components: {
        Header,
        Sidebar,
        Footer,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.router-link {
    display: block;
}
body {
    background-image: url("~@/assets/aoe-bg4.jpeg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center top;
}
#app {
    height: 100%;
    display: flex;
    flex-direction: column;
    footer {
        justify-self: flex-end;
    }
}

html,
body {
    height: 100%;
}
.full-height {
    flex: 1 0 auto;
}
footer {
    flex-shrink: 0;
}
</style>
