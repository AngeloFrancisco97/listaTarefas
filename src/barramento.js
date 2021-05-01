import Vue from 'vue'
export default new Vue({
    methods: {
        enviarTarefa(tarefas, quantidadeFeita) {
            this.$emit('novaTarefa', tarefas, quantidadeFeita)
        },
        receberTarefa(callback) {
            this.$on('novaTarefa', callback)
        }
    }
})