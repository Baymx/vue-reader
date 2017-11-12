import * as types from './mutations-types'

export  default {
  curChapter({commit},num){
    commit(types.CUR_CHAPTER,num);
  },
  prevChapter({commit}){
    commit(types.PREV_CHAPTER);
  },
  nextChapter({commit,maxChapter}){
    commit(types.NEXT_CHAPTER,maxChapter);
  },
  toggleBar({commit}){
    commit(types.TOGGLE_BAR);
  },
  fzSizeAdd({commit}){
    commit(types.FZ_SIZE_ADD);
    console.log("action")
  },
  fzSizeSub({commit}){
    commit(types.FZ_SIZE_SUB)
  },
  showListPanel({commit}){
    commit(types.SHOW_LIST_PANEL);
  },
  showFontPanel({commit}){
    commit(types.SHOW_FONT_PANEL)
  },
  switchNight({commit}){
    commit(types.SWITCH_NIGHT)
  }
}
