/**
 * Created by Administrator on 2017/11/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'


Vue.use(Vuex)

const state = {
  titleText:'猫眼电影',
  detail:0,
  count:0,
  ranttingC:[]
}
const getters={
  getTitleName(state){
    return state.titleText
  },
  getDetail(state){
    return state.detail
  },
  getCount(state){
    return state.count
  },
  getRanttingC(state){
    return state.ranttingC
  }
}


export default new Vuex.Store({
  state,
  actions,
  getters
})
