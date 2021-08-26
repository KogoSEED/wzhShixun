import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state就是共享的数据
  state: {
    user: {
      username: null,
      password: null,
      realName: null,
      id: null,
      avatar: null,
      address: null,
      access_token: null,
      refresh_token: null,
    },
    shopCart: []
  },
  //当我们直接调用store.state中的数据时, 会不可避免的产生数据安全的问题, 有时候出了错,我们根本不知道是谁修改了这个数据
  //所以, 我们应该使用get和set, 也就是getters和mutations+actions
  //state中的每一个对象都应该有对应的getter
  getters: {
    userInfo: state => {
      return state.user
    },
    username: state => {
      return state.user.username
    },
    password: state => {
      return state.user.password
    },
    realName: state => {
      return state.user.realName
    },
    id: state => {
      return state.user.id
    },
    avatar: state => {
      return state.user.avatar
    },
    address: state => {
      return state.user.address
    },
    access_token: state => {
      return state.user.access_token
    },
    refresh_token: state => {
      return state.user.refresh_token
    },
    shopCart: state => {
      return state.shopCart
    },
  },
  //更改store中的数据唯一的方式就是 提交 mutation
  //mutations里面写的是一个个修改数据的方法
  mutations: {
    //每个mutation中的第一参数都应该是state
    SET_USER_INFO(state,userInfo) {
      state.user = userInfo
    },
    SET_USERNAME(state,username) {
      state.user.username = username
    },
    SET_PASSWORD(state,password) {
      state.user.password = password
    },
    SET_REAL_NAME(state,realName) {
      state.user.realName = realName
    },
    SET_ID(state,id) {
      state.user.id = id
    },
    SET_AVATAR(state,avatar) {
      state.user.avatar = avatar
    },
    SET_ADDRESS(state,address) {
      state.user.address = address
    },
    SET_ACCESS_TOKEN(state,access_token) {
      state.user.access_token = access_token
    },
    SET_REFRESH_TOKEN(state,refresh_token) {
      state.user.refresh_token = refresh_token
    },
    SET_SHOP_CART(state,shopCart) {
      state.shopCart = shopCart
    }
  },
  //action里面写的是很多mutations的集合
  //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
  //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
  actions: {
    login({ commit }) {
      //action是异步的，所以我们返回一个promise的工厂函数,在promise中有两个参数
      // resolve是所有被序列化操作执行之后的方法，表示promise正常结束
      // reject是被序列化操作出现异常后的一个捕捉，相当于是try catch中的catch
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let userInfo = {
            username : "Felixxx-",
            password : "123456",
            realName : "林圣浩",
            id: "1147824",
            avatar: "https://video.codeseeding.com/image/default/AE03865608444CB389BA0334CD67F1AC-6-2.jpg",
            address: ["广东省佛山市南海区M78星云","拉萨大家奥克兰京东卡就得啦时间","肇庆学院翰墨池"],
            access_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal",
            refresh_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal"
          }
          commit('SET_USERNAME', userInfo.username)
          commit('SET_PASSWORD', userInfo.password)
          commit('SET_REAL_NAME', userInfo.realName)
          commit('SET_ID', userInfo.id)
          commit('SET_AVATAR', userInfo.avatar)
          commit('SET_ADDRESS', userInfo.address)
          commit('SET_ACCESS_TOKEN', userInfo.access_token)
          commit('SET_REFRESH_TOKEN', userInfo.refresh_token)
          let shopCart = [
            {
              name: 'Apple iPhone 12 (A2404) 256GB 蓝色 支持移动联通电信5G ',
              imgUrl: 'https://img12.360buyimg.com/n0/s80x80_jfs/t1/197477/3/3815/184791/611cd47eEa1eb7fbd/d1440bb7a3453771.jpg.dpg',
              category: '蓝色 256GB',
              unitPrice: '7399.00',
              count: '1',
              checked: false
            },{
              name: '参天（santen-fx）NEO银款眼药水*12ml 日本原装进口',
              imgUrl: 'https://img13.360buyimg.com/n0/s80x80_jfs/t1/116887/39/12622/86986/5f1140eeE0dacfab4/d357774f07ed6e1a.jpg.dpg',
              category: '参天银色 12ml',
              unitPrice: '36.00',
              count: '2',
              checked: false
            },{
              name: '葡记 咸蛋黄酥20枚礼盒1000g月饼中秋礼包',
              imgUrl: 'https://img11.360buyimg.com/n0/s80x80_jfs/t1/151501/7/20331/93313/603c89c8Ed066c401/8479f01ee7c712fd.jpg.dpg',
              category: '蛋黄酥20枚',
              unitPrice: '59.90',
              count: '3',
              checked: false
            }
          ]
          commit('SET_SHOP_CART', shopCart)
          resolve()
        }, 1000)
      })
    },
    logout({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SET_USERNAME', '')
          commit('SET_PASSWORD', '')
          commit('SET_REAL_NAME', '')
          commit('SET_ID', '')
          commit('SET_AVATAR', '')
          commit('SET_ADDRESS', '')
          commit('SET_ACCESS_TOKEN', '')
          commit('SET_REFRESH_TOKEN', '')
          commit('SET_SHOP_CART', '')
          resolve()
        }, 500)
      })
    }
  },
  modules: {
  }
})
