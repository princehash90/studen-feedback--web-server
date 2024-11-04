<script setup>
import { ref, watch} from 'vue'

defineProps({
  question:String,
  answer1:String,
  answer2:String,

})

const emit =  defineEmits(['' +
'answer-selected'
])

const choice= ref('')

// function choiceMade (){
//   //emit event to tell parent that user has made a choice
//   emit('answer-selected', choice.value)
// }


// adding a watcher to watch the choice variable, when it changes, emit the event the parent that the user has made a choice
//a different way of implementing the same functionality
watch(choice,()=>{
  emit('answer-selected', choice.value)
})


</script>

<template>

  <div id="wyr">

    <h2>Make your Choice</h2>

   <p> {{question}}</p>

    <!-- this value attribute is ithe HTML value, for what data input stores-->
    <div>
      <!--<input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1" v-on:change="choiceMade">-->
      <!--another way to do it-->
      <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1">
      <label for="answer-1">{{answer1}}</label>
      <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2">
      <label for="answer-2">{{answer2}}</label>
    </div>

  </div>

</template>

<style scoped>

#wyr{
  background-color: chartreuse;
}
p{
  font-family: Arial, Helvetica, sans-serif;
}

</style>
