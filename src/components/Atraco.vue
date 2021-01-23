<template>
    <div>
        <b-button @click="atracar">Atracar!</b-button>
        <p>Te he atracado: {{num}} veces</p>
    </div>
</template>

<script>
    export default {
        name: "Atraco",
        data() {
            return {
                num: 0
            }
        },
        methods: {
            atracar(){
                this.num++
            }
        }
    }
</script>
