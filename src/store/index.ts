/**
 * @Author       : guth
 * @Date         : 2021-08-30 16:58:45
 * @LastEditors  : guth
 * @LastEditTime : 2021-08-30 16:58:45
 * @FilePath     : \nav-ui\src\store\index.js
 * @Description  : store
 */
import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
});

export default store;
