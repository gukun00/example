import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';
import dva from 'dva';
import { connect } from 'dva';
const FormItem = Form.Item;
const Option = Select.Option;
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'dva/router';


class myForm extends React.Component {
  //const CreateForm = Form.create()(React.createClass({
  static propTypes = {
    form: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    users: React.PropTypes.array,
    state: React.PropTypes.object,

  };

  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      let id = 0;
      if(this.props.router.locationBeforeTransitions.state){
        id = this.props.router.locationBeforeTransitions.state.id;
      }
      if (!err) {
        //console.log('Received values of form: ', values);
        //console.log(this.props.users);
        if (id == 0) {
          this.props.dispatch({
            type: 'users/add',
            payload: values,
          });
        }else{
          console.log(values)
          values.id = id;
          this.props.dispatch({
            type: 'users/edit',
            payload: values,
          });
        }
      }
    });
  }

  closeWin() {}

  render() {
    const {users, dispatch, router} = this.props;
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };

    return (
      <Form   onSubmit={this.handleSubmit.bind(this)}>
        <FormItem
      {...formItemLayout}
      label="姓名"
      hasFeedback
      >
          {getFieldDecorator('username', {
        rules: [{
          required: true,
          message: '请输入姓名!',
        }],
      })(
        <Input />
      )}
        </FormItem>
        <FormItem
      {...formItemLayout}
      label="性别"
      hasFeedback
      >
          {getFieldDecorator('sex', {
        rules: [{
          required: true,
          message: '请输入性别!',
        }],
      })(
        <Select placeholder="Please select a country">
           <Option value="1">男</Option>
           <Option value="2">女</Option>
        </Select>
      )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认</Button>
          <Button type="primary" style={{
        marginLeft: 8
      }}   size="large" onClick={this.closeWin.bind(this)}>取消</Button>
        </FormItem>
      </Form>
      );
  }
}
/*
固有方法，给this赋值dispatch
*/
const dispatchProps = (dispatcher, ownProps) => {
  //console.log("dispatch",dispatch,ownProps)
  //dispatch
  return {
    dispatch: dispatcher
  }
}

/*
固有方法，给this赋值state
*/
const mapStateToProps = (state, ownProps) => {
  // state.
  //state
  console.log(state)
  return {
    users: state.users,
    router: state.routing
  }
}

/*
固有方法，给表单赋初始值
*/
const mapPropsToFields = (props) => {
  let id = 0;
  if(props.router.locationBeforeTransitions.state){
    id = props.router.locationBeforeTransitions.state.id;
  }
  let user = {};
  if (id != 0) {
    user = props.users.filter(item => item.id == id)[0];
  } else {

  }

  function getSexString(code) {
    if (code == "1") {
      return "男";
    } else {
      return "女"
    }
  }

  return {
    username: {
      value: user.username,
    },
    sex: {
      value: getSexString(user.sex)
    }
  };
}



myForm = Form.create({
  mapPropsToFields: mapPropsToFields
})(myForm)

//({ users,dispatch}) => ({users,dispatch})
export default connect(mapStateToProps, dispatchProps)(myForm);

// export default connect(({ users,dispatch}) => ({
//   users,dispatch
// }))(myForm);



// export default connect(
//   users,
//   mapDispatchToProps
// )(myForm);


//export default myForm
