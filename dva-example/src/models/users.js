
// 这个 model 里：
//namespace 表示在全局 state 上的 key
// state 是初始值，在这里是空数组
//reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
import dva from 'dva';

export default {
  namespace: 'users',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      return state.filter(item => item.id !== id);
    },
    'add'(state,{}){
      alert("add")
      //需要弹出列表，进行增加
    }
  },
};
