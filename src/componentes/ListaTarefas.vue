<template>
  <div class="botoes">
        <template v-if="tarefas.length">
            <BotaoTarefas v-for="(tarefa, indice) in tarefas" :key="tarefa.nome" :tarefa="tarefa"
            @tarefaTrocada="$emit('tarefaTrocada', indice)"
            @excluirTarefa="$emit('excluirTarefa', indice)"/>
        </template>
        <p v-else>Sem tarefas !</p>
  </div>
</template>

<script>
import BotaoTarefas from "./BotaoTarefas.vue"
export default {
    components: {BotaoTarefas},
    props:{
            tarefas: {type: Array, required: true}
    }
    
    
}
</script>

<style>
    
</style>