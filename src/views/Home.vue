<template>
<div class="home">
     
    <Portfolio />
    
    {{ this.$store.state.itemsModule.items }}

</div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "@/components/Portfolio.vue"



export default {
    name: 'home',
    components: {
        Portfolio,
    },

    data() {
        return {
                window: {
                    width: 0,
                    height: 0
                }
        }
    },

    created() {
        window.addEventListener('resize', this.handleResize)
        console.log("WINDOW:", window)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }

}
</script>
