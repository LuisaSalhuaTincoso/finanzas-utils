<template>
    <div class="content-trea">
        <div class="mt-5">
            <label for="" >TREA %: 
                <span class="icon">
                    <i class="fas fa-info-circle"></i>
                </span>
            </label>
            <input class="input is-success is-large" type="text" placeholder="Ingrese trea, ej: 6.75" 
            v-model="v$.trea.$model" @keydown="checkDigitDecimal" />
            <div v-for="(error, index) in v$.trea.$errors" :key="index">
                 <p class="help is-danger">{{ error.$message }}</p> 
            </div>
                
        </div>
        <div  class="mt-5">
            <label >Monto: 
                <span class="icon">
                    <i class="fas fa-info-circle"></i>
                </span>
            </label>
            <div class="control">
                <input class="input is-success is-large" type="text" placeholder="Ingresa monto"
                     v-model="v$.monto.$model" @keydown="checkDigitDecimal"/>
                <div v-for="(error, index) in v$.monto.$errors" :key="index">
                    <p class="help is-danger">{{ error.$message }}</p> 
                </div>
            </div>
        </div>
        <div  class="mt-5">
            <label for="">Dias: 
                <span class="icon">
                    <i class="fas fa-info-circle"></i>
                </span>
            </label>
            <div class="control">
                <input class="input is-success is-large" type="text" placeholder="Ingrese cantidad de dias" 
                    v-model="v$.days.$model" @keydown="checkDigit" />
                <div v-for="(error, index) in v$.days.$errors" :key="index">
                    <p class="help is-danger">{{ error.$message }}</p> 
                </div>
            </div>
        </div>
        <div class="control content-center mt-5">
            <button class="button is-success is-medium mr-1" @click="calculateAtTheEnd">Calcular ganancia</button>
            <button class="button is-dark" @click="reboot">
                <span class="icon">
                    <i class="fas fa-solid fa-rotate-right" title="Reiniciar campos"></i>
                </span>
            </button>                    
        </div>  
        
    </div>

</template>
<script lang="ts" >
import { useVuelidate } from '@vuelidate/core'
import { reactive, ref } from 'vue';
import { decimal, numeric } from '@vuelidate/validators'
import { required } from '@/utils/validators/i18n-validators';

export default{
    setup(){

        const state = reactive({
            trea:"",
            monto:"",
            days:""
        })

        const rules = {
            trea:{ required,decimal},
            monto:{ required,decimal },
            days:{ required,numeric }
        }

        const monto = ref()
        const days = ref()
        const ganancia = ref()
        const trea = ref()
       
        async function calculateAtTheEnd() {
            const result = await v$.value.$validate()
            console.log(result, v$.value)
            //if(result) return;
        // v$.$validate.value;
            monto.value = parseFloat(v$.value.monto.$model)
            days.value = parseFloat(v$.value.days.$model)
            trea.value = parseFloat(v$.value.trea.$model)  

            let interes = Math.pow((100 + trea.value) / 100, days.value / 360)

            ganancia.value = (interes - 1) * monto.value
            ganancia.value = !isNaN(ganancia.value) ? ganancia.value.toFixed(3) : 0
        }

        function reboot(){
            ganancia.value =null;
            v$.value.monto.$model="";
            v$.value.trea.$model="";
            v$.value.days.$model="";

        }

        const checkDigitDecimal = (event: KeyboardEvent) => {
            if (event.key.length === 1 && (isNaN(Number(event.key)) && event.key != '.')) {
                event.preventDefault();
            }
        };

        const checkDigit = (event: KeyboardEvent) => {
            if (event.key.length === 1 && isNaN(Number(event.key))) {
                event.preventDefault();
            }
        };

        const v$= useVuelidate(rules,state)

        return {
            state,
            v$,
            calculateAtTheEnd,
            reboot,
            monto,
            days,
            trea,
            ganancia,
            checkDigit,
            checkDigitDecimal
        }
    }
}

</script>
<style scoped>
@import "../../assets/_app.scss";

.content-trea label{
    font-size:1.5rem;    
 }
</style>

