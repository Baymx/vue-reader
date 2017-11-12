import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);


const state ={
  //用戶頁面的狀態
  showUser:false,
  bar: false,

  //文字控制板
  font_panel:false,
  //阅读页面的背景颜色
  bg_color:1,
  //字体大小
  fz_size:18,
  bg_night:false,
  //小說的的章節
  curChapter:1,
  windowHeight:'',
  list_panel:false,


};

export default new Vuex.Store({
  state,
  mutations,
  actions
})

