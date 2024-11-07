<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import  {ref} from 'vue'

const totalBmi= ref('')// reactive variable to store the bmi

function calculateBMI(height, weight){// function to calculate to bmi
  const bmi = weight / (height * height)// this is the formula to calculate bmi
  totalBmi.value = `The BMI is ${bmi.toFixed(2)}`//
}

</script>

<template>
  <div id="app-compo">
      <h1>Body Mass Index Calculator</h1>

      <BodyMassIndexForm v-on:stats-entered="calculateBMI">
      </BodyMassIndexForm>


 <p>{{totalBmi}}</p><!--prints out the bmi-->

  </div>


</template>

<style scoped>
#app-compo{
  border: 3px solid blue;
}

</style>
