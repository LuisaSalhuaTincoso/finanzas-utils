<template>
    <div>
        <div class="card-mine">
            <label >Calculadora ganancia %TREA</label>
        </div>
        <div class="content-mine ">
            <div class="columns">
              <div class="column is-half">
                <div class="field mt-5">
                    <label for="" class="label-size ">TREA%: 
                        <span class="icon" @click="mostrarInfo(1)">
                            <i class="fas fa-info-circle"></i>
                        </span>
                    </label>
                        <input class="input is-success is-large" type="text" placeholder="Ingrese trea, ej: 6.75" v-model="trea" />
                </div>
                <div  class="mt-5">
                    <label >Monto: 
                        <span class="icon"  @click="mostrarInfo(2)">
                            <i class="fas fa-info-circle"></i>
                        </span>
                    </label>
                    <div class="control">
                        <input class="input is-success is-large" type="text" placeholder="Ingresa monto" v-model="monto" />
                    </div>
                </div>
                <div  class="mt-5">
                    <label for="">Dias: 
                        <span class="icon"  @click="mostrarInfo(3)">
                            <i class="fas fa-info-circle"></i>
                        </span>
                    </label>
                    <div class="control">
                        <input class="input is-success is-large" type="text" placeholder="Ingrese cantidad de dias" v-model="days" />
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
              <div class="column is-half">
                <div class="mt-5" v-show="message!=null">
                    <article class="message">
                        <div class="message-body" v-html="message"></div>
                      </article>
                </div>
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
              </div>

            </div>
           
        </div>
    </div>
</template>
<script >
import { useVuelidate } from '@vuelidate/core'
import { reactive, ref } from 'vue';
import { required } from '@vuelidate/validators'

export default{
setup(){

    const state = reactive({
        trea:null,
        monto:null,
        days:null
    })

    const rules = {
        trea:{ required},
        monto:{ required },
        days:{ required }
    }

    const monto = ref()
    const days = ref()
    const ganancia = ref()
    const trea = ref()
    const message =ref("Importante la formula aplicada que se utiliza es la misma que se muestra en los documentos de ejemplos de cada entidad financiera peruana, que es la misma en todas las entidades, la misma que se probo en varios simuladores, en los que se vio una diferencia fue en el redondeo del segundo digito de los decimales.")

    function calculateAtTheEnd() {
    monto.value = parseFloat(monto.value)
    days.value = parseFloat(days.value)
    trea.value = parseFloat(trea.value)

    let interes = Math.pow((100 + trea.value) / 100, days.value / 360)

    ganancia.value = (interes - 1) * monto.value
    ganancia.value = !isNaN(ganancia.value) ? ganancia.value.toFixed(3) : 0
    message.value =null
    }

    function mostrarInfo(info){
        switch(info){        
            case(1): 
                message.value="<b>TREA</b> Tasa de rendimiento efectivo anual, es la tasa que dispones cada entidad financiera, esta determina el rendimiento que se tendra como ganacia anual";
                break;
            case(2): 
                message.value="<b>Monto</b> dinero ha simular independiente de la moneda sea soles o dolares, entre mayor cantidad mayor la ganancia. <br>Es importante saber si la TREA aplicada es para cualquier monto ya que si leemos un <b>Hasta</b> en la TREA de la entidad como <q>Hasta 6.25% TREA</q> aplique a sumas fuertes de dinero y montos como <q>s/5000</q> solo ofrescan un TREA 2.0% ";
                break;
            case(3): 
                message.value="<b>Dias</b> que se considera tener el monto en la cuenta de ahorros o deposito a plazo fijo.<br> Cabe decir que la mayoria de entidades para el deposito a plazo fijo considera los: <ul> <li>180 dias -> 6 meses</li> <li>360 dias -> 1 año y no 365 dias</li> </ul>";
                break;
            default: this.message.value ="";
        }
    }

    function reboot(){
        ganancia.value =null;
        monto.value=null;
        trea.value=null;
        days.value =null;
    }

    const v$= useVuelidate(rules,state)
    return {state,v$,calculateAtTheEnd,mostrarInfo,reboot,monto,days,trea,ganancia,message}
    }
}
</script>

<style scoped>

.card-mine{
    background-color: #8E24B4;
    color:#FFFFFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content:center;
    padding:25px;
    margin:10px;
}

.card-mine label{
   font-size:2rem;    
}

.content-mine{
    background-color:#FFFFFF;
    border-radius: 8px;
    padding: 35px;
    margin:auto;
    width: 50%;
}

.content-mine label{
    font-size:1.5rem;    
 }

 .content-center{
    display: flex;
    justify-content: center;
    align-items: center;
 }

 .box-result{    
    padding: 5px;
    justify-content: center;
    align-items: center;
    align-items: center;
 }
 .box-border-result{
    border:3px solid hsl(141, 71%, 48%);
    border-radius: 8px;
    padding: 30px;
    text-align: center;
 }
 .input-result{
    text-align: center !important;
 }

</style>