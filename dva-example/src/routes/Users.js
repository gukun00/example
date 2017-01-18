import React from 'react';
import { connect } from 'dva';
import UserList from '../components/UserList';

const Users = ({ dispatch, users }) => {
  function handleDelete(id) {
    dispatch({
      type: 'users/delete',
      payload: id,
    });
  }

  function handleAdd() {
    dispatch({
      type: 'users/add',
    });
  }

  return (
    <div>
      <h2>List of Users</h2>
      <UserList onDelete={handleDelete} add={handleAdd} users={users} />
    </div>
  );
};

// export default Users;
export default connect(({ users }) => ({
  users,
}))(Users);
