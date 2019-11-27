<template>
<div class="parallax">
    <div class="center-item-middle pb-5">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input v-model="usernameInput" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            <button @click="addUser" type="button" class="ml-3 btn btn-light">Light</button>
        </div>
    </div>
</div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
    components: {
        Parallax,
    },

    data() {
        return {
            usernameInput: ""
        }
    },

    computed: {
        items() {
            return this.$store.state.itemsModule.items ? this.$store.state.itemsModule.items : ['There are no items']
        }
    },

    methods: {
        addUser() {
            alert(this.usernameInput)
            this.$store.commit("addUsername", this.usernameInput);

        }
    }
}
</script> 

<style lang="scss">
.parallax {
    /* The image used */
    background-image: url("../assets/38627.jpg");
}
</style>
