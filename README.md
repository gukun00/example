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
  ├── action            #忽略，未用
  │   └── auth.js
  ├── assets
  │   └── yay.jpg       #忽略，未用
  ├── auth              #忽略，未用
  ├── components        # 组件目录
  │   ├── Example.js    # 自带例子，参考   
  │   ├── UserAdd.js    # 新增及修改页面
  │   └── UserList.js   # 本demo中的用户列表组件
  ├── index.css
  ├── index.js
  ├── models
  │   ├── example.js
  │   └── users.js
  ├── router.js
  ├── routes
  │   ├── IndexPage.css
  │   ├── IndexPage.js
  │   ├── UserAdd.js   # 子路由入口（用户新增及修改）
  │   └── Users.js     # 子路由入口（用户）
  ├── services
  │   └── example.js
  └── utils
      └── request.js
```

### 编译


### 模拟生产环境



### 部署&发布



### 修改日志

#### 2017.01.16

- 初次发布


## 为什么使用dva
  - 2017.01.16
    - 相对于传统的react全家桶，dva比较自动化，环境搭建相对比较容易
    - 程序架构比较成熟，且有成熟的维护团队
    - 界面友好，例子比较全
    - 个人比较喜欢其中的程序架构^_^
  - 2017.02.04
    - antd+dva的开发模式比较小清新，但是生态系统一般，例子太少，后面我将探索纯react+redux的例子
    - to be continue
    - mangoo的例子先不做了，比较简单，下次再做

## 例子简介
  - 基于ant-designer官网的项目实战搭建的例子
  - 配合比较流行的数据库mongoDB，构建一个最简单的表单应用
  - 可以作为学习的例子，也可以做简单的项目例子
  - 后续会在这个例子上面进行扩充，重构的以前完成的热网监控系统

## 程序构建，step by step

### 安装node.js 6.9+
### 安装 dva-cli 并确保版本是 0.7.0 或以上
  - 命令：npm install dva-cli -g

### git的使用
  - echo "# example" >> README.md
  - git init
  - git add README.md
  - git commit -m "first commit"
  - git remote add origin https://github.com/gukun00/example.git
  - 如果提示已经存在刚项目先执行命令  git remote rm origin
  - git push -u origin master


### 创建新应用,使用dva创建脚手架
  - 命令：dva new dva-example

### 安装antd和babel-plugin-import
  - antd：蚂蚁金服的组件
  - babel-plugin-import：按需加载的组件
  - 命令：npm install antd babel-plugin-import --save

### mongoose
  - 简介：mongoose为mongoDB api的二次封装，简化了数据库操作
  - 命令： npm install mongoose --save


### License

MIT.
