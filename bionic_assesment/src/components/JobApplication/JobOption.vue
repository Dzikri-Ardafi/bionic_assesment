<template>
   <div class="job_option">
    <div class="job_option_left">
      <div class="wrapper_job_option">
      <div class="job_name">
        Marketing Planner
      </div>
      <div class="action_job">
        <button>
          See Job
        </button>
      </div>
    </div>

    <div class="wrapper_job_option">
      <div class="job_name">
        UI/UX Content Planner
      </div>
      <div class="action_job">
        <button>
          See Job
        </button>
      </div>
    </div>

    <div class="wrapper_job_option">
      <div class="job_name">
        HR/Legal Manager
      </div>
      <div class="action_job">
        <button>
          See Job
        </button>
      </div>
    </div>
    </div>

    <div class="job_option_right">
      <div class="wrapper_job_option">
      <div class="job_name">
        Marketing Planner
      </div>
      <div class="action_job">
        <button>
          See Job
        </button>
      </div>
    </div>

    <div class="wrapper_job_option">
      <div class="job_name">
        UI/UX Content Planner
      </div>
      <div class="action_job">
        <button>
          See Job
        </button>
      </div>
    </div>

    <div class="wrapper_job_option">
      <div class="job_name">
        HR/Legal Manager
      </div>
      <div class="action_job">
        <button>
          See Job
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .job_option{
  display: flex;
  justify-content: space-between;
  column-gap: 2em;
}

.job_option_left, .job_option_right{
  width: 50%;
  display: grid;
  row-gap: 2em;
}
.wrapper_job_option{
  display: flex;
  justify-content: space-between;
  padding: 0.75em 1em;
  border-radius: 10px;
  box-shadow: 0px 4px 3px 1px #d3d2d2;
  background-color: #efede6;
  color: #75a365;
  font-weight: bold;
  align-items: center;
}

.wrapper_job_option button{
  background-color: #e39937;
  border: none;
  padding: 6px 7px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}
</style>