<template>
      <div class="botao" @click="$emit('tarefaTrocada', tarefa)" :class="statusTarefa" >
          <p>{{tarefa.nome}}</p>
          <div @click.stop="$emit('excluirTarefa', tarefa)" class="close"><span>x</span></div>

      </div>
</template>

<script>
export default {
    props:{
           tarefa: {type: Object, required: true}
    },
    computed: {
        statusTarefa(){     
            return {       
                completa: !this.tarefa.pendente,
                incompleta: this.tarefa.pendente
            }
        }
    },

    
}
</script>

<style>
    .botoes {
        flex-wrap: wrap;
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .botao{
        position: relative;
        display: flex;
        justify-content: center;
        font-size: 20px;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 7px 30px;
        margin: 10px;
    }
    .completa {
    background-color: green;
    border:1px solid rgb(0, 100, 0);
    box-shadow: -10px 0px 0px 0px rgb(0, 100, 0);
    }
    .incompleta {
        background-color: red;
        border:1px solid rgb(139, 0, 0);

        box-shadow: -10px 0px 0px 0px rgb(139, 0, 0);
    }
    .completa .close{
        background-color: rgba(0, 100, 0, 0.7); ;
    }

    .incompleta .close{
        background-color: rgba(139, 0, 0, .7);
    }

    .close{
        font-size: 0.9rem;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 10px;
        right: 10px;
        font-weight: 600;
        cursor: pointer;
        
    }

</style>