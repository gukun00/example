import React from 'react';
import { Router, Route } from 'dva/router';
import Users from './routes/Users';
import UserAdd from './routes/UserAdd';

//import UserAdd from '../components/UserAdd';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Users} />
      <Route path="/UserAdd/:id" component={UserAdd} />
    </Router>
  );
}

// 配置路由
// render((
//     <Router history={hashHistory} >
//         <Route path="/" component={Sider}>
//             <IndexRoute path="myCard" component={myCard} />
//             <Route path="myTable" component={myTable} />
//             <Route path="myForm" component={myForm} />
//             <Route path="myChart" component={myChart} />
//             <Route path="myCalendar" component={myCalendar} />
//             <Route path="myAnimate" component={myAnimate} />
//             <Route path="myCard" component={myCard} />
//         </Route>
//     </Router>
// ), document.getElementById('app'));

export default RouterConfig;
