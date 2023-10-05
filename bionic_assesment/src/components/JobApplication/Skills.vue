<template>
  <div class="wrapper_skills">
    <h3>
        Skills :
      </h3>
      <ul v-for="skill in props.data_skills" :key="skill">
        <li>{{ skill }}</li>
      </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  data_skills: Array
})
</script>

<style scoped>
.wrapper_skills h3{
  color: rgb(42, 46, 49);
}
.wrapper_skills ul li {
  color: #62615c;
  font-weight: 500;
}
</style>