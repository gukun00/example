import React, { PropTypes } from 'react';
import { Table, Popconfirm, Button } from 'antd';
import { browserHistory } from 'react-router'

import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'dva/router';

const UserList = ({ onDelete, users,save }) => {
  const columns = [{
    title: '姓名',
    dataIndex: 'username',
  }, {
    title: '性别',
    dataIndex: 'sex',
    render : (text,record) => {
      if(text == 1)
      {
        return "男";
      }else {
        return "女";
      }
    }
  },{
    title: 'Actions',
    render: (text, record) => {
      //alert(text)

      return (
        <div>
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
        <Link to={{ pathname: '/UserAdd/' + record.id , state: { id: record.id } }}><Button>Edit</Button></Link>
        </div>
      );
    },
  }];

  // function jumpNextLink(id) {
  //     const { history } = this.props;
  //     histroy.push({ pathname: "/UserAdd", state: { } });
  // }

  return (
    <div>
      <Link to="/UserAdd/0"><Button>Add</Button></Link>
      <Button onClick={save}>Save</Button>
      <Table
        dataSource={users}
        columns={columns}
      />
    </div>
  );
};



UserList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  save : PropTypes.func.isRequired,
};

export default UserList;
