<script setup>
import WouldYouRather from './components/WouldYouRather.vue'
import {ref} from 'vue'

const wyrQuestion = ref('Would you rather be a famous inventor or a famous writer?')
const wyrAnswer1= ref('Famous Inventor')// reactive data
const wyrAnswer2= ref('Famous Writer')

const userSelection = ref('')// this will save the user's answer so we set to empty for now

function updateUserSelection(userChoice){
  userSelection.value = `Thanks! you chose ${userChoice}`// updating here whatever the user has made a choice.
}

</script>

<template>
  <div id="app-component">
      <h1>Would You Rather?</h1>
      <WouldYouRather v-bind:question="wyrQuestion"
                      v-bind:answer1="wyrAnswer1"
                      v-bind:answer2="wyrAnswer2"
                      v-on:answer-selected="updateUserSelection"
      ></WouldYouRather>

      <p>{{userSelection}}</p>

  </div>

</template>

<style scoped>
p{
  font-family: "cursive";
}
#app-component{
  background-color: aqua;
  padding: 40px;
}

</style>
