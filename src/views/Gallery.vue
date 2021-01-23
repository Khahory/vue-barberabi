<template>
    <div>
        Gallery.vue
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        beforeCreate: () => {
            document.body.className = '';
            document.documentElement.className = '';
        }
    }
</script>
