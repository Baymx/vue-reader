import * as types from './mutations-types'

export  default {
  //當前章節
  [types.CUR_CHAPTER](state,num){
    state.curChapter = num;
  },
  //上一章
  [types.PREV_CHAPTER](state){
    if (state.curChapter <=1){
      return false;
    }
    state.curChapter--;
    console.log("mutations")
  },
  //下一章
  [types.NEXT_CHAPTER](state,maxChapter){
    if (state.curChapter >= maxChapter){
      return false;
    }
    state.curChapter++;
  },
  //顯示標題
  [types.TOGGLE_BAR](state){
    state.bar = !state.bar
  },
  [types.FZ_SIZE_ADD](state){
    console.log(state.fz_size)
    state.fz_size++;
    if (state.fz_size >=24){
      state.fz_size=24;
    }
    console.log(state.fz_size)
    console.log(123)
  },
  [types.FZ_SIZE_SUB](state) {
    state.fz_size--;
    if (state.fz_size <= 14) {
      state.fz_size = 14
    }
  },
  //顯示文字控制板
  [types.SHOW_LIST_PANEL](state) {
    state.list_panel = !state.list_panel
  },
  [types.SHOW_FONT_PANEL](state){
    state.font_panel = !state.font_panel
  },
  [types.SWITCH_NIGHT](state){
    state.bg_night = !state.bg_night
  }
}
