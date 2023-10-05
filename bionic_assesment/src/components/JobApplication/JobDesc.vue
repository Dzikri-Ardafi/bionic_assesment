<template>
  <div class="wrapper_job_desc">
    <h3>
        Job Description :
      </h3>
      <ul v-for="desc in props.data_description" :key="desc">
        <li>{{ desc }}</li>
      </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  data_description: Array
})
</script>

<style scoped>
.wrapper_job_desc h3{
  color: rgb(42, 46, 49);
}

.wrapper_job_desc ul li {
  color: #62615c;
  font-weight: 500;
}
</style>