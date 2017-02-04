import React from 'react';
//import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import { connect } from 'dva';
import MyTable from '../components/UserAdd';

//引用的react组件必须要大写
const usersAdd = () => {

  return (
    <div>
      <h2>Edit User</h2>
      <MyTable  />
    </div>
  );
};

// export default Users;
export default usersAdd;
