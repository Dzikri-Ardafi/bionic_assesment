<script setup>
import JobOption from "../components/JobApplication/JobOption.vue";
import JobDesc from "../components/JobApplication/JobDesc.vue";
import Skills from "../components/JobApplication/Skills.vue";
import FormApplication from "../components/JobApplication/FormApplication.vue";
import { onMounted, watch } from "vue";
import { methodApi } from "../stores/API";
import { storeToRefs } from "pinia";

const methodApiStores = methodApi()
const {data} = storeToRefs(methodApiStores)
onMounted(() => {
  methodApiStores.getData().then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
})
</script>
<template>
  <div class="container">
    <JobOption/>
    <div class="card_planner">
      <h1>
        {{ data.name }}
      </h1>
      <!-- Job Desc -->
      <JobDesc :data_description="data.job_desc"/>

      <!-- skill -->
      <Skills :data_skills ="data.job_skills"/>

      <FormApplication/>
    </div>
  </div>
</template>

<style scoped>
.container{
  padding: 5em 10em;
}
.card_planner{
  padding: 10px 3em;
  background-color: rgb(240, 237, 229);
  margin-top: 4em;
  border-radius: 10px;
}
.card_planner h1{
  color: rgb(75, 151, 65);
}

</style>
