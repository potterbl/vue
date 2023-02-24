<template>
    <button class="contact__btn"
    @click="showDialog"
    >
        Contact now
    </button>
</template>

<script>
export default{
    name: 'btn-contact',
    data() {
        return {
            isEnabled: false,
        }
    },
    methods: {
        showDialog() {
            this.isEnabled = !this.isEnabled,
            console.log('a')
        }
    }
}
</script>

<style>
html {
    font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}

.contact__btn {
    cursor: pointer;
    padding: 20px 40px;
    width: 215px;
    height: 65px;
    background-color: #2639ED;
    border:0;
    border-radius: 5rem;
    font-size: 2rem;
    color: white;
}
</style>