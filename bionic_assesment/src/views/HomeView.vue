<script setup>

</script>

<template>
  <div class="container_top">
    <div class="blue_bg wrapper_content_1 content content_1">
      1
    </div>
    <div class="blue_bg wrapper_content_2_3">
      <div class="content content_2">
        2
      </div>
      <div class="content content_3">
        3
      </div>
    </div>
<div class="wrapper_content_4-10">
    <div class="wrapper_content_4-7">
      <div class="blue_bg wrapper_content_4">
        <div class="red_bg content content_4">
          4
        </div>
      </div>

    <div class="blue_bg wrapper_content_5-7">
      <div class="content content_5">
        5
      </div>
      <div class="content content_6">
        6
      </div>
      <div class="content content_7">
        7
      </div>
    </div>
    </div>

    <div class="blue_bg wrapper_content_8-10">
      <div class="red_bg content content_8">8</div>
      <div class="red_bg content content_9">9</div>
      <div class="red_bg content content_10">10</div>
    </div>
</div>

  </div>

  <div class="container_bottom ">
    <div class="wrapper_right_section blue_bg">
      <div class="red_bg content_botton">
      </div>
      <div class="white_bg content_botton_white"></div>
      <div class="red_bg content_botton content_red_bottom">
      </div>
    </div>

    <div class="wrapper_left_section">
      <div class="red_bg content_botton content_red_right_top"></div>
      <div class="red_bg content_botton content_red_right_bottom"></div>
    </div>
  </div>
</template>

<style scoped>
.container_top{
  border: 5px solid black;
  color: white;
}
.blue_bg{
  background-color: blue;
}

.red_bg{
  background-color: red;
}
.white_bg{
  background-color: white;
}
.content_1{
  border-bottom: 5px solid black;
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em 0
}

.wrapper_content_2_3{
  display: flex;
  justify-content: space-between;
  border-bottom: 5px solid black;
}
.wrapper_content_4-7{
  width: 70%;
  border-right: 5px solid black;
}
.wrapper_content_8-10{
  width: 30%;
  padding: 11px 16px 10px 10px;
  display: grid;
  row-gap: 10px;
}

.wrapper_content_4{
  padding: 15px;
  border-bottom: 5px solid black;
  height: 60%;
}

.wrapper_content_4-10{
  display: flex;
  justify-content: space-between;

}
.wrapper_content_5-7{
  display: flex;
  justify-content: space-between;
  height: 24%;
}
.content_4, .content_8, .content_9, .content_10{
  border: 5px solid black;
}
.content_4{
  height: 70%;
  width: auto;
}
.content_2{
  border-right: 5px solid black;
}
.content_5{
  border-right: 5px solid black;
}
.content_6{
  border-right: 5px solid black;
}
.content_8, .content_9{
  border-bottom: 5px solid black;
}

.container_bottom{
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
}
.content_botton{
  height: 50px;
  width: 100px;
}
.wrapper_right_section{
  border: 5px solid black;
  width: 60%;
}
.content_botton_white{
  height: 100px;
  width: 80px;
  margin-left: 2em;
  margin-top: -2em;
}
.content_red_bottom{
  margin-left: 4.5em;
  margin-top: -2em;
}
.wrapper_left_section{
  width: 40%;
  position: relative;
}
.content_red_right_top{
  position: absolute;
  margin-left: -2em;
  margin-top: 5px;
}
.content_red_right_bottom{
  position: absolute;
  bottom: 5px;
  left: 30%;
}

@media only screen and (max-width: 600px) {
  .wrapper_content_1{
    padding: 2em 0px;
  }
  .wrapper_content_2_3{
    display: block;
  }
  .content_2{
    border-bottom: 5px solid black;
  }
  .wrapper_content_4-10{
    display: block;
  }
  .wrapper_content_4-7{
    width: 100%;
  }
  .wrapper_content_5-7{
    border-bottom: 5px solid black;
  }
  .wrapper_content_8-10{
    width: auto;
    display: flex;
    column-gap: 15px;
  }
  .container_bottom{
    display: none;
  }

}
</style>