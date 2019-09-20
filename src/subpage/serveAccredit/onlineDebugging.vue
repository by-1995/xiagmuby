<template>
  <div>
    <div class="container">
      <div class="d1">
        <img src="@/assets/img/img01.png" alt />
        <p>请您创建应用后在尝试</p>
        <button>点击创建</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 500px;
}
.container > .d1 {
  display: inline-block;
  text-align: center;
  position: relative;
  left: 50%;top: 50%;
  transform: translate(-50%,-50%)
}
.d1>img{
  position: relative;
  left: -5px;
}
.d1>p{
  color: #4C4A65;
}
.d1>button{
  width: 120px;
  height: 30px;
  line-height: 30px;
  background-color:#007EFF;
  border-radius: 5px;
  outline: none;
  border:0;
  margin-top: 15px;
  color: aliceblue;
  cursor: pointer;
}
</style>