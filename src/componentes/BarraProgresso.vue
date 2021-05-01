<template>
    <div class="barra-exterior">
        <div :style="{width: progresso + '%'}" class="barra-progresso ">
            <span> {{progresso}}% </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        progresso: { type: Number, defalt: 0 }
    },
}
</script>

<style>
.barra-exterior{
    width: 80%;
    border:1px solid white;
    height: 20px;
}
.barra-progresso {
    height: 100%;
    display: flex;
    justify-content: left;
    background-color: green;
    border-radius: 5px;
}
.barra-progresso span{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.barra-progresso span{
    position: absolute;
    left: auto;
    width: 80%;
    right: auto;
}


</style>