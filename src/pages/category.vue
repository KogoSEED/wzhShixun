<template>
  <div id="category">
    <el-card>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="console.log('select menu')">
        <el-menu-item index="1">手机</el-menu-item>
        <el-menu-item index="2">电脑</el-menu-item>
        <el-menu-item index="3">服装</el-menu-item>
        <el-menu-item index="4">家具</el-menu-item>
        <el-menu-item index="5">生鲜</el-menu-item>
        <el-menu-item index="6">母婴</el-menu-item>
        <el-menu-item index="7">艺术</el-menu-item>
        <el-menu-item index="8">学习</el-menu-item>
        <el-menu-item index="9">美妆</el-menu-item>
        <el-menu-item index="10">医疗</el-menu-item>
        <el-menu-item index="11">交通</el-menu-item>
        <el-menu-item index="12">理财</el-menu-item>
      </el-menu>
      <el-row style="padding: 10px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">全部分类</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">手机</a></el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row style="padding: 5px">
        <span>已选择标签: </span>
        <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
          {{tag}}
        </el-tag>
      </el-row>
      <div>
        <el-row v-for="(category,catIndex) in categoryList" :key="catIndex">
          <el-col :span="2" class="tagCategory"><span>{{ category.name }}</span></el-col>
          <el-col :span="22">
            <el-row>
              <el-col class="tag" :span="3" v-for="(tag,tagIndex) in category.tagList" :key="tagIndex"><span @click="printTag(catIndex,tagIndex)">{{ tag }}</span></el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>

    </el-card>
    <div id="indexx">
      <div>
        <img src="../assets/1.png">
        <p>
          Apple iPhone 11 (A2223) 128GB 白色 移动联通电信4G手机 双卡双待
        </p>
      </div>
      <div>
        <img src="../assets/2.jpg">
        <p>
          vivo iQOO 8 12GB+256GB 传奇版 120W超快闪充 骁龙888 液冷散热  KPL官方赛事电竞
        </p>
      </div>
      <div>
        <img src="../assets/3.jpg">
        <p>
realme 真我Q3 骁龙750G 120Hz可变帧电竞屏 30W智慧闪充 5000mAh大电池 迷幻银 8GB+128GB realmeq3双5G
        </p>
      </div>
      <div>
        <img src="../assets/4.jpg">
        <p>
          OPPO K9 高通骁龙768G 65W超级闪充 90Hz OLED电竞屏 6400万AI三摄 8+128G幻彩之翼双模5G全网通游戏拍照
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  components: {},
  data() {
    return {
      activeIndex: '',
      inputVisible: false,
      inputValue: '',
      categoryList: [
        {
          name: '品牌',
          tagList: ['小米（MI）','荣耀（HONOR）','华为（HUAWEI）','vivo','OPPO','黑鲨','一加','三星（SAMSUNG）'
            ,'魅族（meizu）','Apple','真我（realme）','摩托罗拉（Motor...','中兴（ZTE）','联想（lenovo）','ROG','努比亚（nubia）'],
          checked: undefined
        },
        {
          name: '功能',
          tagList: ['超大字体','超大音量','SOS功能','语音命令','语音识别(文字语音互转)','远程协助','极简桌面模式'],
          checked: undefined
        },
        {
          name: '系统',
          tagList: ['Android','EMUI 11.0（基于Android 10）','HarmonyOS 2','IOS','其他OS'],
          checked: undefined
        },
        {
          name: 'CPU型号',
          tagList: ['骁龙855 plus','麒麟990','麒麟990 5G','骁龙768','GExynos980','MTK Helio G85','MT6873','紫光展锐','骁龙865 plus','天玑1000 plus'],
          checked: undefined
        }
      ]
    }
  },
  computed: {
    dynamicTags() {
      let dynamicTags = []
      //注意 this.$router 和 this.$route 是不一样的，$router 是整体的vue-router对象， $route是当前的路由对象
      let keyword = this.$route.query.keyword
      if(keyword) dynamicTags.push(keyword)
      this.categoryList.forEach((item) => {
        let tag = item.checked
        //在vue中，判断一个值不为空（空字符串‘’或未定义undefined）不能直接写在比较运算中，我们应该写tag这个字符串本身
        if(tag) {
          dynamicTags.push(tag)
        }
    })
    return dynamicTags
    }
  },
  watch: {
    dynamicTags() {
      console.log("已发送axios")
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    printTag(catIndex,tagIndex){
      this.categoryList[catIndex].checked = this.categoryList[catIndex].tagList[tagIndex]
    },

    // showInput() {
    //   this.inputVisible = true;
    //   this.$nextTick(() => {
    //     this.$refs.saveTagInput.$refs.input.focus();
    //   });
    // },
    //
    // handleInputConfirm() {
    //   let inputValue = this.inputValue;
    //   if (inputValue) {
    //     this.dynamicTags.push(inputValue);
    //   }
    //   this.inputVisible = false;
    //   this.inputValue = '';
    // }
    },
  }
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.tag{
  font-size: 0.7em;
  padding: 5px;
}
.tagCategory{
  background-color: #F2F6FC;
  padding: 5px 5px 30px 5px;
  font-size: 0.8em;
  font-weight: bold;
}
#indexx>div {
  float: left;
  width: 220px;
  height: 270px;
  margin: 20px 20px 20px 20px;
  padding: 8px;
  /*border: 1px solid #919191;*/
  transition: all 0.5s;
}
#indexx>div>img {
  width: 200px;
  height: 200px;
}

#indexx>div>p {
  width: 200px;
  font-size: 15px;
  text-align: justify;
  /* text-indent: 2rem; */
}
</style>
