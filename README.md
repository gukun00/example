# example
- dva+reactjs+ant+mongoDB
- 基于dva搭建前端工程解决方案模板


### 安装软件

- Node.js：v4.9+

### 拷贝项目模板

``` bash
$ git clone https://github.com/gukun00/example.git
```


### 安装依赖模块

``` bash
$ npm install dva-cli -g
$ npm install antd babel-plugin-import --save # 蚂蚁金服UI及按需加载插件
$ cd dva-example && npm install
```

### 本地开发环境

- 启动本地开发服务器

    ``` bash
    $ npm start
    ```

### 业务开发

##### 目录结构

``` js
.
├── mock                      # 假数据文件
├── public                    # 公共组件
│   └── index.html
└── src                       # 源代码目录
    ├── assets                # 资源目录
    │   └── yay.jpg
    ├── components            # 组件目录
    │   ├── Example.js        # 自带例子，参考
    │   └── UserList.js       # 本demo中的用户列表组件
    ├── index.css             # 默认css
    ├── index.js              # 程序入口
    ├── models                # Model层
    │   ├── example.js        # 自带例子，参考
    │   └── users.js          # 用户实体
    ├── router.js             # 路由（参考express）
    ├── routes                # 子路由入口集
    │   ├── IndexPage.css
    │   ├── IndexPage.js
    │   └── Users.js          # 子路由入口（用户）
    ├── services              # 服务方法
    │   └── example.js
    └── utils                 # 工具类
        └── request.js        


```

### 编译


### 模拟生产环境



### 部署&发布



### 修改日志

#### 2017.01.16

- 初次发布


### License

MIT.
