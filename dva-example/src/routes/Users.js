import React from 'react';
//import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import { connect } from 'dva';
import UserList from '../components/UserList';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'dva/router';

const Users = ({ dispatch, users }) => {
  function handleDelete(id) {
    dispatch({
      type: 'users/delete',
      payload: id,
    });
  }

  function handleSave() {
     for(var i in users){
       console.log(users[i]);
     }
      //alert(JSON.stringify(users))
  }



  return (
    <div>
      <h2>List of Users</h2>
      <UserList onDelete={handleDelete} users={users} save={handleSave} />
    </div>
  );
};

// export default Users;
export default connect(({ users }) => ({
  users
}))(Users);
