<template>
  <div id="goodsIndex">
    <span>商品id为:{{id}}</span>
    <el-row>
      <el-col :span="8"><div class="none"></div></el-col>
      <el-col :span="8">
        <div class="none">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="toDetail">商品介绍</el-menu-item>
            <el-menu-item index="2" @click="toSpec">规格与包装</el-menu-item>
            <el-menu-item index="3" @click="toService">售后保障</el-menu-item>
            <el-menu-item index="4" @click="toComments">商品评价</el-menu-item>
          </el-menu>
          <!--      <router-view>是router最核心的部分, 作用就是把匹配到当前路径的路由渲染出来-->
          <router-view/>
        </div>
      </el-col>
      <el-col :span="8"><div class="none"></div></el-col>
    </el-row>



  </div>
</template>

<script>
export default {
  name: "goodsIndex",
  props: ["id"],
  components: {},
  data() {
    return {
      activeIndex: "1"
    }
  },
  methods: {
    toDetail() {
      this.$router.push({path: "/goods/:id/detail"})
    },
    toSpec() {
      this.$router.push({path: "/goods/:id/spec"})
    },
    toService() {
      this.$router.push({path: "/goods/:id/service"})
    },
    toComments() {
      this.$router.push({path: "/goods/:id/comments"})
    }
  }
  }
</script>

<style scoped>

</style>
