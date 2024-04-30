<template>
    <div class="box-border-result mt-5"  v-show="ganancia!=null">
        <div class="box-result ">
            <div >
                <label  for="">Monto Total:</label>
                <input class="input is-success is-large input-result" readonly v-model="ganancia" />
            </div>        
            <div class="mt-5">
                <label  for="">Ganancia total:</label>
                <input class="input is-success is-large input-result" readonly v-model="ganancia" />
            </div>
            <div class="mt-5" >
                <label  for="">Ganancia mensual:</label>
                <input class="input is-success is-large input-result" readonly v-model="ganancia" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" >
import {  ref } from 'vue';

export default{
    setup(){

        const ganancia = ref()

        return {
            ganancia
        }
    }
}
</script>
<style scoped>
.box-result{    
    padding: 5px;
    justify-content: center;
    align-items: center;
    align-items: center;
 }
 .box-border-result{
    border:3px solid #48c78e;
    border-radius: 8px;
    padding: 30px;
    text-align: center;
 }
 .input-result{
    text-align: center !important;
 }
</style>