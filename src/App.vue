<template>
  <div id="app">
    <el-row>
      <el-col :span="4"><div class="none"></div></el-col>
      <el-col :span="16">
        <layout></layout>
      </el-col>
      <el-col :span="4"><div class="none"></div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
    layout: () => import('@/components/layout')
  }
}
</script>

<style>
#app {

}
.none{
  min-height: 5px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.center{
  text-align: center;
}
.top10{
  margin-top: 10px;
}
.top30{
  margin-top: 30px;
}
.top50{
  margin-top: 50px;
}
.padding10{
  padding: 10px;
}
</style>
