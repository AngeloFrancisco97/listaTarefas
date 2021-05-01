<template>
	<div id="app">
		<h1>Tarefas</h1>
		<Progresso :progresso="progresso"></Progresso>
		<Formulario @tarefaAdicionada="tarefaAdicionada"/>
		<ListaTarefas @excluirTarefa="deletarTarefa" @tarefaTrocada="alternarStatus" :tarefas="tarefas"/>
	</div>
</template>

<script>
import Progresso from "./componentes/BarraProgresso.vue"
import Formulario from "./componentes/Formulario.vue"
import ListaTarefas from "./componentes/ListaTarefas.vue"

export default {
	components: { Progresso, Formulario, ListaTarefas },
	data() {
		return {
			tarefas: [],
		}
	},
	computed: {
		progresso() {
			const totalTarefas = this.tarefas.length
			const tarefasIncompletas = this.tarefas.filter(t => !t.pendente).length
			return Math.round( tarefasIncompletas * 100 / totalTarefas) || 0
			
		}
	},
	methods: {
		tarefaAdicionada(tarefa){
			const mesmoNome = t => t.nome === tarefa.nome
			const confirmarMesmoNome = this.tarefas.filter(mesmoNome).length === 0
			if(confirmarMesmoNome){
				this.tarefas.push({
					nome: tarefa.nome, 
					pendente: tarefa.pendete || true})
			}else{
				alert("Tarefa ja cadastrada")
			}
		},
		alternarStatus(i){
			this.tarefas[i].pendente = !this.tarefas[i].pendente
		},
		deletarTarefa(i){
			this.tarefas.splice(i, 1)
		}
	},
	watch: {
		tarefas: {
			deep: true,
			handler() {
				localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
			}
		}
	},
	created() {
		const json = localStorage.getItem('tarefas')
		const array = JSON.parse(json)
		if(Array.isArray(array)){
			this.tarefas = JSON.parse(json)
		}else{
			this.tarefas = []
		}
	},
	

}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
