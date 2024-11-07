<script setup>
import { ref, computed} from 'vue'

const heightInMeters= ref('')// reactive data of the height
const weightInKg= ref('')//reactive data of the weight

const emit =defineEmits([// emits the data user entered to the parent
    'stats-entered'
])

function userInput(){
  emit('stats-entered', heightInMeters.value,weightInKg.value)
}// this is the height and weight to be emitted to the parent, App.vue

</script>

<template>

  <div id="user-inputs">
    <h2>Enter your height and weight</h2>
      <label for="meters">Height in Meters</label>
      <input type="number" v-model="heightInMeters" id="meters" ><br><!--using v-model to connect to the user input-->
      <label for="weight">Weight in Kilogram</label>
      <input type="number" v-model="weightInKg" id="weight" ><br>
      <button id="calculate" v-on:click="userInput">Calculate</button>
  </div>


</template>

<style scoped>

#user-inputs{
  border: 3px solid red;
}
#calculate{
  background-color: #646cff;
}
</style>
