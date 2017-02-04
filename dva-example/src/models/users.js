
// 这个 model 里：
//namespace 表示在全局 state 上的 key
// state 是初始值，在这里是空数组
//reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
import dva from 'dva';
import { Router, Route } from 'dva/router';

//获取最大的ID
function getMaxId(users){
  var max = 1;
  for(var i=0;i<users.length;i++){
    if(users[i].id >= max){
      max = users[i].id;
    }
  }

  return max + 1;
}

export default {
  namespace: 'users',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      return state.filter(item => item.id !== id);
    },
    'add'(state,{payload:user}){
      user.id = getMaxId(state);
      state.push(user);
      console.log(JSON.stringify(state))
      return state;
    },'edit'(state,{payload:user}){
      for (var u of state) {
          if(u.id == user.id){
            u.username = user.username;
            u.sex = user.sex;
          }
      }

      console.log(state)
      return state;
    }
  }, subscriptions: {
    setup({ history, dispatch,props }) {
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      //console.log(dispatch)
      return history.listen(({ pathname }) => {
        console.log(pathname,props)
        if (pathname === '/UserAdd') {
          console.log(1231231231231)
        }
      });
    },
  },
};
