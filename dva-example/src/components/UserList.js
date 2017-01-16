import React, { PropTypes } from 'react';
import { Table, Popconfirm, Button } from 'antd';

const UserList = ({ onDelete, users }) => {
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
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
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
        
      );
    },
  }];
  return (
    <Table
      dataSource={users}
      columns={columns}
    />
  );
};

UserList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default UserList;
