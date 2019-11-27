<template>
<div id="app" @click="tune">
    <router-view />
</div>
</template>

<script>
import VueMoJS from 'vue-mo-js'
import mojs from 'mo-js'
export default {
    data() {
        return {
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram'
            ],
            clipped: false,
            drawer: true,
            fixed: false,
            items: [{
                    icon: 'apps',
                    title: 'Welcome',
                    to: '/'
                },
                {
                    icon: 'bubble_chart',
                    title: 'Inspire',
                    to: '/inspire'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js',
            OPTS: {
                fill: 'none',
                radius: 55,
                strokeWidth: {
                    17: 0
                },
                scale: {
                    0: 1
                },
                angle: {
                    'rand(-35, -70)': 0
                },
                duration: 700,
                left: 0,
                top: 0,
                easing: 'cubic.out'
            },
            circle1: undefined,
            circle2: undefined

        }
    },
    mounted() {
        this.circle1 = new mojs.Shape({
            ...this.OPTS,
            stroke: '#B71C1C',
        })

        this.circle2 = new mojs.Shape({
            ...this.OPTS,
            radius: {
                0: 15
            },
            strokeWidth: {
                30: 0
            },
            stroke: 'orange',
            delay: 'rand(75, 150)'
        })
    },

    methods: {
        tune(e) {
            this.circle1
                .tune({
                    x: e.pageX,
                    y: e.pageY
                })
                .replay();

            this.circle2
                .tune({
                    x: e.pageX,
                    y: e.pageY
                })
                .replay();
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
