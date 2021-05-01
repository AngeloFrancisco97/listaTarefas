<template>
    <div class="formulario">
            <input v-model="nome" class="text" @keydown.enter="addTarefa" placeholder="Nova Tarefa?">
            <button @click="addTarefa">+</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            nome: ''
        }
    },
    methods: {
        addTarefa() {
            this.$emit('tarefaAdicionada', {nome: this.nome})
            this.nome = ''
        }
    },

}
</script>

<style>

    .formulario {
        margin-top: 20px;
    }
    .formulario .text{
        font-size: 18px;
        background-color: darkgray;
        color: gray;
        border: 1px solid white;
        border-right: none;
        border-radius: 5px 0px 0px 5px;
        
    }
    .formulario button {
        color: white;
        font-size: 18px;
        background-color: rgb(65, 65, 253);
        border: 1px solid white;

    }

</style>