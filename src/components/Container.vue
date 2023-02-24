<template>
    <div class="parental__container">
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'content-container',
    }
</script>

<style>
.parental__container{
    display: flex;
    justify-content: center;
}

.container{
    width: calc(100% - 240px)
}

</style>