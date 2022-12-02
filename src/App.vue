<template>
<div class="app">
    <headerTop/>
<router-view/>
</div>
</template>

<script>
import headerTop from "./components/header_top.vue"
export default {
components:{headerTop}
}
</script>

<style>

</style>