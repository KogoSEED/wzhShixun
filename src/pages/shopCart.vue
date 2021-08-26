<template>
  <div id="shopCart">
    <el-card ref="content">
      <el-row>
        <div class="fl top10"><span style="font-size: 1.3em; color: #409EFF;">全部商品{{total}}</span></div>
        <div class="fr">
          <span>配送至：</span>
          <el-select v-model="address" placeholder="请选择配送地址">
            <el-option
                v-for="(item,index) in userInfo.address"
                :key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </div>
      </el-row>
      <el-row class="top30" style="padding: 20px">
        <el-col class="padding10" :span="4"><el-checkbox v-model="allChecked">全选</el-checkbox></el-col>
        <el-col class="padding10" :span="10"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品</span></el-col>
        <el-col class="padding10" :span="3"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单价</span></el-col>
        <el-col class="padding10" :span="2"><span>数量</span></el-col>
        <el-col class="padding10" :span="3"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小计</span></el-col>
        <el-col class="padding10" :span="2"><span>操作</span></el-col>
      </el-row>
      <el-card shadow="none" v-for="(item,index) in shopCart" :key="index">
        <el-row>
          <el-col class="padding10" :span="1"><el-checkbox v-model="item.checked"></el-checkbox></el-col>
          <el-col class="padding10" :span="2"><el-image :src="item.imgUrl"></el-image></el-col>
          <el-col class="padding10" :span="11"><span>{{ item.name }}</span></el-col>
          <el-col class="padding10" :span="2"><span>￥{{ item.unitPrice }}</span></el-col>
          <el-col class="padding10" :span="4">&nbsp;<el-input-number v-model="item.count" :min="0" label="描述文字" size="mini"></el-input-number></el-col>
          <el-col class="padding10" :span="2"><span>&nbsp;￥{{ item.unitPrice * item.count }}</span></el-col>
          <el-col class="padding10" :span="2">&nbsp;<el-button size="mini" @click="deleteItem(item)" type="danger">删除</el-button></el-col>
        </el-row>
      </el-card>
    </el-card>
    <br><br><br><br>
    <el-card class="footer">
      <el-row style="width: 1075px">
        <el-col :span="2" style="margin-top: 8px"><el-checkbox v-model="allChecked">全选</el-checkbox></el-col>
        <el-col :span="3"><el-button type="text" @click="deleteChecked">删除选中商品</el-button></el-col>
        <el-col :span="2"><el-button type="text">移入关注</el-button></el-col>
        <el-col :span="9"><div class="none"></div></el-col>
        <el-col :span="3" style="margin-top: 8px"><span>已选择 <span style="color:#F56C6C;">{{totalChecked}}</span> 件商品</span></el-col>
        <el-col :span="3" style="margin-top: 8px"><span>总价：<span style="color:#F56C6C;">￥{{totalPrice}}</span></span></el-col>
        <el-col :span="2"><el-button type="primary" @click="purchase">结算</el-button></el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "shopCart",
  components: {},
  data() {
    return {
      total: 0,
      address:[],
      allChecked: false
    }
  },
  watch: {
    allChecked(val) {
      if(val==true){
        this.shopCart.forEach((item)=>{
          item.checked = true
        })
      } else if (val==false) {
        this.shopCart.forEach((item)=>{
          item.checked = false
        })
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo
    },
    shopCart() {
      return this.$store.getters.shopCart
    },
    totalChecked() {
      let totalChecked = 0
      this.shopCart.forEach((item) => {
        if(item.checked) totalChecked += item.count
      })
      return totalChecked
    },
    totalPrice() {
      let totalPrice = 0
      this.shopCart.forEach((item) => {
        if(item.checked) totalPrice += item.unitPrice * item.count
      })
      return totalPrice
    },
  },
  methods: {
    deleteItem(item) {
      this.$confirm('确定删除？')
      .then(() => {
        this.shopCart.splice(this.shopCart.indexOf(item),1)
      })
      .catch(() => {
        this.$message.info('取消删除')
      });
    },
    deleteChecked() {
      this.$confirm('确定删除？')
          .then(() => {
            this.shopCart.forEach((item) => {
              if(item.checked) {
                this.shopCart.splice(this.shopCart.indexOf(item),1)
              }
            })
          })
          .catch(() => {
            this.$message.info('取消删除。')
          });
    },
    purchase() {

    }
  },
  mounted() {
    console.log(this.$refs.shopCartContent)
  }
}
</script>
<style scoped>
#shopCart{
  min-width: 1000px;
}
.footer{
  position: fixed;
  bottom: 0;
}
</style>