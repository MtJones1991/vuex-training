<template>

    <div class="parallax">
        <div class="center-item-middle pb-5">
            {{ this.$store.state.itemsModule.items }}
        </div>
    </div>

</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
    components: {
        Parallax,
    }
}
</script> 

<style lang="scss">
.parallax {
    /* The image used */
    background-image: url("../assets/38627.jpg");
}
</style>
