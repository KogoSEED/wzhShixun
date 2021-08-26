<template>
  <div id="indexContent">
    <el-row class="top30">
      <el-card>
        <el-carousel :interval="4000" type="card" height="350px">
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <el-tooltip class="item" effect="dark" :content="item.tittle" placement="top">
              <el-image :src="item.url"></el-image>
            </el-tooltip>
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </el-row>
    <el-row class="top30">
      <el-card style="background-color: #F2F6FC">
        <el-row>
          <el-col :span="5">
            <el-image src="//img10.360buyimg.com/babel/s290x370_jfs/t1/133621/19/17467/111378/5fbf8318E6ccf4818/c5e52bf95e7c3850.jpg!cc_290x370.webp"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-image src="//img12.360buyimg.com/babel/s580x740_jfs/t1/162556/15/9172/203599/603ef7a1E153bf600/2cb4c8faa9ce7415.jpg!cc_290x370.webp"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-row style="background-color: #ffffff">
              <el-row>
                <el-col :span="1"><div class="none"></div></el-col>
                <el-col :span="8">
                  <div class="channelItemName">
                    <span >运动城</span>
                  </div>
                </el-col>
                <el-col :span="14">
                  <div class="channelItemTittle">
                    <span >生命在于运动</span>
                  </div>
                </el-col>
                <el-col :span="1"><div class="none"></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="1"><div class="none"></div></el-col>
                <el-col :span="10">
                  <el-image src="//img13.360buyimg.com/img/s100x100_jfs/t1/26952/21/9612/832446/5c808bf6Eb99ad716/262642958bbd48e7.jpg!cc_100x100.webp"></el-image>
                </el-col>
                <el-col :span="2"><div class="none"></div></el-col>
                <el-col :span="10">
                  <el-image src="//img10.360buyimg.com/img/s100x100_jfs/t1/197090/38/4946/143734/61260b66Efeb77434/31956acf852e7dee.jpg!cc_100x100.webp"></el-image>
                </el-col>
                <el-col :span="1"><div class="none"></div></el-col>
              </el-row>
            </el-row>

            <el-row style="background-color: #ffffff;margin-top: 32px">
              <el-row>
                <el-col :span="1"><div class="none"></div></el-col>
                <el-col :span="8">
                  <div class="channelItemName">
                    <span >生鲜馆</span>
                  </div>
                </el-col>
                <el-col :span="14">
                  <div class="channelItemTittle">
                    <span >尝遍天下鲜</span>
                  </div>
                </el-col>
                <el-col :span="1"><div class="none"></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="1"><div class="none"></div></el-col>
                <el-col :span="10">
                  <el-image src="//img12.360buyimg.com/img/s100x100_jfs/t1/135784/5/9754/130858/5f61cfacE617f8c6d/db0ac19c513f70a7.jpg!cc_100x100.webp"></el-image>
                </el-col>
                <el-col :span="2"><div class="none"></div></el-col>
                <el-col :span="10">
                  <el-image src="//img14.360buyimg.com/img/s100x100_jfs/t1/187683/22/9570/180925/60d054f9Ea4b1f366/6867a1f43a49e953.jpg!cc_100x100.webp"></el-image>
                </el-col>
                <el-col :span="1"><div class="none"></div></el-col>
              </el-row>
            </el-row>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-row>

            </el-row>
            <el-row>

            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexContent",
  components: {},
  data() {
    return {
      imgList: [
        {tittle: "电动牙刷", url:"//imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100014931266/FocusFullshop/CkRqZnMvdDEvMTYxMTUzLzMzLzE3Njc3LzUwMTY4Ni82MGU2YTJhZEVkYzI1ODVhNS9iNjRiNWYzMGQwMDFiZjI0LnBuZxIJNC10eV8wXzU1MAI47ot6QhYKEnVzbWlsZeeUteWKqOeJmeWItxAAQhMKD-WunuaDoOS5kOS4jeWBnBABQhAKDOeri-WNs-aKoui0rRACQgoKBueyvumAiRAHWML66sr0Ag/cr/s/q.jpg"},
        {tittle: "欧莱雅品牌日", url:"//img14.360buyimg.com/pop/s590x470_jfs/t1/200668/3/3078/40540/612303f0Ed7908225/d473249a5a8eba4e.jpg.webp"},
        {tittle: "PKPM安全计算软件", url:"https://img13.360buyimg.com/pop/s1180x940_jfs/t1/190794/40/15567/57641/6102697fEae09d1dc/276df898373421f5.jpg.webp"},
        {tittle: "京东电竞", url:"//img14.360buyimg.com/pop/s590x470_jfs/t1/192167/26/19766/101499/61233115E468ec999/3a66f9e650795060.jpg.webp"},
        {tittle: "新品上新", url:"https://imgcps.jd.com/ling4/100018752514/5LiK5Lqs5pud6YCb5paw5ZOB/5paw5ZOB5LiK5paw/p-5bd8253082acdd181d02fa1b/a68daee4/cr/s/q.jpg"},
        {tittle: "大码女装风格馆", url:"https://imgcps.jd.com/ling4/10034506421901/5aSn56CB5aWz6KOF6aOO5qC86aaG/54OtOOavj-a7oTMwMOWHjzMw/p-5bd8253082acdd181d02fa3b/9b8d8401/cr/s/q.jpg"},
      ]
    }
  }
  }
</script>

<style scoped>
.channelItemName{
  font-size: 1.1em;
  font-weight: bolder;
}
.channelItemTittle{
  margin-top: 6px;
  font-size: 0.6em;
  color: #909399;
}
.customCard{
  border: 1px solid #DCDFE6;
  border-radius: 5px;
}
</style>
