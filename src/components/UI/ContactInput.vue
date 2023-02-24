<template>
    <div>
        <input type="email" 
        v-model="childValue" 
        @input="updateParent"
        placeholder="Enter your email address.."
        >
    </div>
</template>

<script>
    export default {
        name: 'contact-input',
        data() {
            return {
                childValue: ''
            }
        },
        props: {
        },
        methods: {
            updateParent() {
                this.$emit('update', this.childValue)
            }
        }
    }
</script>

<style scoped>
input{
    border: 0;
    width: 190px;
}
input:focus{
    outline: none;
}
</style>