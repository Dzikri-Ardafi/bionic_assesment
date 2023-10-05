<template>
  <div class="wrapper_form_application">
    <h3>
      Send Your Job Application
    </h3>
    <form>
      <div class="wrapper_form">
      <div class="form_left_section">
        <div>
          <p class="title_form">Your Name</p>
          <input required v-model="displayName" type="text" placeholder="Enter your name">
        </div>

        <div>
          <p class="title_form">Email Address</p>
          <input required v-model="email" type="email" placeholder="Enter your email">
        </div>
      </div>
      <div class="form_right_section">
        <div>
          <p class="title_form">Mobile Number</p>
          <input required v-model="phone" type="text" placeholder="Enter your mobile number">
        </div>
        <div>
          <p class="title_form">Write your message here...</p>
          <input required v-model="message" type="text" placeholder="Write your message">
        </div>
      </div>
    </div>

    <div class="wrapper_input_file">
      <p class="title_form">File</p>
      <label for="file-input">
        <i class="fa-solid fa-upload"></i>
        <input type="file" id="input_file" style="">
      </label>

    </div>
    <div class="wrapper_button_submit">
      <button @click.prevent="submitJob">Send Message</button>
    </div>

    </form>

  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import { methodApi } from '../../stores/API';

const methodApiStore = methodApi()
const {responsePost} = storeToRefs(methodApiStore)

  const displayName = ref('')
  const subject = ref('Marketing Planner')
  const email= ref('')
  const phone = ref('')
  const message = ref('')
  const ptJobApplyType= ref('APPLICATION')
  const isActive = ref(false)
  const ptJobPost= reactive({
    id: 1
  })

  const payload = {
    displayName: displayName.value,
    subject: subject.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    ptJobApplyType: ptJobApplyType.value,
    isActive: isActive.value,
    ptJobPost: ptJobPost
  }

  const resetForm = () => {
    email.value = ('')
    phone.value = ('')
    message.value = ('')
    displayName.value = ('')
  }

  const submitJob = (e) => {
    methodApiStore.applyJob(payload).then((res) => {
      console.log(res)
      resetForm()
      console.log(responsePost.value)
    }).catch((err) => {
      resetForm()
      console.log(err)
      console.log(responsePost.value)
    })
  }
</script>

<style scoped>
.wrapper_form_application h3{
  color: rgb(42, 46, 49);
}
.wrapper_form{
  display: flex;
  column-gap: 5em;
}
.form_left_section, .form_right_section{
  width: 50%;
  display: grid;
  row-gap: 1em;
}
.form_left_section div input, .form_right_section div input {
  width: 100%;
  padding: 0.5em 0.5em;
  border-bottom: 2px solid rgb(206, 212, 218);
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: transparent;
}

.form_left_section div input:focus, .form_right_section div input:focus{
  outline: none;
}

input::placeholder{
  color: rgba(171, 183, 181, 0.528);
  font-weight: 500;
  font-size:medium
}
input{
  color: rgb(171, 183, 181);
  font-weight: 500;
  font-size:medium;
  margin-top: -2em
}
.title_form{
  font-weight: 600;
  color: rgb(42, 46, 49);
}
.wrapper_input_file{
  margin-top: 3em;
  margin-bottom: 2em;
}

input[type="file"] {
  display: none;
}


label i {
  font-size: 20px;
  color: white;
  vertical-align: middle;
}

label {
  display: inline-block;
  cursor: pointer;
  padding: 2em;
  background-color: orange;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.wrapper_button_submit button{
  border: none;
  color: white;
  font-weight: bold;
  background-color: #a7a6a3;
  padding: 7px 1em;
  border-radius: 5px;
}
</style>